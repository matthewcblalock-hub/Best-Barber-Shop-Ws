type LogoProps = {
  /** `dark` = for dark backgrounds (cream type), `light` = for light backgrounds. */
  variant?: 'dark' | 'light';
  size?: 'sm' | 'lg';
  className?: string;
};

/** Wordmark: large serif BEST over a spaced BARBER SHOP, framed by thin brass rules. */
export default function Logo({ variant = 'dark', size = 'sm', className = '' }: LogoProps) {
  const ink = variant === 'dark' ? 'text-cream' : 'text-charcoal';
  const lg = size === 'lg';

  return (
    <span className={`inline-flex flex-col items-center leading-none ${ink} ${className}`}>
      <span
        className={`font-serif font-semibold tracking-[0.14em] ${lg ? 'text-6xl' : 'text-[1.7rem]'}`}
        style={{ marginRight: '-0.14em' }}
      >
        BEST
      </span>
      <span className={`flex w-full items-center ${lg ? 'mt-3 gap-3' : 'mt-1.5 gap-1.5'}`}>
        <span className="h-px flex-1 bg-brass" aria-hidden="true" />
        <span
          className={`whitespace-nowrap font-sans font-semibold uppercase text-brass ${
            lg ? 'text-sm tracking-[0.42em]' : 'text-[0.52rem] tracking-[0.32em]'
          }`}
          style={{ marginRight: lg ? '-0.42em' : '-0.32em' }}
        >
          Barber Shop
        </span>
        <span className="h-px flex-1 bg-brass" aria-hidden="true" />
      </span>
    </span>
  );
}
