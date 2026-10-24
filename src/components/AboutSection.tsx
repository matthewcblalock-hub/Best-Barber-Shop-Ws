import { ArrowRight } from 'lucide-react';
import { img, photos, srcSet } from '../data/content';

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="overflow-hidden bg-cream py-24 text-charcoal lg:py-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <p className="eyebrow eyebrow-dark reveal">More Than Just a Haircut</p>
          <h2 id="about-title" className="section-title reveal mt-6 text-charcoal">
            A Real Barbershop. <span className="italic text-walnut">A Timeless Tradition.</span>
          </h2>
          <div className="reveal mt-8 flex items-center gap-4" aria-hidden="true">
            <span className="h-px w-14 bg-brass" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="h-px w-14 bg-brass" />
          </div>
          <div className="reveal mt-8 max-w-xl space-y-5 text-[1.05rem] leading-[1.8] text-charcoal/75">
            <p className="font-serif text-2xl leading-snug text-charcoal">
              Some places are more than businesses. They’re part of the neighborhood.
            </p>
            <p>
              Best Barber Shop represents the kind of traditional barbershop experience that’s becoming harder to
              find — where the conversation is as good as the haircut, the atmosphere is relaxed, and customers are
              remembered by name.
            </p>
            <p>
              Located in North Durham, the shop has earned the loyalty of customers who value skilled hands,
              attention to detail, and straightforward service.
            </p>
            <p>
              Whether you’re stopping in for your regular cut or visiting for the first time, the goal is simple: a
              quality haircut and an experience worth coming back for.
            </p>
          </div>
          <a href="#barber" className="btn-outline-dark group reveal mt-10">
            Discover Our Story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="reveal relative lg:col-span-6">
          <div className="absolute -right-6 -top-6 hidden h-full w-full border border-brass/50 lg:block" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden bg-walnut sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={img(photos.chair, 1000)}
              srcSet={srcSet(photos.chair, [500, 800, 1100, 1400])}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt="Vintage tufted leather barber chair with chrome details under warm light"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-8 left-6 bg-charcoal px-7 py-6 text-cream shadow-2xl sm:left-10 lg:-left-10">
            <p className="font-serif text-3xl italic text-brass">One chair.</p>
            <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-cream/70">
              One barber who knows your name
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
