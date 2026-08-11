import { ReactNode } from "react";
import { Card } from "./card";
import { SectionWrapper } from "./section-wrapper";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="space-y-6">
      <SectionWrapper eyebrow={eyebrow} title={title}>
        {description ? <p className="mt-2 max-w-2xl text-sm text-slate-400">{description}</p> : null}
      </SectionWrapper>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card>{children}</Card>
        <Card>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#556B2F]">Portal notes</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>Structured placeholders for the next wave of operational systems.</p>
            <p>All sections are intentionally UI-only and reusable.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
