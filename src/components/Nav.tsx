import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "../content";
import { useActiveSection, useScrolled, useScrollLock, type Theme } from "../lib/hooks";
import { cx } from "./ui";

const ids = navItems.map((n) => n.id);

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-muted transition hover:border-line-strong hover:text-fg"
    >
      <Sun
        className={cx(
          "absolute size-4 transition-all duration-500",
          isDark ? "translate-y-6 rotate-90 opacity-0" : "opacity-100",
        )}
      />
      <Moon
        className={cx(
          "absolute size-4 transition-all duration-500",
          isDark ? "opacity-100" : "-translate-y-6 -rotate-90 opacity-0",
        )}
      />
    </button>
  );
}

export function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>
      <div
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="relative inline-flex size-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] font-display text-sm font-extrabold tracking-tight text-white shadow-[0_8px_30px_-8px_var(--glow)] transition-transform duration-500 group-hover:rotate-[8deg]">
            {profile.initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-tight text-fg">
              {profile.name}
            </span>
            <span className="text-xs text-muted">Aspiring Product Manager</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className={cx(
            "hidden items-center gap-1 rounded-full p-1.5 transition-all duration-500 lg:flex",
            scrolled ? "glass shadow-[var(--shadow)]" : "border border-transparent",
          )}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cx(
                  "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300",
                  isActive ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 -z-10 rounded-full bg-surface-strong ring-1 ring-line"
                    aria-hidden
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="hidden h-10 items-center gap-2 rounded-full bg-fg px-4 text-[13px] font-semibold text-bg transition hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex"
          >
            <Download className="size-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-fg lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-[70] bg-bg/95 backdrop-blur-2xl lg:hidden"
      >
        {open && (
          <div className="animate-fade-in flex h-full flex-col px-5 pt-5 pb-8 sm:px-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-fg"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col">
              {navItems.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="animate-modal-in group flex items-center justify-between border-b border-line py-4 font-display text-[1.75rem] font-bold tracking-tight text-fg"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs font-normal text-subtle">0{i + 2}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="size-5 text-muted transition group-hover:rotate-45 group-hover:text-accent" />
                </a>
              ))}
            </nav>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-fg text-sm font-semibold text-bg"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
