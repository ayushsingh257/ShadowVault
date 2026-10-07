import React from "react";
import { ShieldCheck, Terminal, Play, CheckCircle2, AlertOctagon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RemediationPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            Safe Remediation Simulation Center
          </h1>
          <p className="text-xs text-slate-400">
            Preview the blast radius delta and business impact of identity changes in Safe Simulation Mode before execution.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="elevated">Safe Simulation: Enforced</Badge>
        </div>
      </div>

      {/* Active Remediation Plan */}
      <div className="rounded-xl border border-slate-800 bg-[#0d1424] p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono text-slate-400">PLAN: REM-2026-088</span>
            <h2 className="text-sm font-bold text-slate-200 mt-0.5">
              Revoke Inherited CloudAdmin Access for ayush@example.com
            </h2>
          </div>
          <Badge variant="critical">High Impact Mitigation</Badge>
        </div>

        {/* Impact Delta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono uppercase text-slate-400">Current Risk Score</div>
            <div className="text-2xl font-bold font-mono text-rose-400 mt-1">92 / 100</div>
            <span className="text-[10px] text-slate-400">Critical Tier-0 exposure</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono uppercase text-slate-400">Simulated Risk Score</div>
            <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">24 / 100</div>
            <span className="text-[10px] text-emerald-400">68 point risk reduction (-74%)</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono uppercase text-slate-400">Blast Radius Delta</div>
            <div className="text-2xl font-bold font-mono text-sky-400 mt-1">-38 Assets</div>
            <span className="text-[10px] text-slate-400">Severed access to prod DB & keys</span>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-slate-300">Simulated Actions:</h3>
          <ul className="space-y-2 text-xs text-slate-400 font-mono">
            <li className="flex items-center gap-2 p-2 rounded bg-slate-900/60 border border-slate-800/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              1. Remove user 'ayush@example.com' from group 'Core-Engineers'.
            </li>
            <li className="flex items-center gap-2 p-2 rounded bg-slate-900/60 border border-slate-800/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              2. Assign explicit least-privilege role 'Engineering-Dev-ReadOnly'.
            </li>
            <li className="flex items-center gap-2 p-2 rounded bg-slate-900/60 border border-slate-800/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              3. Invalidate active session tokens on next credential refresh.
            </li>
          </ul>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button className="px-4 py-2 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
            Discard Simulation
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
            <Play className="h-3.5 w-3.5" /> Execute Approved Plan
          </button>
        </div>
      </div>
    </div>
  );
}
