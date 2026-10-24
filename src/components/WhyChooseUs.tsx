import { Armchair, Ear, HandCoins, Scissors } from 'lucide-react';

const reasons = [
  {
    icon: Scissors,
    title: 'Haircuts Done Right',
    text: 'From classic cuts to clean fades, attention to detail makes every visit count.',
  },
  {
    icon: Ear,
    title: 'A Barber Who Listens',
    text: 'Your haircut should look the way you want it. Clear communication and thoughtful recommendations help make that happen.',
  },
  {
    icon: HandCoins,
    title: 'Fair, Honest Pricing',
    text: 'Quality barbering shouldn’t require luxury salon prices.',
  },
  {
    icon: Armchair,
    title: 'A Place That Feels Familiar',
    text: 'Good conversation, a welcoming atmosphere, and a barber who remembers your name.',
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-ivory py-24 text-charcoal lg:py-32">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-dark reveal justify-center">Why Customers Keep Coming Back</p>
          <h2 id="why-title" className="section-title reveal mt-6">
            The Details Make the <span className="italic text-walnut">Difference.</span>
          </h2>
        </div>

        <ul className="mt-16 grid border-t border-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="group reveal relative border-b border-charcoal/10 px-2 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r"
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <span
                className="absolute left-0 top-0 h-[2px] w-0 bg-brass transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="font-serif text-5xl italic text-brass/80">0{i + 1}</span>
                <Icon
                  size={26}
                  strokeWidth={1.1}
                  className="text-walnut transition-transform duration-500 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 text-2xl leading-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal/65">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
