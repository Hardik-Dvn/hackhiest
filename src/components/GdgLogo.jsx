export function GdgLogo({ className = "h-6" }) {
  return (
    <svg
      viewBox="0 0 120 64"
      className={className}
      role="img"
      aria-label="Google Developer Groups logo"
    >
      <g strokeLinecap="round" strokeWidth="14" fill="none">
        <line x1="44" y1="10" x2="12" y2="32" stroke="var(--gred)" />
        <line x1="12" y1="32" x2="44" y2="54" stroke="var(--gblue)" />
        <line x1="76" y1="10" x2="108" y2="32" stroke="var(--ggreen)" />
        <line x1="108" y1="32" x2="76" y2="54" stroke="var(--gyellow)" />
      </g>
    </svg>
  );
}

export function GdgBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 py-1.5 pr-4 pl-2 backdrop-blur">
      <span className="flex h-7 items-center rounded-full bg-background px-2">
        <GdgLogo className="h-4" />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[11px] font-semibold text-foreground">
          Google Developer Groups
        </span>
        <span className="block text-[10px] text-muted-foreground">On Campus · MIET Meerut</span>
      </span>
    </div>
  );
}
