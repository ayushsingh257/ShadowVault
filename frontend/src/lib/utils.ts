import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRiskScore(score: number): {
  label: string;
  colorClass: string;
  badgeBg: string;
} {
  if (score >= 81) {
    return {
      label: "CRITICAL",
      colorClass: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    };
  }
  if (score >= 61) {
    return {
      label: "HIGH",
      colorClass: "text-orange-400",
      badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    };
  }
  if (score >= 41) {
    return {
      label: "ELEVATED",
      colorClass: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    };
  }
  if (score >= 21) {
    return {
      label: "MODERATE",
      colorClass: "text-sky-400",
      badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    };
  }
  return {
    label: "LOW",
    colorClass: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  };
}
