import { ArrowRight, ArrowUpRight } from 'lucide-react';
import TrustIndicators from './TrustIndicators';
import { callHref } from '../data/business';
import { img, photos, srcSet } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal">
      <img
        src={img(photos.hero, 1600)}
        srcSet={srcSet(photos.hero, [640, 960, 1280, 1600, 2200])}
        sizes="100vw"
        alt="Traditional barbershop interior with leather barber chairs, brick walls and warm pendant lighting"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[65%_center] animate-[heroZoom_14s_ease-out_forwards]"
        {...{ fetchpriority: "high" }}
      />
      {/* Left-weighted overlay for legibility, plus a floor fade into the next section */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,166,107,0.12),transparent_60%)]" aria-hidden="true" />

      <div className="container-site relative flex flex-1 flex-col justify-center pb-10 pt-32 lg:pt-36">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">North Durham, North Carolina</p>
          <h1
            className="reveal mt-6 text-[2.9rem] font-medium leading-[0.98] tracking-[-0.02em] text-ivory sm:text-6xl lg:text-[5.4rem]"
            style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
          >
            A Great Haircut <em className="font-medium text-brass">Never</em> Goes Out of Style.
          </h1>
          <p
            className="reveal mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
          >
            Great haircuts, fair prices, and the kind of barbershop where everybody feels welcome. Experience
            traditional barbering, genuine conversation, and craftsmanship that keeps customers coming back.
          </p>
          <div
            className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ '--reveal-delay': '300ms' } as React.CSSProperties}
          >
            <a href="#visit" className="btn-brass group">
              Walk In for a Cut
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href={callHref} className="btn-outline group">
              Call the Shop
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <TrustIndicators />
    </section>
  );
}
