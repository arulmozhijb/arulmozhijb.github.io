import { Cpu, Layers, PenTool, Wrench } from "lucide-react";
import { skillGroups } from "../content";
import { spotlightMove } from "../lib/hooks";
import { cx, Reveal, Section, SectionHeader } from "./ui";

const icons = { layers: Layers, cpu: Cpu, pen: PenTool, wrench: Wrench };
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const tints = ["from-accent/25", "from-accent-2/25", "from-accent-3/20", "from-accent/15"];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        id="skills"
        index="04"
        label="Skills"
        title={
          <>
            A product toolkit spanning <span className="text-gradient">strategy, AI and UX.</span>
          </>
        }
        intro="Organized into four areas, from product discovery to the tools used every day."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal
              as="article"
              key={group.title}
              delay={(i % 2) * 100}
              onPointerMove={spotlightMove}
              className={cx("card spotlight group overflow-hidden p-7 sm:p-9", spans[i])}
            >
              <div
                aria-hidden
                className={cx(
                  "pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100",
                  tints[i],
                )}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_10px_30px_-10px_var(--glow)]">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-fg sm:text-2xl">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted">{group.caption}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-subtle">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="relative mt-9 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-surface-strong px-4 py-2 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
