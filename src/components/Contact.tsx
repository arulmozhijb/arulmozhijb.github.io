import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { profile } from "../content";
import { spotlightMove } from "../lib/hooks";
import { buttonClass, LinkedInIcon, Reveal, Section, Sheen } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className="size-5" aria-hidden />,
      external: false,
    },
    {
      label: "LinkedIn",
      value: profile.linkedinLabel,
      href: profile.linkedin,
      icon: <LinkedInIcon className="size-5" />,
      external: true,
    },
  ];

  return (
    <Section id="contact" className="pb-16">
      <div className="relative text-center">
        <Reveal className="mb-6 flex items-center justify-center gap-3">
          <span className="font-mono text-xs text-accent">08</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" aria-hidden />
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal
          as="h2"
          id="contact-title"
          delay={80}
          className="mx-auto max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.98] font-extrabold tracking-[-0.045em] text-balance text-fg"
        >
          Let’s talk products, <span className="text-gradient">AI and what’s next.</span>
        </Reveal>
        <Reveal
          as="p"
          delay={160}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I’m happy to connect about product management roles, collaborations and conversations on
          AI and Quantum-Inspired Computing.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={`mailto:${profile.email}`}
            className={buttonClass("primary", "w-full sm:w-auto")}
          >
            <Sheen />
            <Mail className="size-4" /> Send an email
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className={buttonClass("secondary", "w-full sm:w-auto")}
            aria-live="polite"
          >
            {copied ? <Check className="size-4 text-accent-3" /> : <Copy className="size-4" />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal
            as="a"
            key={c.label}
            delay={i * 90}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onPointerMove={spotlightMove}
            className="card spotlight group flex items-center gap-4 p-6 transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-strong text-fg transition-colors group-hover:text-accent">
              {c.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="eyebrow block !text-[10px]">{c.label}</span>
              <span className="mt-1 block truncate font-medium text-fg">{c.value}</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
            {c.external && <span className="sr-only">(opens in a new tab)</span>}
          </Reveal>
        ))}
        <Reveal delay={180} className="card flex items-center gap-4 p-6">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-strong text-fg">
            <MapPin className="size-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="eyebrow block !text-[10px]">Location</span>
            <span className="mt-1 block font-medium text-fg">{profile.location}</span>
          </span>
        </Reveal>
      </div>
    </Section>
  );
}
