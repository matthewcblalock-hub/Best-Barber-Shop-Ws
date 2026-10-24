import { DoorOpen, Scissors, Scale } from 'lucide-react';

const items = [
  { icon: Scissors, title: 'Precision Haircuts', text: 'Attention to every detail.' },
  { icon: Scale, title: 'Fair Prices', text: 'Quality without unnecessary expense.' },
  { icon: DoorOpen, title: 'Walk-In Tradition', text: 'A classic neighborhood experience.' },
];

export default function TrustIndicators() {
  return (
    <div className="relative border-t border-brass/20 bg-charcoal/60 backdrop-blur-sm">
      <ul className="container-site grid divide-y divide-brass/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className="reveal flex items-center gap-4 py-5 sm:justify-center sm:px-6 sm:py-7"
            style={{ '--reveal-delay': `${400 + i * 100}ms` } as React.CSSProperties}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/40 text-brass">
              <Icon size={18} strokeWidth={1.25} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-lg text-ivory">{title}</span>
              <span className="block text-sm text-muted">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
