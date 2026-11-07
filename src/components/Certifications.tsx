import { Award, ArrowUpRight, Clock3, BadgeCheck } from "lucide-react";
import { certifications } from "../content";
import { spotlightMove } from "../lib/hooks";
import { cx, Reveal, Section, SectionHeader } from "./ui";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        id="certifications"
        index="06"
        label="Certifications"
        title="Structured learning in UX and AI product management."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal
            as="article"
            key={cert.title}
            delay={i * 100}
            onPointerMove={spotlightMove}
            className="card spotlight group flex flex-col overflow-hidden p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={cx(
                  "inline-flex size-14 items-center justify-center rounded-2xl border",
                  cert.complete
                    ? "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_10px_30px_-10px_var(--glow)]"
                    : "border-dashed border-line-strong bg-surface text-muted",
                )}
              >
                <Award className="size-6" aria-hidden />
              </span>
              <span
                className={cx(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                  cert.complete
                    ? "border-accent-3/30 bg-accent-3/10 text-accent-3"
                    : "border-line bg-surface text-muted",
                )}
              >
                {cert.complete ? (
                  <BadgeCheck className="size-3.5" aria-hidden />
                ) : (
                  <Clock3 className="size-3.5" aria-hidden />
                )}
                {cert.status}
              </span>
            </div>

            <p className="mt-10 text-sm font-medium text-muted">{cert.issuer}</p>
            <h3 className="mt-2 font-display text-2xl leading-tight font-bold tracking-tight text-balance text-fg">
              {cert.title}
            </h3>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="eyebrow !text-[10px]">Status</dt>
                <dd className="mt-1.5 text-fg">{cert.status}</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[10px]">Credential ID</dt>
                <dd className="mt-1.5 font-mono text-fg">
                  {cert.credentialId ?? <span className="text-subtle">Not yet issued</span>}
                </dd>
              </div>
            </dl>

            <div className="mt-auto pt-8">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fg transition hover:text-accent"
                >
                  Show certificate
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <p className="text-sm text-subtle">Certificate link will be added on completion.</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
