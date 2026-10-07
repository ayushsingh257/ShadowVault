import React from "react";
import { Bot, Sparkles, Send, ShieldAlert, ArrowRight, CornerDownLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AICopilotPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Bot className="h-5 w-5 text-sky-400" />
            Grounded AI Threat Analyst Copilot
          </h1>
          <p className="text-xs text-slate-400">
            Natural language threat intelligence strictly grounded in your active ShadowVault identity graph and security telemetry.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-[10px] text-emerald-400 border-emerald-500/30">
            Grounding: 100% Graph-Verified
          </Badge>
        </div>
      </div>

      {/* Copilot Chat Container */}
      <div className="rounded-xl border border-slate-800 bg-[#0a0f1c] flex flex-col h-[600px] overflow-hidden">
        {/* Messages Scroll Area */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* AI Intro Message */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="space-y-2 max-w-3xl">
              <div className="p-4 rounded-lg border border-slate-800 bg-[#0e1628] text-xs text-slate-200 leading-relaxed">
                Hello Ayush. I am the ShadowVault Identity Intelligence Copilot. I can explain complex attack paths, evaluate blast radii, and recommend safe least-privilege remediation plans based strictly on verified graph state.
                <div className="mt-3 text-[11px] text-slate-400">
                  Try asking one of the prompts below:
                </div>
              </div>
            </div>
          </div>

          {/* Sample Suggested Prompts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-11">
            <button className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 text-left text-xs text-slate-300 transition-colors">
              "Which identities have transitive access to production databases?"
            </button>
            <button className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 text-left text-xs text-slate-300 transition-colors">
              "Why is ayush@example.com classified as critical risk?"
            </button>
            <button className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 text-left text-xs text-slate-300 transition-colors">
              "What would be the blast radius if svc-deployer-ci were compromised?"
            </button>
            <button className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 text-left text-xs text-slate-300 transition-colors">
              "Show me all dormant accounts holding active administrator roles."
            </button>
          </div>
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#070b14]">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Ask the AI Security Analyst about your identity graph or attack paths..."
              className="w-full rounded-lg border border-slate-800 bg-[#0e1525] py-3 pl-4 pr-12 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500/50"
            />
            <button className="absolute right-2 p-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors">
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Model: Local RAG (Sentence-Transformers) + LLM Provider</span>
            <span>Zero-hallucination verification active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
