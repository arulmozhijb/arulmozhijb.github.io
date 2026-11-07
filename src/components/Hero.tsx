import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { certifications, profile, projects, skillGroups } from "../content";
import { HeroVisual } from "./HeroVisual";
import { buttonClass, Sheen } from "./ui";

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Product concepts" },
  { value: String(skillGroups.length).padStart(2, "0"), label: "Skill domains" },
  {
    value: String(certifications.length).padStart(2, "0"),
    label: "Certifications",
    note: "1 in progress",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="animate-modal-in mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-4 pl-2 backdrop-blur-xl">
            <span className="relative flex size-2.5 items-center justify-center">
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-accent-3" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-3" />
            </span>
            <span className="text-xs font-medium text-muted">{profile.role}</span>
          </div>

          <h1
            id="hero-title"
            className="animate-modal-in font-display text-[clamp(3.1rem,10vw,7.4rem)] leading-[0.92] font-extrabold tracking-[-0.055em] text-fg"
            style={{ animationDelay: "80ms" }}
          >
            Arul Mozhi <span className="text-gradient pr-[0.04em]">JB</span>
          </h1>

          <p
            className="animate-modal-in mt-8 font-display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug font-semibold tracking-tight text-fg"
            style={{ animationDelay: "160ms" }}
          >
            <span className="block">{profile.headline[0]}</span>
            <span className="block text-muted">
              {profile.headline.slice(1).map((part, i) => (
                <span key={part}>
                  {i > 0 && (
                    <span className="mx-2.5 text-accent" aria-hidden>
                      /
                    </span>
                  )}
                  {i > 0 && <span className="sr-only">, </span>}
                  {part}
                </span>
              ))}
            </span>
          </p>

          <p
            className="animate-modal-in mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-modal-in mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <a href="#projects" className={buttonClass("primary")}>
              <Sheen />
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className={buttonClass("secondary")}
            >
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>

          <dl
            className="animate-modal-in mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8"
            style={{ animationDelay: "400ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs text-muted sm:text-sm">
                  {s.label}
                  {s.note && <span className="block text-subtle">{s.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in lg:col-span-5" style={{ animationDelay: "300ms" }}>
          <HeroVisual />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-between px-8 lg:flex">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 text-xs text-subtle">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5" /> {profile.location}
          </span>
          <a
            href="#about"
            className="pointer-events-auto inline-flex items-center gap-2 transition hover:text-fg"
          >
            Scroll to explore <ArrowDown className="size-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
