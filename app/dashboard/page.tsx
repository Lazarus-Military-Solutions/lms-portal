'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
}


const quickStats = [
  { label: "Operational Alerts", value: "3" },
  { label: "Pending Briefings", value: "7" },
  { label: "Readiness Index", value: "94%" },
];

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Operations center"
      title="Dashboard"
      description="A functional operations workspace featuring mission status, announcements, and key readiness indicators."
    >
      <ProtectedRoute
        allowedRoles={["Recruit", "Officer", "Admin"]}
        fallback={
          <Card>
            <p className="text-sm text-[#dce7b4]">Restricted view</p>
            <p className="mt-2 text-sm text-slate-400">Sign in with a mock role to view the operational dashboard.</p>
          </Card>
        }
      >
        <div className="space-y-6">
          <motion.div {...fadeInUp} className="grid gap-4 md:grid-cols-2">
            <Card>
              <p className="text-sm text-[#dce7b4]">Recent Activity</p>
              <p className="mt-2 text-xl font-semibold text-white">Briefing package updated 12 minutes ago</p>
              <p className="mt-3 text-sm text-slate-400">Priority operational summary shared with command staff.</p>
            </Card>
            <Card>
              <p className="text-sm text-[#dce7b4]">Announcements</p>
              <p className="mt-2 text-xl font-semibold text-white">Quarterly readiness review scheduled</p>
              <p className="mt-3 text-sm text-slate-400">The next review is aligned with logistics and personnel coordination.</p>
            </Card>
          </motion.div>

          <SectionWrapper title="Quick stats">
            <div className="grid gap-4 md:grid-cols-3">
              {quickStats.map((stat) => (
                <motion.div key={stat.label} {...hoverLift}>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </ProtectedRoute>
    </PageShell>
  );
}
