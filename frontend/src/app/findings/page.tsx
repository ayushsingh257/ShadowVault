import React from "react";
import { ShieldAlert, AlertTriangle, Key, Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const findings = [
  {
    id: "FND-001",
    title: "Excessive Administrative Privilege Inheritance",
    severity: "critical" as const,
    category: "EXCESSIVE_PRIVILEGE",
    identity: "ayush@example.com",
    riskScore: 92,
    explanation: "Identity possesses CloudAdmin role via nested group membership without documented ticket reference.",
    status: "OPEN",
    created: "2 hours ago",
  },
  {
    id: "FND-002",
    title: "Dormant Administrator Account Active",
    severity: "critical" as const,
    category: "DORMANT_IDENTITY",
    identity: "legacy-sync@infra.internal",
    riskScore: 84,
    explanation: "Account has not authenticated for 78 days but retains unrestricted database write privileges.",
    status: "OPEN",
    created: "5 hours ago",
  },
  {
    id: "FND-003",
    title: "Stale Long-Lived API Key (> 180 Days)",
    severity: "high" as const,
    category: "STALE_CREDENTIAL",
    identity: "svc-github-actions@corp.internal",
    riskScore: 74,
    explanation: "API key was created 194 days ago and has not been rotated according to 90-day organizational policy.",
    status: "IN_REVIEW",
    created: "1 day ago",
  },
  {
    id: "FND-004",
    title: "Separation-of-Duties (SoD) Toxic Combination",
    severity: "high" as const,
    category: "TOXIC_COMBINATION",
    identity: "finance-bot@apps.internal",
    riskScore: 71,
    explanation: "Identity holds permissions to both mint API keys and execute payment gateway transactions simultaneously.",
    status: "OPEN",
    created: "1 day ago",
  },
];

export default function FindingsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-rose-500" />
            Security & Identity Risk Findings
          </h1>
          <p className="text-xs text-slate-400">
            Automated detection findings across excessive privileges, dormant accounts, and toxic permission combinations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="critical">4 Critical</Badge>
          <Badge variant="high">8 High</Badge>
          <Badge variant="elevated">12 Elevated</Badge>
        </div>
      </div>

      <div className="space-y-3">
        {findings.map((f) => (
          <div
            key={f.id}
            className="p-5 rounded-lg border border-slate-800 bg-[#0e1525]/90 hover:border-slate-700 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-slate-400">{f.id}</span>
                <Badge variant={f.severity}>{f.severity}</Badge>
                <span className="font-semibold text-xs text-slate-200">{f.title}</span>
              </div>
              <p className="text-xs text-slate-400">{f.explanation}</p>
              <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 pt-1">
                <span>Identity: <span className="text-sky-400">{f.identity}</span></span>
                <span>Score: <span className="text-slate-200">{f.riskScore}/100</span></span>
                <span>Created: {f.created}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="px-3 py-1.5 text-xs font-semibold rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors">
                Simulate Remediation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
