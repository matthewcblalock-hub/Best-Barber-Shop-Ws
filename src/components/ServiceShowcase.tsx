import { ArrowRight } from 'lucide-react';
import { img, services, srcSet } from '../data/content';

export default function ServiceShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="bg-charcoal pb-24 pt-20 lg:pb-32 lg:pt-28">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="reveal">
            <p className="eyebrow">What We Do</p>
            <h2 id="showcase-title" className="section-title mt-5 max-w-xl text-ivory">
              Traditional Cuts. <span className="italic text-brass">Timeless</span> Craftsmanship.
            </h2>
          </div>
          <p className="reveal max-w-sm text-cream/65 lg:text-right">
            Neighborhood barbering in North Durham — done carefully, never rushed.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((s, i) => (
            <li
              key={s.id}
              className="reveal"
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <a
                href="#services"
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-forest lg:aspect-[3/4.4]"
              >
                <img
                  src={img(s.photo, 700)}
                  srcSet={srcSet(s.photo, [400, 700, 1000])}
                  sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw"
                  alt={s.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[35%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/5 transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />
                <div className="absolute inset-3 border border-cream/0 transition-colors duration-500 group-hover:border-brass/40" aria-hidden="true" />
                <div className="relative p-6 lg:p-7">
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] text-brass">
                    0{i + 1}
                  </span>
                  <span className="mt-3 block h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl text-ivory lg:text-[1.65rem]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brass">
                    View menu
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
