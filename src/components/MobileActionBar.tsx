import { MapPin, Phone } from 'lucide-react';
import { callHref, directionsUrl } from '../data/business';

/** Persistent bottom bar on small screens. The page reserves space for it (see App). */
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brass/25 bg-charcoal/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid h-16 grid-cols-2 divide-x divide-brass/20">
        <a
          href={callHref}
          className="flex items-center justify-center gap-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-cream active:bg-forest"
        >
          <Phone size={17} className="text-brass" aria-hidden="true" />
          Call Shop
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 bg-brass text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-charcoal active:bg-brass-dark"
        >
          <MapPin size={17} aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
