import { ReactNode } from "react";
import { glass } from "./design-tokens";

type NavbarProps = {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  className?: string;
};

export function Navbar({ leftContent, rightContent, className }: NavbarProps) {
  return (
    <header className={`mb-4 rounded-2xl border border-emerald-500/20 bg-slate-950/80 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_-32px_rgba(16,185,129,0.6)] backdrop-blur ${className ?? ""}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">{leftContent}</div>
        <div className="flex items-center gap-2 sm:gap-3">{rightContent}</div>
      </div>
    </header>
  );
}
