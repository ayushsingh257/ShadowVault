"use client";

import React from "react";
import { Search, Bell, ShieldCheck, Terminal, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-[#080c14]/90 px-6 backdrop-blur">
      {/* Global Identity Search */}
      <div className="flex items-center gap-3 w-96">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search identity, role, ARN, or production resource..."
            className="w-full rounded-md border border-slate-800 bg-[#0e1525] py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-400 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* API Health Indicator */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          API: OPERATIONAL
        </div>

        {/* Security Simulation Mode Badge */}
        <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-300">
          <Terminal className="h-3 w-3 text-amber-400" />
          SAFE SIMULATION MODE
        </div>

        {/* Notifications */}
        <button
          aria-label="Threat notifications"
          className="relative rounded-md p-2 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-rose-500"></span>
        </button>

        {/* User Identity Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400">
            <User className="h-4 w-4" />
          </div>
          <div className="text-left hidden md:block">
            <div className="text-xs font-semibold text-slate-200">Ayush Singh</div>
            <div className="text-[10px] font-mono text-sky-400 flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> SUPER_ADMIN
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
