import { Atom, BarChart3, Compass, Cpu, PenTool, Rocket, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

type OrbitNode = { label: string; icon: LucideIcon; angle: number };
type Ring = { inset: string; duration: number; reverse?: boolean; nodes: OrbitNode[] };

const rings: Ring[] = [
  {
    inset: "7%",
    duration: 90,
    nodes: [
      { label: "Strategy", icon: Compass, angle: -60 },
      { label: "GTM", icon: Rocket, angle: 60 },
      { label: "Analytics", icon: BarChart3, angle: 180 },
    ],
  },
  {
    inset: "20%",
    duration: 70,
    reverse: true,
    nodes: [
      { label: "GenAI", icon: Sparkles, angle: 20 },
      { label: "Agentic AI", icon: Cpu, angle: 200 },
    ],
  },
  {
    inset: "32%",
    duration: 55,
    nodes: [
      { label: "Quantum", icon: Atom, angle: -130 },
      { label: "UX", icon: PenTool, angle: 50 },
    ],
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function BlochSphere({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className="size-full" aria-hidden>
      <defs>
        <linearGradient id="bs-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-3)" />
          <stop offset="55%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
        <radialGradient id="bs-fill" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="64"
        fill="url(#bs-fill)"
        stroke="url(#bs-stroke)"
        strokeWidth="1.2"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="64"
        ry="18"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />
      <ellipse cx="100" cy="100" rx="22" ry="64" fill="none" stroke="var(--line)" strokeWidth="1" />
      <line x1="100" y1="28" x2="100" y2="172" stroke="var(--line-strong)" strokeDasharray="3 4" />
      <line x1="30" y1="100" x2="170" y2="100" stroke="var(--line)" strokeDasharray="3 4" />
      <text
        x="100"
        y="20"
        textAnchor="middle"
        className="fill-[var(--muted)] font-mono"
        fontSize="9"
      >
        |0⟩
      </text>
      <text
        x="100"
        y="188"
        textAnchor="middle"
        className="fill-[var(--muted)] font-mono"
        fontSize="9"
      >
        |1⟩
      </text>
      {/* State vector */}
      <line
        x1="100"
        y1="100"
        x2="138"
        y2="62"
        stroke="url(#bs-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="138" cy="62" r="9" fill="var(--accent)" opacity="0.18" />
      <circle cx="138" cy="62" r="4" fill="var(--accent-3)" />
      <circle cx="100" cy="100" r="2.5" fill="var(--fg)" />
      {/* Particle travelling the equator */}
      <circle r="3" fill="var(--accent-2)">
        {animate ? (
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M36,100 a64,18 0 1,0 128,0 a64,18 0 1,0 -128,0"
          />
        ) : null}
      </circle>
    </svg>
  );
}

export function HeroVisual() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(88vw,540px)]" aria-hidden>
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl" />

      {rings.map((ring, r) => (
        <div key={r} className="absolute" style={{ inset: ring.inset }}>
          <div className="absolute inset-0 rounded-full border border-line" />
          {r === 0 && (
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
              <circle
                cx="50"
                cy="50"
                r="49.8"
                fill="none"
                stroke="var(--accent)"
                strokeOpacity="0.5"
                strokeWidth="0.25"
                strokeDasharray="0.6 3"
                className="animate-dash"
              />
            </svg>
          )}
          <div
            className="absolute inset-0"
            style={{
              animation: `${ring.reverse ? "spin-reverse" : "spin-slow"} ${ring.duration}s linear infinite`,
            }}
          >
            {ring.nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${50 + 50 * Math.cos(rad)}%`,
                    top: `${50 + 50 * Math.sin(rad)}%`,
                  }}
                >
                  <div
                    style={{
                      animation: `${ring.reverse ? "spin-slow" : "spin-reverse"} ${ring.duration}s linear infinite`,
                    }}
                  >
                    <div className="glass flex items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1 shadow-[var(--shadow)] sm:gap-2 sm:py-1.5 sm:pr-3 sm:pl-1.5">
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white sm:size-6">
                        <Icon className="size-2.5 sm:size-3" />
                      </span>
                      <span className="text-[10px] font-semibold whitespace-nowrap text-fg sm:text-xs">
                        {node.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* core */}
      <div className="absolute inset-[37%] rounded-full">
        <BlochSphere animate={!reduced} />
      </div>

      {/* floating context cards */}
      <div
        className="animate-float absolute top-[4%] -left-[2%] z-10 hidden sm:block"
        style={{ animationDelay: "-2s" }}
      >
        <div className="rounded-2xl border border-line bg-bg-elev/90 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl">
          <p className="eyebrow !text-[10px]">Currently</p>
          <p className="mt-1 font-display text-sm font-bold text-fg">MBA · SKCET</p>
          <p className="text-xs text-muted">2026 – 2028 (Expected)</p>
        </div>
      </div>
      <div className="animate-float absolute -right-[2%] bottom-[6%] z-10 hidden sm:block">
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg-elev/90 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl">
          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Users className="size-4" />
          </span>
          <div>
            <p className="eyebrow !text-[10px]">Certified</p>
            <p className="font-display text-sm font-bold text-fg">Google UX Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
