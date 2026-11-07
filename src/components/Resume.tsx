import { useState } from "react";
import { Download, ExternalLink, Eye, FileText } from "lucide-react";
import { profile } from "../content";
import { buttonClass, CloseButton, Dialog, Reveal, Section, SectionHeader, Sheen } from "./ui";

const contents = ["Summary", "Education", "Skills", "Projects", "Certifications"];

export function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="resume">
      <Reveal className="card relative overflow-hidden p-6 sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] opacity-70"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              id="resume"
              index="07"
              label="Resume"
              title={
                <>
                  The full picture, <span className="text-gradient">on one page.</span>
                </>
              }
              intro="Education, skills, product projects and certifications in a concise, recruiter-friendly format."
            />

            <ul className="-mt-6 mb-10 flex flex-wrap gap-2">
              {contents.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className={buttonClass("primary")}
              >
                <Sheen />
                <Download className="size-4" /> Download Resume
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={buttonClass("secondary")}
              >
                <Eye className="size-4" /> Preview PDF
              </button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-subtle">
              <FileText className="size-3.5" aria-hidden /> PDF · 1 page · A4
            </p>
          </div>

          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative mx-auto block w-full max-w-[380px] [perspective:1200px]"
              aria-label="Preview resume PDF"
            >
              <span
                aria-hidden
                className="absolute inset-x-6 -bottom-4 top-6 rounded-2xl border border-line bg-surface-strong transition-transform duration-700 group-hover:translate-y-2 group-hover:rotate-[3deg]"
              />
              <span className="relative block overflow-hidden rounded-2xl border border-line-strong bg-white shadow-[var(--shadow)] transition-transform duration-700 ease-out [transform:rotateY(-8deg)_rotateX(4deg)] group-hover:[transform:rotateY(0)_rotateX(0)_translateY(-6px)]">
                <img
                  src={profile.resumePreview}
                  alt="Preview of Arul Mozhi JB's resume"
                  width={720}
                  height={1018}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/40">
                  <span className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Eye className="size-4" /> Preview
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      <Dialog open={open} onClose={() => setOpen(false)} labelledBy="resume-preview-title">
        <div className="animate-modal-in flex h-[100dvh] w-full flex-col overflow-hidden bg-bg sm:h-[92vh] sm:max-w-4xl sm:rounded-3xl sm:border sm:border-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-6">
            <h2 id="resume-preview-title" className="font-display text-base font-bold text-fg">
              Resume · Arul Mozhi JB
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("ghost", "hidden sm:inline-flex")}
              >
                <ExternalLink className="size-4" /> Open in new tab
              </a>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className={buttonClass("ghost")}
              >
                <Download className="size-4" /> <span className="hidden sm:inline">Download</span>
                <span className="sr-only sm:hidden">Download resume</span>
              </a>
              <CloseButton onClick={() => setOpen(false)} label="Close resume preview" />
            </div>
          </div>
          {/* Inline PDF viewer on larger screens; image preview on phones, where embedded PDFs are unreliable. */}
          <div className="relative flex-1 overflow-auto bg-bg-elev">
            <iframe
              src={`${profile.resumeUrl}#view=FitH`}
              title="Arul Mozhi JB resume PDF"
              className="hidden size-full md:block"
            />
            <div className="p-4 md:hidden">
              <img
                src={profile.resumePreview}
                alt="Arul Mozhi JB's resume"
                width={720}
                height={1018}
                className="mx-auto h-auto w-full max-w-xl rounded-lg border border-line bg-white"
              />
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("secondary", "mt-4 w-full")}
              >
                <ExternalLink className="size-4" /> Open full PDF
              </a>
            </div>
          </div>
        </div>
      </Dialog>
    </Section>
  );
}
