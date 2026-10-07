import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "ShadowVault — ITDR & Attack Path Intelligence Platform",
  description:
    "AI-Powered Identity Threat Detection, Privilege Analysis & Attack Path Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080c14] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col pl-64">
            <Header />
            <main className="flex-1 p-8 cyber-grid">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
