import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';
import { callHref, navLinks } from '../data/business';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#top');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-brass/20 bg-charcoal/95 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-charcoal/80 to-transparent'
      }`}
    >
      <div
        className={`container-site flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-[4.25rem]' : 'h-20 lg:h-24'
        }`}
      >
        <a href="#top" aria-label="Best Barber Shop — back to top" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`link-underline text-[0.74rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-cream ${
                    active === link.href ? 'text-cream' : 'text-cream/70'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={callHref} className="btn-brass hidden min-h-[2.9rem] px-5 sm:inline-flex">
            <Phone size={15} strokeWidth={2} aria-hidden="true" />
            Call the Shop
          </a>
          <MobileNavigation active={active} />
        </div>
      </div>
    </header>
  );
}
