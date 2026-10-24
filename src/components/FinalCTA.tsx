import { ArrowRight } from 'lucide-react';
import { callHref, directionsUrl } from '../data/business';
import { img, photos, srcSet } from '../data/content';

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-charcoal py-32 lg:py-44">
      <img
        src={img(photos.toolsCounter, 1600)}
        srcSet={srcSet(photos.toolsCounter, [640, 1000, 1600, 2200])}
        sizes="100vw"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/70" aria-hidden="true" />

      <div className="container-site relative">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">Ready for a Fresh Cut?</p>
          <h2 id="cta-title" className="reveal mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-ivory sm:text-6xl lg:text-7xl">
            Your Next Great Haircut <span className="italic text-brass">Is Waiting.</span>
          </h2>
          <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-cream/75">
            No fuss. No complicated appointments. Just a skilled barber, a welcoming chair, and a haircut done right.
          </p>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-brass group">
              Get Directions
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href={callHref} className="btn-outline group">
              Call the Shop
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
