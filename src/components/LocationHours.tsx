import { Clock, DoorOpen, MapPin, Navigation, Phone } from 'lucide-react';
import { business, callHref, directionsUrl, hasHours, hasPhone } from '../data/business';

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

export default function LocationHours() {
  const { address } = business;

  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-cream py-24 text-charcoal lg:py-36">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-dark reveal">Visit Us</p>
          <h2 id="visit-title" className="section-title reveal mt-6">
            Your Neighborhood Barbershop <span className="italic text-walnut">in North Durham.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Details */}
          <div className="reveal bg-ivory p-7 shadow-[0_30px_60px_-40px_rgba(17,23,21,0.35)] sm:p-10 lg:col-span-5">
            <h3 className="text-3xl">{business.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-walnut">{business.tagline}</p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt>
                  <MapPin size={20} strokeWidth={1.5} className="mt-0.5 text-brass-dark" aria-hidden="true" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  {address ? (
                    <address className="not-italic leading-relaxed">
                      {address.street}
                      <br />
                      {address.city}, {address.region} {address.zip}
                    </address>
                  ) : (
                    <>
                      <span className="block">North Durham, NC</span>
                      <span className="mt-1 block text-sm text-charcoal/50">Street address coming soon</span>
                    </>
                  )}
                </dd>
              </div>

              <div className="flex gap-4">
                <dt>
                  <Phone size={20} strokeWidth={1.5} className="mt-0.5 text-brass-dark" aria-hidden="true" />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>
                  {hasPhone ? (
                    <a href={callHref} className="link-underline text-lg font-semibold">
                      {business.phoneDisplay}
                    </a>
                  ) : (
                    <span className="text-sm text-charcoal/50">Phone number coming soon</span>
                  )}
                </dd>
              </div>

              <div className="flex gap-4">
                <dt>
                  <DoorOpen size={20} strokeWidth={1.5} className="mt-0.5 text-brass-dark" aria-hidden="true" />
                  <span className="sr-only">Walk-in policy</span>
                </dt>
                <dd className="leading-relaxed">
                  Walk-ins welcome. First come, first served.
                  <span className="block text-sm text-charcoal/55">Single-chair shop — wait times vary.</span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt>
                  <Clock size={20} strokeWidth={1.5} className="mt-0.5 text-brass-dark" aria-hidden="true" />
                  <span className="sr-only">Hours</span>
                </dt>
                <dd className="flex-1">
                  <table className="w-full text-sm">
                    <caption className="sr-only">Business hours</caption>
                    <tbody>
                      {business.hours.map((d) => (
                        <tr
                          key={d.day}
                          className={`border-b border-charcoal/10 last:border-0 ${d.day === today ? 'font-semibold text-charcoal' : 'text-charcoal/70'}`}
                        >
                          <th scope="row" className="py-2 text-left font-[inherit]">
                            {d.day}
                            {d.day === today && (
                              <span className="ml-2 text-[0.6rem] uppercase tracking-[0.2em] text-brass-dark">Today</span>
                            )}
                          </th>
                          <td className="py-2 text-right">{d.hours ?? <span className="text-charcoal/40">—</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {!hasHours && <p className="mt-3 text-xs text-charcoal/50">Hours will be posted once confirmed.</p>}
                </dd>
              </div>
            </dl>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-brass">
                <Navigation size={16} aria-hidden="true" /> Directions
              </a>
              <a href={callHref} className="btn-outline-dark">
                <Phone size={16} aria-hidden="true" /> Call the Shop
              </a>
            </div>

            <p className="mt-6 border-t border-charcoal/10 pt-6 text-sm italic text-charcoal/60">
              Planning to stop by? Give us a call to confirm today’s hours or check the wait.
            </p>
          </div>

          {/* Map */}
          <div className="reveal relative min-h-[22rem] overflow-hidden bg-charcoal lg:col-span-7">
            {business.googleMapsEmbedUrl ? (
              <iframe
                src={business.googleMapsEmbedUrl}
                title="Map showing the location of Best Barber Shop in North Durham"
                className="absolute inset-0 h-full w-full border-0 grayscale-[40%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <MapPlaceholder />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Shown until the verified Google Maps listing is supplied, so we never embed the wrong business. */
function MapPlaceholder() {
  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="streets" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
            <path d="M0 40h80M40 0v80" stroke="#C9A66B" strokeOpacity="0.09" strokeWidth="1" />
            <path d="M0 0h80" stroke="#C9A66B" strokeOpacity="0.18" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#streets)" />
        <path d="M-50 260 C 200 180, 380 360, 900 220" stroke="#C9A66B" strokeOpacity="0.28" strokeWidth="3" fill="none" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#111715_80%)]" />
      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brass text-charcoal">
          <span className="absolute inset-0 animate-ping rounded-full bg-brass/30 motion-reduce:hidden" aria-hidden="true" />
          <MapPin size={26} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className="mt-6 font-serif text-3xl text-ivory">North Durham, NC</p>
        <p className="mt-2 max-w-xs text-sm text-cream/60">Interactive map coming soon.</p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brass"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
