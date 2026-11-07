import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Info, PencilLine } from "lucide-react";
import { projects, type Project } from "../content";
import { ProjectArt } from "./ProjectArt";
import { Chip, CloseButton, ConceptBadge, cx, Dialog } from "./ui";

export function CaseStudy({
  slug,
  onClose,
  onNavigate,
}: {
  slug: Project["slug"] | null;
  onClose: () => void;
  onNavigate: (slug: Project["slug"]) => void;
}) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : null;

  return (
    <Dialog open={!!project} onClose={onClose} labelledBy="case-title">
      {project && (
        <CaseStudyPanel
          key={project.slug}
          project={project}
          prev={projects[(index - 1 + projects.length) % projects.length]}
          next={projects[(index + 1) % projects.length]}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      )}
    </Dialog>
  );
}

function CaseStudyPanel({
  project,
  prev,
  next,
  onClose,
  onNavigate,
}: {
  project: Project;
  prev: Project;
  next: Project;
  onClose: () => void;
  onNavigate: (slug: Project["slug"]) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(project.sections[0].id);

  // Track the visible section inside the modal's own scroll container.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id.replace("cs-", ""));
      },
      { root, rootMargin: "-30% 0px -60% 0px" },
    );
    root.querySelectorAll("[data-cs-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  const jump = (id: string) => {
    const el = scrollRef.current?.querySelector(`#cs-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="animate-modal-in relative flex h-[100dvh] w-full flex-col overflow-hidden border-line bg-bg shadow-[var(--shadow)] sm:h-[92vh] sm:max-w-6xl sm:rounded-3xl sm:border">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-line bg-bg/80 px-5 py-3.5 backdrop-blur-xl sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-xs text-subtle">Case study {project.index}</span>
          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
          <span className="hidden truncate text-sm font-medium text-muted sm:block">
            {project.title}
          </span>
        </div>
        <CloseButton onClick={onClose} label="Close case study" />
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-line">
          <div
            className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_50%,#000_20%,transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid items-center gap-6 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ConceptBadge />
              <p className="mt-6 text-sm font-medium text-accent">{project.domain}</p>
              <h2
                id="case-title"
                className="mt-2 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.04] font-bold tracking-[-0.035em] text-balance text-fg"
              >
                {project.title}
              </h2>
              <p className="mt-3 font-display text-lg text-muted sm:text-xl">{project.subtitle}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
                {project.tags.map((t) => (
                  <li key={t}>
                    <Chip>{t}</Chip>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:col-span-5 lg:block">
              <ProjectArt slug={project.slug} className="mx-auto w-full max-w-[420px]" />
            </div>
          </div>
        </header>

        <div className="px-5 py-10 sm:px-10 sm:py-14">
          <div
            role="note"
            className="mb-12 flex gap-3 rounded-2xl border border-accent/25 bg-accent/[0.07] p-4 text-sm leading-relaxed text-muted sm:p-5"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <p>
              <span className="font-semibold text-fg">Product concept.</span> This is a proposed
              product concept developed as a learning project. It has not been commercially
              deployed, and no results have been measured. Metrics listed are proposed measures for
              evaluation.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Section index */}
            <nav aria-label="Case study sections" className="hidden lg:block">
              <ol className="sticky top-4 space-y-1">
                {project.sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => jump(s.id)}
                      aria-current={active === s.id ? "true" : undefined}
                      className={cx(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        active === s.id ? "bg-surface-strong text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      <span
                        className={cx(
                          "font-mono text-[10px]",
                          active === s.id ? "text-accent" : "text-subtle",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 space-y-4">
              {project.sections.map((s, i) => (
                <section
                  key={s.id}
                  id={`cs-${s.id}`}
                  data-cs-section
                  aria-labelledby={`cs-${s.id}-title`}
                  className="scroll-mt-4 rounded-2xl border border-line bg-surface p-6 sm:p-8"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      id={`cs-${s.id}-title`}
                      className="font-display text-xl font-bold tracking-tight text-fg sm:text-2xl"
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="mt-4 space-y-5 sm:pl-9">
                    {s.body && (
                      <p className="leading-relaxed text-muted sm:text-[17px]">{s.body}</p>
                    )}

                    {s.items && (
                      <div>
                        {s.itemsLabel && <p className="eyebrow mb-3">{s.itemsLabel}</p>}
                        <ul className={cx("grid gap-2.5", s.items.length > 2 && "sm:grid-cols-1")}>
                          {s.items.map((item, k) => (
                            <li key={item} className="flex items-start gap-3 text-fg">
                              {s.id === "approach" ? (
                                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-[10px] text-muted">
                                  {k + 1}
                                </span>
                              ) : (
                                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                                  <Check className="size-3.5" aria-hidden />
                                </span>
                              )}
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {s.id === "solution" && project.slug === "quantum-enterprise-ai" && (
                      <NineLayers />
                    )}

                    {s.pending && (
                      <p className="placeholder-note flex items-start gap-3 px-4 py-3 text-sm">
                        <PencilLine className="mt-0.5 size-4 shrink-0" aria-hidden />
                        <span>
                          <span className="font-mono text-[10px] tracking-[0.14em] uppercase">
                            Placeholder ·{" "}
                          </span>
                          {s.pending}
                        </span>
                      </p>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Prev / next */}
          <div className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onNavigate(prev.slug)}
              className="group flex items-center gap-4 rounded-2xl border border-line p-5 text-left transition hover:border-line-strong hover:bg-surface"
            >
              <ArrowLeft className="size-4 shrink-0 text-muted transition group-hover:-translate-x-1 group-hover:text-fg" />
              <span className="min-w-0">
                <span className="eyebrow block">Previous</span>
                <span className="mt-1 block truncate font-display font-bold text-fg">
                  {prev.title}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.slug)}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-line p-5 text-right transition hover:border-line-strong hover:bg-surface"
            >
              <span className="min-w-0">
                <span className="eyebrow block">Next</span>
                <span className="mt-1 block truncate font-display font-bold text-fg">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-fg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NineLayers() {
  return (
    <div className="rounded-xl border border-line bg-bg-elev p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="eyebrow">Nine-layer product architecture</p>
        <span className="font-mono text-[10px] text-subtle">Layer names pending</span>
      </div>
      <ol className="grid grid-cols-3 gap-2 sm:grid-cols-9">
        {Array.from({ length: 9 }, (_, i) => (
          <li
            key={i}
            className="flex h-14 flex-col items-center justify-center rounded-lg border border-line bg-surface font-mono text-xs text-muted transition hover:border-accent/50 hover:text-accent sm:h-20"
            style={{ opacity: 0.55 + i * 0.05 }}
          >
            <span className="text-[9px] text-subtle">Layer</span>
            {String(i + 1).padStart(2, "0")}
          </li>
        ))}
      </ol>
    </div>
  );
}
