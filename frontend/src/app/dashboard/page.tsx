import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldAlert,
  Network,
  Clock,
  KeyRound,
  Server,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Flame,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const kpiStats = [
  {
    title: "Total Identities",
    value: "1,428",
    change: "+12 this week",
    icon: Users,
    color: "text-sky-400",
  },
  {
    title: "Privileged Identities",
    value: "86",
    change: "6.0% of org",
    icon: TrendingUp,
    color: "text-amber-400",
  },
  {
    title: "Critical Attack Paths",
    value: "18",
    change: "Direct to Tier 0",
    icon: Network,
    color: "text-rose-400",
    highlight: true,
  },
  {
    title: "Risk Findings",
    value: "42",
    change: "14 unaddressed",
    icon: ShieldAlert,
    color: "text-orange-400",
  },
  {
    title: "Dormant Accounts",
    value: "39",
    change: "> 60 days inactive",
    icon: Clock,
    color: "text-slate-400",
  },
  {
    title: "Stale Credentials",
    value: "27",
    change: "> 90 days unrotated",
    icon: KeyRound,
    color: "text-amber-400",
  },
  {
    title: "Risky Service Accounts",
    value: "9",
    change: "With admin rights",
    icon: Server,
    color: "text-rose-400",
  },
  {
    title: "Orphaned Accounts",
    value: "7",
    change: "No assigned owner",
    icon: AlertTriangle,
    color: "text-amber-400",
  },
];

const priorityAttackPaths = [
  {
    id: "ap-01",
    identity: "ayush@example.com",
    role: "Senior Engineer",
    chain: ["User", "Developers", "CloudAdmin", "Production Database (Tier 0)"],
    hops: 3,
    riskScore: 92,
    severity: "critical" as const,
    blastRadius: "42 resources",
  },
  {
    id: "ap-02",
    identity: "svc-deployer-ci@service.internal",
    role: "CI/CD Service Account",
    chain: ["ServiceAccount", "Deployers", "IAM:PassRole", "Prod EKS Cluster"],
    hops: 3,
    riskScore: 88,
    severity: "critical" as const,
    blastRadius: "28 resources",
  },
  {
    id: "ap-03",
    identity: "contractor-ext@partner.org",
    role: "External Vendor",
    chain: ["User", "Guest-Dev", "Audit-Reader", "S3:CustomerPII-Bucket"],
    hops: 3,
    riskScore: 74,
    severity: "high" as const,
    blastRadius: "15 resources",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner / Mission Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-xl border border-sky-500/20 bg-gradient-to-r from-sky-950/40 via-[#0e1628] to-[#080d18]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Flame className="h-5 w-5 text-rose-500" />
            <h1 className="text-xl font-bold tracking-tight text-slate-100">
              Identity Security & Attack Path Intelligence
            </h1>
          </div>
          <p className="text-xs text-slate-400 max-w-2xl">
            Real-time identity threat detection, transitive privilege graph analysis, and blast radius calculations across corporate identities and cloud resources.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/attack-paths"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-glow"
          >
            <Network className="h-4 w-4" />
            Explore Attack Graph
          </Link>
          <Link
            href="/ai"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            AI Threat Copilot
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {kpiStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className={`border-slate-800/80 transition-all hover:border-slate-700 ${
                stat.highlight ? "border-rose-500/40 bg-[#160d1b]/70" : ""
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-[11px] font-mono text-slate-400">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-100">
                  {stat.value}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Risk Distribution & Health Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Distribution Bar */}
        <Card className="lg:col-span-2 border-slate-800/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Organization Identity Risk Distribution</CardTitle>
              <Badge variant="outline" className="font-mono text-[10px]">
                Deterministic Model
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-4 w-full rounded-full bg-slate-900 flex overflow-hidden border border-slate-800">
              <div
                style={{ width: "55%" }}
                className="bg-emerald-500/80"
                title="Low (55%)"
              />
              <div
                style={{ width: "22%" }}
                className="bg-sky-500/80"
                title="Moderate (22%)"
              />
              <div
                style={{ width: "12%" }}
                className="bg-amber-500/80"
                title="Elevated (12%)"
              />
              <div
                style={{ width: "7%" }}
                className="bg-orange-500/80"
                title="High (7%)"
              />
              <div
                style={{ width: "4%" }}
                className="bg-rose-500/80 animate-pulse"
                title="Critical (4%)"
              />
            </div>

            <div className="grid grid-cols-5 gap-2 pt-2 text-center">
              <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/20">
                <div className="text-[10px] text-emerald-400 font-bold">LOW (0-20)</div>
                <div className="text-sm font-mono font-bold text-slate-200">785</div>
              </div>
              <div className="p-2 rounded bg-sky-500/5 border border-sky-500/20">
                <div className="text-[10px] text-sky-400 font-bold">MOD (21-40)</div>
                <div className="text-sm font-mono font-bold text-slate-200">314</div>
              </div>
              <div className="p-2 rounded bg-amber-500/5 border border-amber-500/20">
                <div className="text-[10px] text-amber-400 font-bold">ELEV (41-60)</div>
                <div className="text-sm font-mono font-bold text-slate-200">171</div>
              </div>
              <div className="p-2 rounded bg-orange-500/5 border border-orange-500/20">
                <div className="text-[10px] text-orange-400 font-bold">HIGH (61-80)</div>
                <div className="text-sm font-mono font-bold text-slate-200">100</div>
              </div>
              <div className="p-2 rounded bg-rose-500/5 border border-rose-500/20">
                <div className="text-[10px] text-rose-400 font-bold">CRIT (81-100)</div>
                <div className="text-sm font-mono font-bold text-slate-200">58</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Blast Radius Index */}
        <Card className="border-slate-800/80">
          <CardHeader>
            <CardTitle>Attack Path Exposure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg border border-slate-800 bg-[#070b13]">
              <div className="text-xs font-semibold text-slate-300">
                Tier 0 Reachability
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                4.1% of all identities possess direct or indirect transitive access to root production assets.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-800 bg-[#070b13]">
              <div className="text-xs font-semibold text-slate-300">
                Toxic Privilege Combos
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                8 accounts hold conflicting Separation-of-Duties rights (e.g. key minting + transaction authorization).
              </p>
            </div>
            <Link
              href="/findings"
              className="flex items-center justify-between text-xs font-semibold text-sky-400 hover:text-sky-300 pt-1"
            >
              <span>View all 42 threat findings</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Critical Attack Paths Spotlight */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300 flex items-center gap-2">
            <Network className="h-4 w-4 text-sky-400" />
            Active Critical Attack Paths
          </h2>
          <Link
            href="/attack-paths"
            className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
          >
            <span>Full Graph View</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {priorityAttackPaths.map((path) => (
            <div
              key={path.id}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-lg border border-slate-800 bg-[#0d1424]/80 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-200">
                    {path.identity}
                  </span>
                  <Badge variant={path.severity}>{path.severity}</Badge>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Score: {path.riskScore}/100
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-400">
                  {path.chain.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                          idx === path.chain.length - 1
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "bg-slate-800/80 text-slate-300"
                        }`}
                      >
                        {step}
                      </span>
                      {idx < path.chain.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-slate-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] uppercase font-mono text-slate-400">
                    Blast Radius
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-300">
                    {path.blastRadius}
                  </div>
                </div>
                <Link
                  href={`/identities/${encodeURIComponent(path.identity)}`}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors text-center"
                >
                  Investigate Path
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
