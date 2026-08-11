import Link from "next/link";
import { ReactNode } from "react";
import { glass, typography } from "./design-tokens";

type SidebarItem = {
  name: string;
  href: string;
  icon?: ReactNode;
};

type SidebarProps = {
  items: SidebarItem[];
  footer?: ReactNode;
  title?: string;
  subtitle?: string;
  collapsed?: boolean;
  className?: string;
};

export function Sidebar({ items, footer, title, subtitle, collapsed = false, className }: SidebarProps) {
  return (
    <aside className={`w-full rounded-2xl ${glass.panel} p-4 ${collapsed ? "lg:w-20" : "lg:w-72"} ${className ?? ""}`}>
      {(title || subtitle) && (
        <div className={`mb-6 rounded-2xl ${glass.soft} p-4`}>
          {title ? <h2 className={`text-white ${typography.heading}`}>{title}</h2> : null}
          {subtitle ? <p className={`mt-2 ${typography.body}`}>{subtitle}</p> : null}
        </div>
      )}

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white"
          >
            {item.icon ? <span className="text-emerald-400">{item.icon}</span> : null}
            {!collapsed ? <span>{item.name}</span> : null}
          </Link>
        ))}
      </nav>

      {footer ? <div className="mt-8 border-t border-slate-800 pt-4">{footer}</div> : null}
    </aside>
  );
}
