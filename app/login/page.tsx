'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
}


export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-2 py-6">
      <motion.div {...fadeInUp} className="w-full max-w-md">
        <Card className="border border-[#556B2F]/25 bg-slate-950/85">
          <div className="space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#dce7b4]">Secure Access Portal</p>
              <h1 className="mt-2 text-2xl font-semibold text-white">Sign in to continue</h1>
              <p className="mt-2 text-sm text-slate-400">Authorized personnel may access the operational workspace.</p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#556B2F]/50" placeholder="name@lms.local" />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Password</span>
                <input type="password" className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#556B2F]/50" placeholder="••••••••" />
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Access Portal</Button>
              <Link href="/">
                <Button variant="secondary">Return Home</Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
