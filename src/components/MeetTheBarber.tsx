import { ArrowRight, Camera, Eye, MessagesSquare, Repeat, Ruler } from 'lucide-react';

const points = [
  { icon: Ruler, title: 'Precision & Experience', text: 'Haircuts shaped around individual preferences and personal style.' },
  { icon: Eye, title: 'Attention to Detail', text: 'No rushed cuts or one-size-fits-all approach.' },
  { icon: MessagesSquare, title: 'Real Conversation', text: 'A welcoming atmosphere where customers feel at home.' },
  { icon: Repeat, title: 'Consistency', text: 'The kind of dependable haircut that keeps people returning.' },
];

/**
 * Set this to a real photograph of Daniel (with his permission) to replace the placeholder,
 * e.g. '/images/daniel.jpg' placed in /public/images.
 */
const DANIEL_PHOTO: string | null = null;

export default function MeetTheBarber() {
  return (
    <section id="barber" aria-labelledby="barber-title" className="grain relative overflow-hidden bg-forest py-24 lg:py-36">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[22rem] italic leading-none text-cream/[0.025] lg:block"
        aria-hidden="true"
      >
        Daniel
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal lg:col-span-5">
          <figure className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-brass" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-brass" aria-hidden="true" />
            {DANIEL_PHOTO ? (
              <img
                src={DANIEL_PHOTO}
                alt="Daniel, barber at Best Barber Shop in North Durham"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div
                className="flex aspect-[4/5] w-full flex-col items-center justify-center border border-dashed border-brass/40 bg-charcoal text-center"
                role="img"
                aria-label="Placeholder for a photograph of Daniel"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-brass/40 text-brass">
                  <Camera size={24} strokeWidth={1.25} aria-hidden="true" />
                </span>
                <p className="mt-6 font-serif text-3xl text-ivory">Daniel</p>
                <p className="mt-2 max-w-[16rem] px-6 text-xs uppercase leading-relaxed tracking-[0.2em] text-muted">
                  Portrait coming soon
                </p>
              </div>
            )}
            <figcaption className="mt-8 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-cream/60">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              Behind the chair at Best Barber Shop
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow reveal">The Man Behind the Chair</p>
          <h2 id="barber-title" className="section-title reveal mt-6 text-ivory">
            Meet Daniel. <span className="block italic text-brass">Your Barber, Not Just Your Haircut.</span>
          </h2>
          <div className="reveal mt-8 max-w-2xl space-y-5 leading-[1.8] text-cream/75">
            <p className="font-serif text-xl leading-relaxed text-cream sm:text-2xl">
              Ask longtime customers why they keep coming back to Best Barber Shop, and you’ll hear the same name
              again and again: Daniel.
            </p>
            <p>
              Known for his attention to detail, friendly personality, and ability to remember exactly how his
              customers like their hair, Daniel brings a personal touch to every haircut.
            </p>
            <p>
              He takes the time to listen, offers helpful recommendations, and focuses on getting the cut right
              rather than rushing through the next customer.
            </p>
            <p>
              For many visitors, Daniel has become more than their barber. He’s someone they trust, enjoy talking
              with, and recommend to friends and family.
            </p>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden border border-brass/15 bg-brass/15 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="reveal bg-forest p-6 transition-colors duration-300 hover:bg-charcoal"
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <Icon size={22} strokeWidth={1.25} className="text-brass" aria-hidden="true" />
                <h3 className="mt-4 text-xl text-ivory">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{text}</p>
              </li>
            ))}
          </ul>

          <a href="#visit" className="btn-brass group reveal mt-10">
            Come Meet Daniel
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
