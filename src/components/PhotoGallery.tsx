import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { gallery, img, srcSet } from '../data/content';

export default function PhotoGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  // Basic swipe support inside the lightbox
  const touchX = useRef<number | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-cream py-24 text-charcoal lg:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow eyebrow-dark reveal">Gallery</p>
            <h2 id="gallery-title" className="section-title reveal mt-6">
              The Craft. The Cuts. <span className="italic text-walnut">The Shop.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-charcoal/60 lg:text-right">
            Fades, classic cuts, beard work and the tools of a traditional trade.
          </p>
        </div>

        <ul className="mt-14 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {gallery.map((g, i) => (
            <li key={g.id} className="reveal mb-3 break-inside-avoid sm:mb-4" style={{ '--reveal-delay': `${(i % 3) * 80}ms` } as React.CSSProperties}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setIndex(i);
                }}
                className="group relative block w-full overflow-hidden bg-walnut/20"
                aria-label={`View larger: ${g.alt}`}
              >
                <img
                  src={img(g.id, 700)}
                  srcSet={srcSet(g.id, [400, 700, 1000])}
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                    g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/35" aria-hidden="true" />
                <span
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-cream/90 text-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <Expand size={16} strokeWidth={1.5} />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-charcoal/50">
          Representative photography. Photos of the shop and Daniel’s work are coming soon.
        </p>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm animate-[fadeIn_250ms_ease-out]"
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-cream hover:text-brass"
            aria-label="Close photo viewer"
          >
            <X size={28} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute left-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-cream hover:text-brass sm:flex"
            aria-label="Previous photo"
          >
            <ChevronLeft size={34} strokeWidth={1} />
          </button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center">
            <img
              key={gallery[index].id}
              src={img(gallery[index].id, 1600)}
              alt={gallery[index].alt}
              className="max-h-[80vh] w-auto object-contain animate-[fadeIn_300ms_ease-out]"
            />
            <figcaption className="mt-4 flex w-full items-center justify-between gap-6 text-sm text-cream/70">
              <span>{gallery[index].alt}</span>
              <span className="shrink-0 font-sans text-xs tracking-[0.2em] text-brass">
                {index + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-cream hover:text-brass sm:flex"
            aria-label="Next photo"
          >
            <ChevronRight size={34} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  );
}
