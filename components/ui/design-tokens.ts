export const colors = {
  background: "bg-slate-950",
  surface: "bg-slate-900/80",
  surfaceElevated: "bg-slate-900/70",
  border: "border-slate-800",
  borderAccent: "border-emerald-500/20",
  textPrimary: "text-slate-50",
  textSecondary: "text-slate-400",
  textMuted: "text-slate-500",
  accent: "text-emerald-400",
  accentSoft: "bg-emerald-500/10",
  accentStrong: "bg-emerald-500/20",
} as const;

export const spacing = {
  page: "px-4 py-4 sm:px-6 lg:px-8",
  section: "p-4 sm:p-6",
  card: "p-4",
  stack: "space-y-6",
  inline: "gap-3",
} as const;

export const typography = {
  display: "text-2xl font-semibold tracking-tight",
  heading: "text-lg font-semibold",
  subheading: "text-sm font-medium",
  body: "text-sm leading-6 text-slate-400",
  label: "text-[10px] uppercase tracking-[0.3em]",
} as const;

export const glass = {
  panel: "border border-slate-800/80 bg-slate-950/70 shadow-2xl backdrop-blur",
  card: "border border-slate-800/80 bg-slate-900/70 shadow-[0_18px_50px_-24px_rgba(16,185,129,0.35)] backdrop-blur",
  soft: "border border-emerald-500/20 bg-emerald-500/10 backdrop-blur",
} as const;
