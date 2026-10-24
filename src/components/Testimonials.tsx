import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { reviewsUrl } from '../data/business';
import { reviews } from '../data/content';

/**
 * Native scroll-snap carousel: swipeable on touch, keyboard-scrollable,
 * three cards on desktop and one on mobile.
 */
export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const total = Math.max(1, Math.ceil((track.scrollWidth - 4) / track.clientWidth));
    setPages(total);
    setPage(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    track?.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      track?.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const go = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
  };

  const goTo = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: p * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="grain relative overflow-hidden bg-charcoal py-24 lg:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow reveal">Real Reviews. Real People.</p>
            <h2 id="reviews-title" className="section-title reveal mt-6 text-ivory">
              A Reputation Built <span className="italic text-brass">One Haircut</span> at a Time.
            </h2>
            <p className="reveal mt-6 max-w-lg text-cream/70">
              Don’t just take our word for it. Hear from the customers who keep coming back.
            </p>
          </div>
          <div className="reveal flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={page === 0}
              className="flex h-12 w-12 items-center justify-center border border-cream/25 text-cream transition-colors hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-cream/25 disabled:hover:text-cream"
              aria-label="Previous reviews"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={page >= pages - 1}
              className="flex h-12 w-12 items-center justify-center border border-cream/25 text-cream transition-colors hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-cream/25 disabled:hover:text-cream"
              aria-label="Next reviews"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar reveal -mx-2 mt-14 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          aria-label="Customer review excerpts"
          tabIndex={0}
        >
          {reviews.map((r) => (
            <li key={r.name} className="w-full shrink-0 snap-start px-2 md:w-1/2 lg:w-1/3">
              <figure className="flex h-full flex-col bg-cream p-8 text-charcoal sm:p-10">
                <span className="font-serif text-7xl leading-[0.6] text-brass" aria-hidden="true">
                  “
                </span>
                <blockquote className="mt-6 flex-1 font-serif text-[1.35rem] leading-snug">
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal font-serif text-lg text-brass">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-walnut/80">
                      Google review · excerpt
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2" role="tablist" aria-label="Review pages">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={page === i}
                aria-label={`Show review page ${i + 1}`}
                onClick={() => goTo(i)}
                className="flex h-8 items-center"
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    page === i ? 'w-10 bg-brass' : 'w-5 bg-cream/30 hover:bg-cream/60'
                  }`}
                />
              </button>
            ))}
          </div>
          <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline group">
            Read More Google Reviews
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-muted sm:text-left">
          Short excerpts from public Google reviews, quoted in the reviewers’ own words.
        </p>
      </div>
    </section>
  );
}
