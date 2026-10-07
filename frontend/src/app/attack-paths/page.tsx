import React from "react";
import { Network, Zap, ShieldAlert, ArrowRight, CornerDownRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AttackPathsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Network className="h-5 w-5 text-sky-400" />
            Identity Attack Path Intelligence Graph
          </h1>
          <p className="text-xs text-slate-400">
            Transitive privilege evaluation powered by Neo4j graph traversal. Reveals lateral movement and sensitive resource reachability.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="critical">18 Critical Paths Identified</Badge>
          <button className="px-3 py-1.5 text-xs font-semibold rounded bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors">
            Run Graph Sync
          </button>
        </div>
      </div>

      {/* Interactive Visual Graph Canvas Simulation */}
      <div className="rounded-xl border border-slate-800 bg-[#0a0f1c] p-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <span className="text-[10px] font-mono text-slate-400 uppercase bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
            Neo4j Engine: Active
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
            Shortest-Path Alg: Dijkstra
          </span>
        </div>

        <div className="py-12 flex flex-col items-center justify-center space-y-6">
          <div className="text-center max-w-xl">
            <h2 className="text-sm font-semibold text-slate-300">
              Live Path Traversal Demo: <span className="text-sky-400 font-mono">ayush@example.com</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Visualizing transitive privilege hop from standard developer identity to Tier 0 Production Database via role inheritance.
            </p>
          </div>

          {/* Graph Nodes Representation */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl border border-slate-800 bg-[#0e1628]/80 max-w-4xl shadow-glow">
            {/* Step 1: User */}
            <div className="p-3 rounded-lg border border-sky-500/30 bg-sky-500/10 text-center min-w-[130px]">
              <div className="text-[10px] font-mono uppercase text-sky-400 font-bold">NODE: USER</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">ayush@example.com</div>
              <div className="text-[9px] text-slate-400">Human Identity</div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono text-slate-400">MEMBER_OF</span>
              <ArrowRight className="h-4 w-4 text-sky-400" />
            </div>

            {/* Step 2: Group */}
            <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/10 text-center min-w-[130px]">
              <div className="text-[10px] font-mono uppercase text-purple-400 font-bold">NODE: GROUP</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Core-Engineers</div>
              <div className="text-[9px] text-slate-400">Directory Group</div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono text-slate-400">HAS_ROLE</span>
              <ArrowRight className="h-4 w-4 text-purple-400" />
            </div>

            {/* Step 3: Role */}
            <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-center min-w-[130px]">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">NODE: ROLE</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">CloudAdmin</div>
              <div className="text-[9px] text-slate-400">Admin Privileges</div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[9px] font-mono text-slate-400">CAN_ACCESS</span>
              <ArrowRight className="h-4 w-4 text-rose-400" />
            </div>

            {/* Step 4: Sensitive Resource */}
            <div className="p-3 rounded-lg border border-rose-500/40 bg-rose-500/15 text-center min-w-[150px] shadow-glow-rose">
              <div className="text-[10px] font-mono uppercase text-rose-400 font-bold">RESOURCE: TIER 0</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Prod-Postgres-Cluster</div>
              <div className="text-[9px] text-rose-300 font-mono">Sensitive PII Data</div>
            </div>
          </div>
        </div>

        {/* Explainability Callout */}
        <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5 flex items-start gap-3">
          <Zap className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-semibold text-amber-300">Why does this path exist?</span>{" "}
            <span className="text-slate-300">
              User inherits CloudAdmin through membership in Core-Engineers group. Direct access was never explicitly assigned, bypassing conventional single-role reviews.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
