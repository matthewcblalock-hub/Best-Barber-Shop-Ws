import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { business, callHref, directionsUrl, navLinks } from '../data/business';

export default function MobileNavigation({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="h-px w-6 bg-cream transition-all group-hover:w-7 group-hover:bg-brass" />
        <span className="h-px w-6 bg-cream transition-all group-hover:bg-brass" />
        <span className="h-px w-4 self-end mr-2.5 bg-brass transition-all group-hover:w-7 group-hover:mr-2" />
      </button>

      {createPortal(
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-charcoal grain transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center text-cream hover:text-brass"
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1.25} />
          </button>
        </div>
        <div className="rule-brass" />

        <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto py-10">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-3 font-serif text-4xl text-cream transition-colors hover:text-brass"
                >
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-brass">
                    0{i + 1}
                  </span>
                  <span className={active === link.href ? 'italic text-brass' : ''}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container-site space-y-3 pb-10">
          <p className="eyebrow mb-4">{business.area}</p>
          <div className="grid grid-cols-2 gap-3">
            <a href={callHref} onClick={() => setOpen(false)} className="btn-brass px-4">
              <Phone size={16} aria-hidden="true" /> Call
            </a>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-4">
              <MapPin size={16} aria-hidden="true" /> Directions
            </a>
          </div>
        </div>
      </div>,
        document.body,
      )}
    </>
  );
}
