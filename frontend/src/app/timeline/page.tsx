import React from "react";
import { Activity, Clock, ShieldCheck, UserCheck, AlertTriangle, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    time: "09:37:12 UTC",
    date: "Today",
    eventType: "API_KEY_CREATED",
    identity: "ayush@example.com",
    details: "New API key 'ci-deployer-temp' generated with admin scopes.",
    severity: "elevated" as const,
    icon: Key,
  },
  {
    time: "09:36:04 UTC",
    date: "Today",
    eventType: "PRODUCTION_RESOURCE_ACCESSED",
    identity: "ayush@example.com",
    details: "Accessed 'Prod-Postgres-Cluster' (Port 5432) via bastion session.",
    severity: "high" as const,
    icon: ShieldCheck,
  },
  {
    time: "09:35:18 UTC",
    date: "Today",
    eventType: "ADMIN_ROLE_ASSIGNED",
    identity: "ayush@example.com",
    details: "Assigned role 'CloudAdmin' through group 'Core-Engineers'.",
    severity: "critical" as const,
    icon: AlertTriangle,
  },
  {
    time: "09:34:02 UTC",
    date: "Today",
    eventType: "GROUP_MEMBERSHIP_CHANGED",
    identity: "ayush@example.com",
    details: "Added to group 'Core-Engineers' by admin@shadowvault.io.",
    severity: "moderate" as const,
    icon: UserCheck,
  },
  {
    time: "09:32:45 UTC",
    date: "Today",
    eventType: "LOGIN_SUCCESS",
    identity: "ayush@example.com",
    details: "Authenticated from IP 198.51.100.44 (US-East) with Hardware MFA.",
    severity: "low" as const,
    icon: Activity,
  },
];

export default function TimelinePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Activity className="h-5 w-5 text-sky-400" />
            Identity Event Activity Timeline
          </h1>
          <p className="text-xs text-slate-400">
            Immutable, searchable event ledger tracking authentications, group shifts, role assignments, and production access.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Live Ingestion: Active</span>
        </div>
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-6 py-4">
        {timelineEvents.map((event, idx) => {
          const Icon = event.icon;
          return (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#080c14] border border-slate-700">
                <Icon className="h-3 w-3 text-sky-400" />
              </div>
              <div className="p-4 rounded-lg border border-slate-800 bg-[#0e1525]/90 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-200">
                      {event.eventType}
                    </span>
                    <Badge variant={event.severity}>{event.severity}</Badge>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {event.time} • {event.date}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2">{event.details}</p>
                <div className="text-[11px] font-mono text-sky-400 mt-1">
                  Target Identity: {event.identity}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
