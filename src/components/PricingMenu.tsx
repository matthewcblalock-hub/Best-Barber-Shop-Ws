import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';

const menuNames: Record<string, string> = {
  classic: 'Classic Haircut',
  fade: 'Fade or Taper',
  beard: 'Beard Trim',
  kids: 'Kids’ Haircut',
};

export default function PricingMenu() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-forest py-24 lg:py-36">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow reveal">Services &amp; Pricing</p>
          <h2 id="services-title" className="section-title reveal mt-6 text-ivory">
            Quality Cuts. <span className="block italic text-brass">Straightforward Prices.</span>
          </h2>
          <p className="reveal mt-6 max-w-md leading-relaxed text-cream/70">
            Great haircuts, honest service, and fair value. No unnecessary extras.
          </p>
          <a href="#visit" className="btn-brass group reveal mt-10">
            Stop In for a Cut
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        {/* Styled after a traditional shop price board */}
        <div className="reveal lg:col-span-7">
          <div className="relative border border-brass/35 p-2">
            <div className="border border-brass/20 bg-charcoal px-6 py-10 sm:px-12 sm:py-14">
              <div className="text-center">
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-label text-brass">
                  Best Barber Shop
                </p>
                <p className="mt-3 font-serif text-3xl italic text-ivory">The Menu</p>
                <div className="mx-auto mt-5 flex max-w-[10rem] items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-brass/60" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
                  <span className="h-px flex-1 bg-brass/60" />
                </div>
              </div>

              <ul className="mt-10">
                {services.map((s) => (
                  <li key={s.id} className="border-b border-brass/20 py-6 last:border-b-0">
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-serif text-2xl text-ivory">{menuNames[s.id]}</h3>
                      <span className="mb-1.5 flex-1 border-b border-dotted border-brass/40" aria-hidden="true" />
                      <span className="whitespace-nowrap font-serif text-xl text-brass">
                        {s.price ?? <span className="font-sans text-xs uppercase tracking-[0.18em]">Ask in shop</span>}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-cream/60">{s.menu}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-center text-xs leading-relaxed text-muted">
                Prices are confirmed in the shop — call or stop by for current rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
