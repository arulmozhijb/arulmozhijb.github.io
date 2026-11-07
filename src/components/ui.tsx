import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { useReveal, useScrollLock } from "../lib/hooks";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  style,
  ...rest
}: RevealProps<T>) {
  const ref = useReveal<HTMLElement>();
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      ref={ref}
      className={cx("reveal", className)}
      style={{ ...style, "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-title`}
      className={cx("relative py-24 sm:py-32", className)}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  id,
  index,
  label,
  title,
  intro,
  align = "left",
  compact = false,
}: {
  compact?: boolean;
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("mb-14 sm:mb-20", align === "center" && "mx-auto max-w-3xl text-center")}>
      <Reveal
        className={cx("mb-6 flex items-center gap-3", align === "center" && "justify-center")}
      >
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" aria-hidden />
        <span className="eyebrow">{label}</span>
      </Reveal>
      <Reveal
        as="h2"
        id={`${id}-title`}
        delay={80}
        className={cx(
          "font-display leading-[1.04] font-bold tracking-[-0.035em] text-balance text-fg",
          compact ? "text-[clamp(2.1rem,3.6vw,3rem)]" : "text-[clamp(2.1rem,5vw,3.75rem)]",
        )}
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={160}
          className={cx(
            "mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </Reveal>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ease-out active:scale-[0.97] disabled:opacity-50";
const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "h-12 px-6 text-white bg-[linear-gradient(110deg,var(--accent),var(--accent-2))] shadow-[0_10px_40px_-10px_var(--glow)] hover:shadow-[0_16px_50px_-8px_var(--glow)] hover:-translate-y-0.5",
  secondary:
    "h-12 px-6 text-fg border border-line-strong bg-surface backdrop-blur-xl hover:border-accent/60 hover:bg-surface-strong hover:-translate-y-0.5",
  ghost: "h-10 px-4 text-muted hover:text-fg hover:bg-surface-strong",
};

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cx(buttonBase, buttonVariants[variant], className);
}

/** Subtle sheen used inside primary buttons. */
export function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.35)_50%,transparent_75%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
    />
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ConceptBadge({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-accent uppercase",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      Product Concept
    </span>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/**
 * Accessible modal built on the native <dialog> element
 * (focus containment, Esc to close, top-layer rendering).
 */
export function Dialog({
  open,
  onClose,
  labelledBy,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useScrollLock(open);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={cx(
        "m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-fg backdrop:bg-black/60 backdrop:backdrop-blur-md open:flex open:items-end sm:open:items-center sm:open:justify-center",
        className,
      )}
    >
      {open && children}
    </dialog>
  );
}

export function CloseButton({ onClick, label = "Close" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:rotate-90 hover:border-line-strong hover:text-fg"
    >
      <X className="size-4" />
    </button>
  );
}
