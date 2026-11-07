import { Atom, Compass, GraduationCap, Sparkles, Users, Briefcase } from "lucide-react";
import { focusAreas, journey, profile } from "../content";
import { spotlightMove } from "../lib/hooks";
import { cx, Reveal, Section, SectionHeader } from "./ui";

const icons = { compass: Compass, users: Users, sparkles: Sparkles, atom: Atom };

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        id="about"
        index="02"
        label="About Me"
        title={
          <>
            Where business thinking meets <span className="text-gradient">AI and design.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? "text-fg" : undefined}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={240} className="mt-10 grid grid-cols-2 gap-3">
            <div className="card rounded-2xl p-5">
              <Briefcase className="size-5 text-accent" aria-hidden />
              <p className="mt-4 font-display text-xl font-bold text-fg">MBA</p>
              <p className="mt-1 text-sm text-muted">Business & management</p>
              <p className="mt-3 font-mono text-[11px] text-subtle">2026 – 2028 · Expected</p>
            </div>
            <div className="card rounded-2xl p-5">
              <GraduationCap className="size-5 text-accent-2" aria-hidden />
              <p className="mt-4 font-display text-xl font-bold text-fg">BCA</p>
              <p className="mt-1 text-sm text-muted">Computer applications</p>
              <p className="mt-3 font-mono text-[11px] text-subtle">2022 – 2025</p>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {focusAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <Reveal
                as="li"
                key={area.title}
                delay={i * 90}
                onPointerMove={spotlightMove}
                className="card spotlight group overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-line bg-surface-strong text-fg transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display text-xl font-bold tracking-tight text-fg">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>

      {/* Journey */}
      <Reveal className="card mt-20 overflow-hidden p-7 sm:p-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">The journey so far</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              From computer applications to product management
            </h3>
          </div>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-4">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-line-strong via-accent/60 to-accent-2/60 md:top-[7px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full md:bg-gradient-to-r"
          />
          {journey.map((step, i) => {
            const isFuture = i >= journey.length - 2;
            return (
              <li key={step.title} className="relative pl-9 md:pt-10 md:pl-0">
                <span
                  aria-hidden
                  className={cx(
                    "absolute top-0.5 left-0 flex size-[15px] items-center justify-center rounded-full border md:top-0",
                    isFuture ? "border-accent bg-bg" : "border-line-strong bg-bg-elev",
                  )}
                >
                  <span
                    className={cx("size-[5px] rounded-full", isFuture ? "bg-accent" : "bg-muted")}
                  />
                </span>
                <p
                  className={cx(
                    "font-mono text-[11px] tracking-wide uppercase",
                    isFuture ? "text-accent" : "text-subtle",
                  )}
                >
                  {step.when}
                </p>
                <p className="mt-2 font-display text-base font-bold text-fg">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.where}</p>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </Section>
  );
}
