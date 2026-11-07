import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../content";
import { spotlightMove } from "../lib/hooks";
import { ProjectArt } from "./ProjectArt";
import { Chip, ConceptBadge, Reveal, Section, SectionHeader } from "./ui";

export function Projects({ onOpen }: { onOpen: (slug: Project["slug"]) => void }) {
  return (
    <Section id="projects">
      <SectionHeader
        id="projects"
        index="05"
        label="Featured Projects"
        title={
          <>
            Product concepts at the edge of <span className="text-gradient">AI and quantum.</span>
          </>
        }
        intro="Three self-initiated product concepts, each taken from opportunity to MVP scope and success metrics. All are proposals and learning projects, not deployed products."
      />

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.slug}
            delay={60}
            onPointerMove={spotlightMove}
            aria-labelledby={`project-${project.slug}`}
            className="card spotlight group grid overflow-hidden transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-line-strong lg:grid-cols-12"
          >
            <div className="flex flex-col p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-subtle">
                  {project.index} / 0{projects.length}
                </span>
                <ConceptBadge />
              </div>

              <p className="mt-8 text-sm font-medium text-accent">{project.domain}</p>
              <h3
                id={`project-${project.slug}`}
                className="mt-2 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance text-fg"
              >
                {project.title}
              </h3>
              <p className="mt-2 font-display text-lg font-medium text-muted">{project.subtitle}</p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">{project.summary}</p>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Topics">
                {project.tags.map((t) => (
                  <li key={t}>
                    <Chip>{t}</Chip>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  onClick={() => onOpen(project.slug)}
                  className="inline-flex items-center gap-3 text-sm font-semibold text-fg after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                  aria-label={`Read case study: ${project.title}`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] group-hover:text-white group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-accent">
                    <ArrowUpRight className="size-4" />
                  </span>
                  Read case study
                </button>
              </div>
            </div>

            <div className="pointer-events-none relative min-h-[240px] overflow-hidden border-t border-line bg-[radial-gradient(ellipse_at_center,var(--surface-strong),transparent_70%)] lg:col-span-5 lg:border-t-0 lg:border-l">
              <div
                className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"
                aria-hidden
              />
              <ProjectArt
                slug={project.slug}
                className="absolute inset-0 m-auto h-full w-full max-w-[460px] p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span
                className="absolute right-5 bottom-4 font-display text-[5.5rem] leading-none font-extrabold tracking-tighter text-fg/[0.04]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
