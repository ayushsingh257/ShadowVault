import React from "react";
import { Sliders, Cloud, Github, Shield, Database, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const connectors = [
  {
    name: "Synthetic / Demo Enterprise IAM Provider",
    type: "Built-in / Local",
    status: "CONNECTED",
    identitiesLoaded: 1428,
    lastSync: "3 minutes ago",
    badge: "emerald",
  },
  {
    name: "AWS IAM Connector",
    type: "Cloud Identity",
    status: "READY (PHASE 42)",
    identitiesLoaded: 0,
    lastSync: "Not configured",
    badge: "outline",
  },
  {
    name: "Microsoft Entra ID (Azure AD)",
    type: "Directory Provider",
    status: "READY (PHASE 45)",
    identitiesLoaded: 0,
    lastSync: "Not configured",
    badge: "outline",
  },
  {
    name: "Kubernetes RBAC Provider",
    type: "Cluster Security",
    status: "READY (PHASE 44)",
    identitiesLoaded: 0,
    lastSync: "Not configured",
    badge: "outline",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Sliders className="h-5 w-5 text-sky-400" />
            System Connectors & Ingestion Settings
          </h1>
          <p className="text-xs text-slate-400">
            Configure identity provider ingestion pipelines, graph reconciliation cadence, and security thresholds.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          Connected Identity Sources
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {connectors.map((c) => (
            <div
              key={c.name}
              className="p-4 rounded-lg border border-slate-800 bg-[#0e1525]/90 flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-semibold text-slate-200">{c.name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Type: {c.type} • Loaded: {c.identitiesLoaded} entities • Last sync: {c.lastSync}
                </div>
              </div>
              <Badge variant={c.badge === "emerald" ? "low" : "outline"}>
                {c.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
