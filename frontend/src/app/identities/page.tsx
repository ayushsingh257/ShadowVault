import React from "react";
import { Users, Search, Filter, ShieldCheck, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const identities = [
  {
    id: "usr-01",
    name: "Ayush Singh",
    email: "ayush@example.com",
    department: "Engineering / SecOps",
    roles: ["CloudAdmin", "SecOps-Lead"],
    mfaEnabled: true,
    riskScore: 92,
    severity: "critical" as const,
    lastActive: "12 mins ago",
    accessibleResources: 42,
  },
  {
    id: "usr-02",
    name: "Elena Rostova",
    email: "elena.r@enterprise.corp",
    department: "DevOps",
    roles: ["K8s-Operator", "CI-Admin"],
    mfaEnabled: true,
    riskScore: 78,
    severity: "high" as const,
    lastActive: "2 hours ago",
    accessibleResources: 29,
  },
  {
    id: "usr-03",
    name: "David Kim",
    email: "d.kim@contractor.io",
    department: "Contractor / External",
    roles: ["ReadOnly-Audit", "Dev-Viewer"],
    mfaEnabled: false,
    riskScore: 68,
    severity: "high" as const,
    lastActive: "14 days ago",
    accessibleResources: 11,
  },
  {
    id: "usr-04",
    name: "Sarah Chen",
    email: "s.chen@enterprise.corp",
    department: "Product Analytics",
    roles: ["DataWarehouse-Analyst"],
    mfaEnabled: true,
    riskScore: 28,
    severity: "moderate" as const,
    lastActive: "Yesterday",
    accessibleResources: 6,
  },
  {
    id: "usr-05",
    name: "Dormant Service User",
    email: "legacy-sync@infra.internal",
    department: "Infrastructure",
    roles: ["Legacy-Full-Access"],
    mfaEnabled: false,
    riskScore: 84,
    severity: "critical" as const,
    lastActive: "78 days ago",
    accessibleResources: 34,
  },
];

export default function IdentitiesPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Users className="h-5 w-5 text-sky-400" />
            Identity Directory & Privilege Risk
          </h1>
          <p className="text-xs text-slate-400">
            Search human users, service accounts, and external contractors with direct and transitive entitlements.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by name, email, role..."
              className="w-full rounded-md border border-slate-800 bg-[#0e1525] py-2 pl-9 pr-3 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500/50"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800">
            <Filter className="h-3.5 w-3.5" /> Filter
          </button>
        </div>
      </div>

      {/* Identities Table */}
      <div className="rounded-lg border border-slate-800 bg-[#0d1424]/90 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#070c14] border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase">
              <tr>
                <th className="p-4">Identity</th>
                <th className="p-4">Department</th>
                <th className="p-4">Assigned Roles</th>
                <th className="p-4">MFA</th>
                <th className="p-4">Risk Score</th>
                <th className="p-4">Accessible Assets</th>
                <th className="p-4">Last Active</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {identities.map((identity) => (
                <tr key={identity.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-slate-200">{identity.name}</div>
                    <div className="text-[11px] font-mono text-slate-400">{identity.email}</div>
                  </td>
                  <td className="p-4 text-slate-300">{identity.department}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {identity.roles.map((r) => (
                        <span
                          key={r}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    {identity.mfaEnabled ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                        <ShieldCheck className="h-3.5 w-3.5" /> Enforced
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 font-semibold">
                        <AlertTriangle className="h-3.5 w-3.5" /> Disabled
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={identity.severity}>{identity.severity}</Badge>
                      <span className="font-mono font-bold text-slate-200">
                        {identity.riskScore}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-300">{identity.accessibleResources} targets</td>
                  <td className="p-4 text-slate-400">{identity.lastActive}</td>
                  <td className="p-4 text-right">
                    <button className="px-2.5 py-1 text-[11px] font-semibold rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors">
                      What Can It Reach?
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
