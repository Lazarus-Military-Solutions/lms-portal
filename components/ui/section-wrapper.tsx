import { cn } from "./cn";
import { glass, spacing } from "./design-tokens";

type SectionWrapperProps = {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({
  title,
  eyebrow,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section className={cn(glass.panel, spacing.section, "rounded-2xl", className)}>
      {(title || eyebrow) && (
        <div className="mb-4">
          {eyebrow ? <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400">{eyebrow}</p> : null}
          {title ? <h2 className="mt-1 text-xl font-semibold text-white">{title}</h2> : null}
        </div>
      )}
      {children}
    </section>
  );
}
