import { MapPin } from "lucide-react";
import { education } from "../content";
import { spotlightMove } from "../lib/hooks";
import { cx, Reveal, Section, SectionHeader } from "./ui";

export function Education() {
  return (
    <Section id="education">
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              id="education"
              index="03"
              label="Education"
              compact
              title="A foundation in technology, now meeting business."
              intro="Computer applications first, then an MBA to deepen business and product perspective."
            />
          </div>
        </div>

        <ol className="relative lg:col-span-7">
          <span
            aria-hidden
            className="absolute top-3 bottom-3 left-[11px] w-px bg-gradient-to-b from-accent via-line-strong to-transparent sm:left-[15px]"
          />
          {education.map((item, i) => (
            <Reveal
              as="li"
              key={item.degree}
              delay={i * 110}
              className="relative pb-6 pl-10 last:pb-0 sm:pl-14"
            >
              <span
                aria-hidden
                className={cx(
                  "absolute top-8 left-0 flex size-[23px] items-center justify-center rounded-full border bg-bg sm:size-[31px]",
                  item.current
                    ? "border-accent shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
                    : "border-line-strong",
                )}
              >
                <span
                  className={cx("size-2 rounded-full", item.current ? "bg-accent" : "bg-subtle")}
                />
              </span>

              <article
                onPointerMove={spotlightMove}
                className="card spotlight group p-6 transition-transform duration-500 hover:translate-x-1 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs tracking-wide text-muted">{item.period}</p>
                  {item.status && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                    {item.degree}
                  </span>
                  <span className="text-base font-medium text-muted">{item.full}</span>
                </h3>
                <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-medium text-fg">{item.institution}</p>
                  <p className="inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin className="size-3.5" aria-hidden /> {item.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
