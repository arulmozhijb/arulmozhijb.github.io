import { profile } from "../content";

/** Slim marquee band carrying the four personal-brand pillars. */
export function Pillars() {
  const row = [...profile.pillars, ...profile.pillars];
  return (
    <div className="relative border-y border-line bg-surface py-5" aria-label="Focus areas">
      <ul className="sr-only">
        {profile.pillars.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div
        className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        aria-hidden
      >
        {[0, 1].map((k) => (
          <div key={k} className="animate-marquee flex shrink-0 items-center">
            {row.map((p, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-10 pr-10">
                <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap text-muted sm:text-2xl">
                  {p}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 shrink-0 text-accent"
                  fill="currentColor"
                >
                  <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
