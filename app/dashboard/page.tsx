import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "EyeExplore interactive workspace for eyetracking analysis.",
};

export default function DashboardPage() {
  return (
    <div className="bg-ice">
      <div className="border-b border-mist bg-navy-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gaze">Workspace</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            The core analysis environment. Connect your Python/Dash app here — this
            shell is ready for an iframe or reverse-proxy mount.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            Expected mount: <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-navy-900">http://localhost:8050</code>
          </p>
          <Link href="/tutorials" className="text-sm font-semibold text-navy-900 underline decoration-heat-orange underline-offset-4">
            Need sample data?
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-mist bg-navy-950 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-heat-red/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-heat-yellow/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-white/50">EyeExplore · analysis workspace</span>
          </div>
          <div className="relative min-h-[640px] bg-[#0d1b2e]">
            <iframe
              title="EyeExplore Dashboard"
              className="absolute inset-0 h-full w-full border-0"
              src="about:blank"
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-heat-yellow via-heat-orange to-heat-red opacity-90" />
              <p className="text-lg font-semibold text-white">EyeExplore Dashboard Interface loads here</p>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Point this iframe at your Dash server, or replace the placeholder
                with a reverse-proxied route when you deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
