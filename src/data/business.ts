/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS DETAILS — the single source of truth for the site.
 * ─────────────────────────────────────────────────────────────
 *  Every value set to `null` is genuinely unverified. Fill it in
 *  once the owner confirms it and the whole site updates:
 *  buttons, footer, location section, FAQ and mobile action bar.
 *
 *  Also update the matching fields in index.html (JSON-LD
 *  structured data + canonical URL) and public/sitemap.xml.
 *  Never copy details from a different "Best Barber Shop" listing.
 */

export type DayHours = { day: string; hours: string | null };

export const business = {
  name: 'Best Barber Shop',
  tagline: 'A Good Cut. A Great Conversation.',
  area: 'North Durham, North Carolina',
  city: 'Durham',
  region: 'NC',

  /** e.g. '(919) 555-0123' — display format. */
  phoneDisplay: '(919) 471-4663' as string | null,
  /** e.g. '+19195550123' — used for tel: links. */
  phoneTel: '+19194714663' as string | null,

  /** e.g. { street: '123 Main St', city: 'Durham', region: 'NC', zip: '27704' } */
  address: null as null | { street: string; city: string; region: string; zip: string },

  /**
   * Link to the verified Google Business Profile / Maps place.
   * Until set, directions use a Google Maps search, which may
   * surface similarly named businesses — replace before launch.
   */
  googleMapsUrl: null as string | null,
  /** Embed URL from Google Maps → Share → Embed a map (the src value). */
  googleMapsEmbedUrl: null as string | null,
  /** Link to the Google reviews for the verified listing. */
  googleReviewsUrl: null as string | null,

  /** Set each day's hours as confirmed, e.g. '9:00 AM – 6:00 PM' or 'Closed'. */
  hours: [
    { day: 'Monday', hours: '8 AM – 5 PM' },
    { day: 'Tuesday', hours: '8 AM – 5 PM' },
    { day: 'Wednesday', hours: '8 AM – 5 PM' },
    { day: 'Thursday', hours: '8 AM – 5 PM' },
    { day: 'Friday', hours: '8 AM – 3 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ] as DayHours[],

  /** Reviews describe a walk-in, single-chair shop. Confirm before launch. */
  walkInsOnly: true,

  /** Only add profiles that officially exist. */
  social: [] as { label: string; url: string }[],
};

const searchQuery = encodeURIComponent(`${business.name} North Durham NC`);

export const directionsUrl =
  business.googleMapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

export const reviewsUrl =
  business.googleReviewsUrl ?? `https://www.google.com/search?q=${searchQuery}+reviews`;

/** Falls back to the Visit section, where contact details are listed. */
export const callHref = business.phoneTel ? `tel:${business.phoneTel}` : '#visit';

export const hasPhone = Boolean(business.phoneTel);
export const hasHours = business.hours.some((d) => d.hours !== null);

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
];
