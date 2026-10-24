import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-ivory py-24 text-charcoal lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <p className="eyebrow eyebrow-dark reveal">FAQ</p>
          <h2 id="faq-title" className="section-title reveal mt-6">
            Good Questions. <span className="block italic text-walnut">Straight Answers.</span>
          </h2>
        </div>

        <div className="reveal lg:col-span-8">
          <ul className="border-t border-charcoal/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-charcoal/15">
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-serif text-xl transition-colors group-hover:text-walnut sm:text-2xl">{f.q}</span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? 'rotate-45 border-brass bg-brass text-charcoal' : 'border-charcoal/25 text-charcoal'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={16} strokeWidth={1.5} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className={`overflow-hidden transition-[visibility] duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
                      <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-charcoal/70">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
