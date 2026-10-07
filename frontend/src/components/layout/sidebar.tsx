"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  LayoutDashboard,
  Users,
  Network,
  ShieldAlert,
  Activity,
  ShieldCheck,
  Bot,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Executive Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Identity Directory", href: "/identities", icon: Users },
  { name: "Attack Paths Graph", href: "/attack-paths", icon: Network },
  { name: "Threat Findings", href: "/findings", icon: ShieldAlert, badge: "12" },
  { name: "Event Timeline", href: "/timeline", icon: Activity },
  { name: "Safe Remediation", href: "/remediation", icon: ShieldCheck },
  { name: "AI Threat Copilot", href: "/ai", icon: Bot, isNew: true },
  { name: "System Settings", href: "/settings", icon: Sliders },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800/80 bg-[#070b12] flex flex-col justify-between">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-800/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 shadow-glow">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold tracking-wider text-slate-100 flex items-center gap-1.5">
              SHADOW<span className="text-sky-400">VAULT</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
              ITDR & Attack Path AI
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname?.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-medium transition-all group",
                  isActive
                    ? "bg-sky-500/10 text-sky-300 border border-sky-500/30 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-sky-400"
                        : "text-slate-400 group-hover:text-slate-300"
                    )}
                  />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      {item.badge}
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      AI
                    </span>
                  )}
                  {isActive && <ChevronRight className="h-3 w-3 text-sky-400" />}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / SOC Status */}
      <div className="p-4 border-t border-slate-800/60 bg-[#090e18]/80">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Graph Engine
          </span>
          <span className="font-mono text-emerald-400 text-[10px]">CONNECTED</span>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 font-mono">
          v1.0.0-rc1 • Zero Trust
        </div>
      </div>
    </aside>
  );
}
