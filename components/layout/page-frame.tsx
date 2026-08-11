import { AppShell } from "./app-shell";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
