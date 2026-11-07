import { ArrowUp } from "lucide-react";
import { navItems, profile } from "../content";
import { LinkedInIcon } from "./ui";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            Aspiring Product Manager · AI · Quantum-Inspired Computing
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Arul Mozhi JB"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="group inline-flex size-10 items-center justify-center rounded-full bg-fg text-bg transition hover:-translate-y-0.5"
          >
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-10 text-xs text-subtle sm:px-8">
        © {new Date().getFullYear()} {profile.name}. All projects shown are product concepts.
      </div>
    </footer>
  );
}
