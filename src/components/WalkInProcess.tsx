import { ArrowRight, Info } from 'lucide-react';
import { directionsUrl } from '../data/business';

const steps = [
  { title: 'Stop By', text: 'Visit the shop during business hours. No booking, no app, no hassle.' },
  { title: 'Take a Seat', text: 'Enjoy the relaxed, traditional barbershop atmosphere while waiting your turn.' },
  { title: 'Leave Looking Sharp', text: 'Get a haircut shaped around your preferences.' },
];

export default function WalkInProcess() {
  return (
    <section aria-labelledby="walkin-title" className="bg-ivory py-24 text-charcoal lg:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-dark reveal">The Walk-In Experience</p>
            <h2 id="walkin-title" className="section-title reveal mt-6">
              No Complicated Booking. <span className="italic text-walnut">Just a Great Cut.</span>
            </h2>
          </div>
          <p className="reveal leading-relaxed text-charcoal/70 lg:col-span-5">
            Best Barber Shop is known for its traditional walk-in atmosphere. Stop by, take a seat, enjoy the
            conversation, and get a haircut from someone who cares about doing the job right.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal/15 md:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative" style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brass bg-ivory font-serif text-xl italic text-walnut">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-charcoal/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-16 flex flex-col gap-6 border-t border-charcoal/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-xl gap-3 text-sm leading-relaxed text-charcoal/70">
            <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-walnut" aria-hidden="true" />
            As a traditional single-chair shop, wait times can vary. Call ahead if you’d like to check how busy the
            shop is.
          </p>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-dark group shrink-0">
            Get Directions
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
