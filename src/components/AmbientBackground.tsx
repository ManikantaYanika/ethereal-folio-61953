/**
 * AmbientBackground
 * A fixed, page-wide ambient layer combining:
 * - Soft mesh gradient for warmth
 * - Subtle grain texture for premium feel
 * Sits behind all content (z-index -10) and is non-interactive.
 */
export const AmbientBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base warm gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      {/* Soft drifting orbs */}
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full opacity-60 orb-drift"
        style={{ background: 'var(--gradient-orb)' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full opacity-50 orb-drift"
        style={{
          background: 'var(--gradient-orb)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full opacity-40 orb-drift"
        style={{
          background: 'var(--gradient-orb)',
          animationDelay: '-12s',
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.04,
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};
