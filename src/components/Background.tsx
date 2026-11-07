/** Fixed ambient backdrop: soft drifting gradients over a faint grid. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_80%)]" />
      <div
        className="animate-drift absolute -top-[20%] left-[10%] size-[60vmax] rounded-full opacity-[0.22] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />
      <div
        className="animate-drift absolute top-[30%] -right-[20%] size-[50vmax] rounded-full opacity-[0.16] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-2), transparent 60%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="animate-drift absolute -bottom-[25%] left-[-10%] size-[45vmax] rounded-full opacity-[0.1] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-3), transparent 60%)",
          animationDelay: "-17s",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--bg)_100%)]" />
    </div>
  );
}
