import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { business, callHref, directionsUrl, hasHours, hasPhone, navLinks } from '../data/business';

export default function Footer() {
  const { address } = business;
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative bg-charcoal pb-28 pt-20 lg:pb-12">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-6 font-serif text-xl italic text-cream/80">“{business.tagline}”</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              A traditional walk-in barbershop serving North Durham, North Carolina.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-label text-brass">Explore</h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-cream/75 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-label text-brass">Contact</h2>
            <ul className="mt-6 space-y-4 text-cream/75">
              <li>
                {hasPhone ? (
                  <a href={callHref} className="link-underline hover:text-cream">
                    {business.phoneDisplay}
                  </a>
                ) : (
                  <span className="text-muted">Phone number coming soon</span>
                )}
              </li>
              <li>
                {address ? (
                  <address className="not-italic">
                    {address.street}
                    <br />
                    {address.city}, {address.region} {address.zip}
                  </address>
                ) : (
                  <span>North Durham, NC</span>
                )}
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brass hover:text-brass-light"
                >
                  Google Maps directions <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-label text-brass">Hours</h2>
            {hasHours ? (
              <ul className="mt-6 space-y-1.5 text-sm text-cream/75">
                {business.hours.map((d) => (
                  <li key={d.day} className="flex justify-between gap-4">
                    <span>{d.day.slice(0, 3)}</span>
                    <span>{d.hours ?? '—'}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-muted">Hours coming soon. Call ahead to confirm before visiting.</p>
            )}
          </div>
        </div>

        {business.social.length > 0 && (
          <ul className="mt-12 flex gap-6">
            {business.social.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-cream/75 hover:text-cream">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="rule-brass mt-16" />
        <div className="mt-8 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Barber shop in North Durham, NC · Walk-ins welcome</p>
        </div>
      </div>
    </footer>
  );
}
