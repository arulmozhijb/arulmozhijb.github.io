import type { Project } from "../content";

/** Decorative, illustrative artwork for each project concept (no real data). */
export function ProjectArt({ slug, className }: { slug: Project["slug"]; className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id={`pa-grad-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-3)" />
          <stop offset="50%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
        <radialGradient id={`pa-glow-${slug}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="150" fill={`url(#pa-glow-${slug})`} />
      {slug === "zia" && <ZiaArt grad={`url(#pa-grad-${slug})`} />}
      {slug === "quantum-enterprise-ai" && <QuantumArt grad={`url(#pa-grad-${slug})`} />}
      {slug === "meta-ads" && <AdsArt grad={`url(#pa-grad-${slug})`} />}
    </svg>
  );
}

function ZiaArt({ grad }: { grad: string }) {
  const tiles = [
    { x: 40, y: 50 },
    { x: 40, y: 190 },
    { x: 316, y: 50 },
    { x: 316, y: 190 },
  ];
  return (
    <g>
      {tiles.map((t, i) => {
        const toX = t.x < 200 ? 148 : 252;
        return (
          <g key={i}>
            <path
              d={`M${t.x + 22} ${t.y + 22} C ${(t.x + toX) / 2} ${t.y + 22}, ${(t.x + toX) / 2} 150, ${toX} 150`}
              stroke="var(--accent)"
              strokeOpacity="0.55"
              strokeDasharray="3 5"
              className="animate-dash"
            />
            <rect
              x={t.x}
              y={t.y}
              width="44"
              height="44"
              rx="12"
              fill="var(--bg-elev)"
              stroke="var(--line-strong)"
            />
            <rect
              x={t.x + 13}
              y={t.y + 13}
              width="18"
              height="18"
              rx="5"
              fill={grad}
              opacity={0.35 + i * 0.15}
            />
          </g>
        );
      })}
      {/* phone */}
      <rect
        x="148"
        y="28"
        width="104"
        height="244"
        rx="22"
        fill="var(--bg-elev)"
        stroke="var(--line-strong)"
      />
      <rect x="186" y="38" width="28" height="6" rx="3" fill="var(--line-strong)" />
      <rect
        x="160"
        y="64"
        width="62"
        height="22"
        rx="11"
        fill="var(--surface-strong)"
        stroke="var(--line)"
      />
      <rect x="168" y="73" width="40" height="4" rx="2" fill="var(--muted)" opacity="0.6" />
      <rect x="180" y="96" width="62" height="22" rx="11" fill={grad} />
      <rect x="190" y="105" width="40" height="4" rx="2" fill="#fff" opacity="0.8" />
      <rect
        x="160"
        y="128"
        width="72"
        height="40"
        rx="12"
        fill="var(--surface-strong)"
        stroke="var(--line)"
      />
      <rect x="170" y="140" width="50" height="4" rx="2" fill="var(--muted)" opacity="0.6" />
      <rect x="170" y="150" width="34" height="4" rx="2" fill="var(--muted)" opacity="0.4" />
      <path d="M168 192l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="var(--accent-3)" />
      <rect x="184" y="196" width="44" height="4" rx="2" fill="var(--muted)" opacity="0.5" />
      <rect
        x="160"
        y="236"
        width="80"
        height="24"
        rx="12"
        fill="var(--surface)"
        stroke="var(--line-strong)"
      />
      <circle cx="228" cy="248" r="7" fill={grad} />
    </g>
  );
}

function QuantumArt({ grad }: { grad: string }) {
  const layers = Array.from({ length: 9 }, (_, i) => i);
  return (
    <g>
      {layers.map((i) => {
        const y = 40 + i * 25;
        return (
          <g
            key={i}
            className="transition-transform duration-500"
            style={{ transform: `translateX(${(i % 2) * 6 - 3}px)` }}
          >
            <path
              d={`M110 ${y} L300 ${y} L320 ${y + 14} L130 ${y + 14} Z`}
              fill={i === 4 ? grad : "var(--bg-elev)"}
              fillOpacity={i === 4 ? 0.85 : 1}
              stroke="var(--line-strong)"
            />
            <text
              x="92"
              y={y + 11}
              textAnchor="end"
              fontSize="9"
              className="fill-[var(--subtle)] font-mono"
            >
              {`L${i + 1}`}
            </text>
          </g>
        );
      })}
      <line
        x1="215"
        y1="22"
        x2="215"
        y2="276"
        stroke={grad}
        strokeWidth="1.5"
        strokeDasharray="2 4"
        className="animate-dash"
      />
      {[47, 122, 197, 247].map((y) => (
        <circle key={y} cx="215" cy={y} r="3.5" fill="var(--accent-3)" />
      ))}
      <g transform="translate(330 20)">
        <rect width="54" height="26" rx="13" fill="var(--bg-elev)" stroke="var(--line-strong)" />
        <path
          d="M14 13l4 4 8-8"
          stroke="var(--accent-3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="31" y="11" width="14" height="4" rx="2" fill="var(--muted)" />
      </g>
    </g>
  );
}

function AdsArt({ grad }: { grad: string }) {
  const bars = [
    { y: 46, w: 120 },
    { y: 86, w: 84 },
    { y: 126, w: 144 },
    { y: 166, w: 64 },
  ];
  return (
    <g>
      <circle cx="70" cy="122" r="30" fill="var(--bg-elev)" stroke="var(--line-strong)" />
      <circle cx="70" cy="122" r="16" fill={grad} />
      {bars.map((b, i) => (
        <g key={i}>
          <path
            d={`M100 122 C 150 122, 150 ${b.y + 9}, 196 ${b.y + 9}`}
            stroke="var(--accent)"
            strokeOpacity="0.55"
            strokeDasharray="3 5"
            className="animate-dash"
          />
          <rect
            x="200"
            y={b.y}
            width="160"
            height="18"
            rx="9"
            fill="var(--bg-elev)"
            stroke="var(--line)"
          />
          <rect
            x="200"
            y={b.y}
            width={b.w}
            height="18"
            rx="9"
            fill={grad}
            opacity={0.5 + i * 0.12}
          />
        </g>
      ))}
      <line x1="40" y1="262" x2="360" y2="262" stroke="var(--line-strong)" />
      <path
        d="M40 250 C 90 246, 120 226, 170 228 S 250 218, 290 214 S 340 206, 360 204"
        stroke={grad}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M40 252 L360 202" stroke="var(--muted)" strokeOpacity="0.5" strokeDasharray="2 5" />
      <circle cx="290" cy="214" r="5" fill="var(--accent-3)" />
    </g>
  );
}
