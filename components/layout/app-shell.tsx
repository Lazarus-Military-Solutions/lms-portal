"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "../auth/auth-context";
import { Button } from "../ui/button";
import { colors, glass, typography } from "../ui/design-tokens";
import { Navbar } from "../ui/navbar";
import { Sidebar } from "../ui/sidebar";
import { PageContainer } from "../ui/page-container";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "◉" },
  { name: "News", href: "/about", icon: "◎" },
  { name: "Email", href: "/contact", icon: "◌" },
  { name: "Personnel", href: "/login", icon: "◍" },
  { name: "Home", href: "/", icon: "◎" },
];

const quickLinks = [
  { name: "Mission Brief", href: "#brief" },
  { name: "Ops Handbook", href: "#handbook" },
  { name: "Compliance", href: "#compliance" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(85,107,47,0.2),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] text-slate-100">
      <div className={`mx-auto flex min-h-screen max-w-7xl flex-col ${colors.background} ${colors.surface} ${colors.textPrimary}`}>
        <Navbar
          leftContent={
            <>
              <button
                type="button"
                className="rounded-xl border border-slate-700 bg-slate-900/70 p-2 text-slate-200 lg:hidden"
                onClick={() => setIsMobileNavOpen((open) => !open)}
                aria-label="Toggle navigation"
              >
                ☰
              </button>
              <div>
                <p className={`${typography.label} text-[#556B2F]`}>
                  Lazarus Military Solutions
                </p>
                <h1 className={`${typography.heading} text-white`}>LMS Portal</h1>
              </div>
            </>
          }
          rightContent={
            <>
              <div className="hidden rounded-full border border-[#556B2F]/25 bg-[#556B2F]/10 px-3 py-1 text-xs text-[#dce7b4] sm:block">
                {isAuthenticated ? `${user?.role} access enabled` : "Guest mode"}
              </div>
              <Button
                type="button"
                onClick={() => (isAuthenticated ? logout() : login({ id: "mock-guest", name: "Guest User", role: "Guest", email: "guest@lmsportal.local" }))}
                variant={isAuthenticated ? "ghost" : "primary"}
              >
                {isAuthenticated ? "Sign out" : "Sign in"}
              </Button>
            </>
          }
        />

        <div className="flex flex-1 flex-col gap-4 lg:flex-row">
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={isMobileNavOpen ? "block" : "hidden lg:block"}
          >
            <Sidebar
            title={isAuthenticated ? user?.name : "Guest User"}
            subtitle={isAuthenticated ? "Mission-ready dashboard with active learning streams." : "Browse training pathways without authentication."}
            items={navigation}
            collapsed={false}
            className={isMobileNavOpen ? "block" : "hidden lg:block"}
            footer={
              <div>
                <p className={`${typography.label} mb-3 text-slate-500`}>
                  Quick links
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="transition hover:text-emerald-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          </motion.aside>

          <main className={`flex-1 rounded-2xl ${glass.panel} p-4 sm:p-6`}>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm text-emerald-400">Mission Control</p>
                <h2 className={`${typography.display} text-white`}>Learning workspace</h2>
              </div>
              <div className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">
                {isAuthenticated ? "Authenticated session" : "Public preview"}
              </div>
            </div>

            <PageContainer>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl ${glass.card} p-4 sm:p-6`}
              >
                {children}
              </motion.div>
            </PageContainer>
          </main>
        </div>
      </div>
    </div>
  );
}
