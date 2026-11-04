// modified- services section with client-only 3D books and responsive sizing
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { type BookCfg } from "@/components/ui/books-showcase";

const BooksShowcase = dynamic(() => import("@/components/ui/books-showcase"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-50/50">
      <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-600 rounded-full animate-spin" />
    </div>
  ),
});

function drawServiceCover(
  x: CanvasRenderingContext2D,
  w: number,
  h: number,
  title: string,
  category: string,
  bgPrimary: string,
  accentColor: string,
) {
  // Background
  x.fillStyle = bgPrimary;
  x.fillRect(0, 0, w, h);

  // Radial illumination from top-center
  const grad = x.createRadialGradient(w / 2, h * 0.2, 20, w / 2, h * 0.5, w * 0.9);
  grad.addColorStop(0, "rgba(30, 99, 233, 0.28)");
  grad.addColorStop(0.5, "rgba(6, 182, 212, 0.08)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  x.fillStyle = grad;
  x.fillRect(0, 0, w, h);

  // Tech grid pattern
  x.strokeStyle = "rgba(255, 255, 255, 0.045)";
  x.lineWidth = 1;
  const step = 38;
  for (let i = 0; i < w; i += step) {
    x.beginPath();
    x.moveTo(i, 0);
    x.lineTo(i, h);
    x.stroke();
  }
  for (let j = 0; j < h; j += step) {
    x.beginPath();
    x.moveTo(0, j);
    x.lineTo(w, j);
    x.stroke();
  }

  // Double Border with corner notches
  x.strokeStyle = accentColor;
  x.lineWidth = 3.5;
  x.strokeRect(70, 70, w - 140, h - 140);

  x.strokeStyle = "rgba(255, 255, 255, 0.2)";
  x.lineWidth = 1.5;
  x.strokeRect(85, 85, w - 170, h - 170);

  // Top branding badge - High contrast & ultra-sharp
  x.fillStyle = "#38bdf8";
  x.font = "bold 38px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  x.textAlign = "center";
  x.fillText("INTEVORIS AI SOLUTIONS", w / 2, 200);

  x.fillStyle = "#ffffff";
  x.font = "700 26px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  x.fillText("CAPABILITY BLUEPRINT", w / 2, 250);

  // Decorative emblem / logo ring in center-top
  const emblemY = h * 0.32;
  x.beginPath();
  x.arc(w / 2, emblemY, 60, 0, Math.PI * 2);
  x.strokeStyle = accentColor;
  x.lineWidth = 3;
  x.stroke();

  x.fillStyle = "rgba(6, 182, 212, 0.25)";
  x.fill();

  x.beginPath();
  x.arc(w / 2, emblemY, 30, 0, Math.PI * 2);
  x.fillStyle = "#ffffff";
  x.fill();

  // Service Title - Ultra-bold high-impact typography (110px)
  x.fillStyle = "#ffffff";
  x.font = "900 110px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  const words = title.split(" ");
  let line = "";
  const lines: string[] = [];
  words.forEach((word) => {
    const test = line ? line + " " + word : word;
    if (x.measureText(test).width > w * 0.78 && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);

  const startY = h * 0.58 - ((lines.length - 1) * 130) / 2;
  x.shadowColor = "rgba(0, 0, 0, 0.7)";
  x.shadowBlur = 14;
  x.shadowOffsetY = 4;
  lines.forEach((l, i) => x.fillText(l, w / 2, startY + i * 130));
  x.shadowColor = "transparent";
  x.shadowBlur = 0;
  x.shadowOffsetY = 0;

  // Accent divider line
  const divY = startY + lines.length * 130 + 10;
  x.fillStyle = "#38bdf8";
  x.fillRect(w / 2 - 100, divY, 200, 6);

  // Category & Metadata - Crisp Sky Cyan (48px)
  x.fillStyle = "#67e8f9";
  x.font = "700 48px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  x.fillText(category, w / 2, divY + 70);

  // Bottom Security / Compliance Seal - Pure White (30px)
  x.fillStyle = "#ffffff";
  x.font = "bold 30px monospace";
  x.fillText("ENTERPRISE AI ARCHITECTURE · 2026", w / 2, h - 140);
}

const serviceBooks: BookCfg[] = [
  {
    id: "service-workflow",
    title: "Workflow Automation",
    author: "Intevoris AI",
    year: "Automation",
    stars: 5,
    desc: "Less chasing. Fewer repeated steps. Capture enquiries, route approvals and reminders, and connect data between forms, spreadsheets and business systems.",
    category: "Workflow Automation",
    badge: "Fewer Repeated Steps",
    primaryActionLabel: "Start an Enquiry",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "View Process",
    secondaryActionHref: "/#process",
    spineBg: "#0b1f3a",
    spineInk: "#38bdf8",
    spineFont: "700 36px Georgia",
    backBg: "#0b1f3a",
    backInk: "148,163,184",
    edge: "#1e63e9",
    chapters: [
      "Enquiries and Onboarding Capture",
      "Assign Owners & Follow up on Missing Info",
      "Approvals and Action Notifications",
      "Transfer Data Between Forms & Sheets",
      "End-to-End Business System Routing",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "Workflow Automation",
        "Less Chasing. Fewer Repeated Steps.",
        "#0b1f3a",
        "#38bdf8",
      ),
  },
  {
    id: "service-rpa",
    title: "Robotic Process Automation",
    author: "Intevoris AI",
    year: "Software Bots",
    stars: 5,
    desc: "Software robots for repetitive computer tasks — routine record updates against agreed rules, portal file downloads, and execution logs with human review.",
    category: "Process Automation",
    badge: "Audit-Logged Robots",
    primaryActionLabel: "Deploy Software Bots",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "See Examples",
    secondaryActionHref: "/#solutions",
    spineBg: "#0f2b5c",
    spineInk: "#06b6d4",
    spineFont: "700 36px Georgia",
    backBg: "#0f2b5c",
    backInk: "148,163,184",
    edge: "#06b6d4",
    chapters: [
      "Routine Record Updates Against Agreed Rules",
      "Download Reports from Web Portals",
      "Move Data Between Existing Desktop Tools",
      "Operational Control & Execution Logs",
      "Exception Routing for Human Review",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "Robotic Process Automation",
        "Software Robots for Repetitive Tasks",
        "#0f2b5c",
        "#06b6d4",
      ),
  },
  {
    id: "service-bi",
    title: "Data & Business Intelligence",
    author: "Intevoris AI",
    year: "BI & Reporting",
    stars: 5,
    desc: "Clear visibility into business performance. Track sales, expenses, orders and service performance consolidated from your existing tools.",
    category: "Business Intelligence",
    badge: "Clear Visibility",
    primaryActionLabel: "Build Dashboards",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "Explore Demos",
    secondaryActionHref: "/#solutions",
    spineBg: "#0c213b",
    spineInk: "#38bdf8",
    spineFont: "700 36px Georgia",
    backBg: "#0c213b",
    backInk: "148,163,184",
    edge: "#2563eb",
    chapters: [
      "Management Dashboards (Sales, Expenses, Orders)",
      "Service Performance Metric Tracking",
      "Consolidate Data Across Existing Tools",
      "Recurring Reporting & Scheduled Updates",
      "Eliminate Manual Spreadsheet Preparation",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "Data & Business Intelligence",
        "Clear Visibility into Performance",
        "#0c213b",
        "#38bdf8",
      ),
  },
  {
    id: "service-reconciliation",
    title: "Reconciliation & Validation",
    author: "Intevoris AI",
    year: "Financial Ops",
    stars: 5,
    desc: "Matched records. Clear exceptions. Match invoices with bank payments, compare e-commerce gateway settlements, and flag discrepancies for client review.",
    category: "Reconciliation",
    badge: "Matched Records",
    primaryActionLabel: "Automate Reconciliation",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "Our Process",
    secondaryActionHref: "/#process",
    spineBg: "#0e2a47",
    spineInk: "#67e8f9",
    spineFont: "700 36px Georgia",
    backBg: "#0e2a47",
    backInk: "148,163,184",
    edge: "#0284c7",
    chapters: [
      "Match Invoices & Payments to Bank Records",
      "Compare Orders with Payment Gateway Settlements",
      "Courier COD Settlement File Verification",
      "Flag Duplicates, Missing Entries & Discrepancies",
      "Rule-Based Matching with Final Client Approval",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "Reconciliation & Validation",
        "Matched Records. Clear Exceptions.",
        "#0e2a47",
        "#67e8f9",
      ),
  },
  {
    id: "service-assistants",
    title: "AI Assistants & Document AI",
    author: "Intevoris AI",
    year: "AI Copilots",
    stars: 5,
    desc: "Customer support assistants answering with approved business information, enquiry capture & handover, and intelligent document information extraction.",
    category: "Digital Experiences",
    badge: "Approved Data Only",
    primaryActionLabel: "Deploy AI Assistants",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "Explore Demos",
    secondaryActionHref: "/#solutions",
    spineBg: "#11184a",
    spineInk: "#a5b4fc",
    spineFont: "700 36px Georgia",
    backBg: "#11184a",
    backInk: "148,163,184",
    edge: "#6366f1",
    chapters: [
      "Customer Support Answering with Approved Info",
      "Enquiry Capture & Smooth Team Handover",
      "Extract Selected Fields from Invoices & Forms",
      "Validation Checks Before Data Ingestion",
      "Deterministic Safety & Confidentiality Rules",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "AI Assistants & Document AI",
        "Customer Support & Intelligent Extraction",
        "#11184a",
        "#a5b4fc",
      ),
  },
  {
    id: "service-ecommerce",
    title: "Websites & E-Commerce",
    author: "Intevoris AI",
    year: "Digital Platforms",
    stars: 5,
    desc: "Company websites that present services clearly, online stores with product catalogues and order journeys, linked directly to operational tracking.",
    category: "Digital Platforms",
    badge: "Connected Operations",
    primaryActionLabel: "Launch Your Platform",
    primaryActionHref: "/#contact",
    secondaryActionLabel: "How We Deliver",
    secondaryActionHref: "/#process",
    spineBg: "#091726",
    spineInk: "#34d399",
    spineFont: "700 36px Georgia",
    backBg: "#091726",
    backInk: "148,163,184",
    edge: "#10b981",
    chapters: [
      "Clear Company Websites that Drive Enquiries",
      "Online Stores & Product Catalogues",
      "Smooth Order Journeys with Supported Integrations",
      "Link Enquiries & Orders with Notifications",
      "Automated Courier Tracking & Sales Reporting",
    ],
    front: (x, w, h) =>
      drawServiceCover(
        x,
        w,
        h,
        "Websites & E-Commerce",
        "Online Stores & Connected Operations",
        "#091726",
        "#34d399",
      ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-3 mb-2.5"
          >
            <div className="w-2 h-2 bg-[#1e63e9] rounded-full" />
            <p className="text-slate-500 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
              What We Do
            </p>
            <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#0f46b8] via-[#1652d0] to-[#037899] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2.5 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
          >
            End-to-end capability — from first use-case workshop to production AI that
            your team can trust and operate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#0f46b8] font-medium px-2 text-center"
          >
            <span className="w-2 h-2 rounded-full bg-[#037899] animate-ping shrink-0" />
            <span>Click or drag any service volume below to explore roadmap & deliverables</span>
          </motion.div>
        </div>

        {/* 3D Books Showcase Component */}
        <div className="w-full h-[490px] sm:h-[560px] md:h-[640px] rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-sm shadow-2xl shadow-blue-500/5 overflow-hidden relative">
          <BooksShowcase
            books={serviceBooks}
            heroTitle="SERVICES"
            heroTitleClassName="text-slate-300 dark:text-slate-700"
            navTitle="Intevoris AI Solutions"
            showNav={false}
            showDetailPanel={true}
            showCarousel={true}
            className="min-h-0 h-full"
            themeColors={{
              navy: "#0b1f3a",
              pink: "#06b6d4",
              cream: "#ffffff",
              lav: "#cbd5e1",
              peri: "#1e63e9",
              bgLight: "transparent",
              bgDark: "#0b1f3a",
              foregroundLight: "#0b1f3a",
              foregroundDark: "#ffffff",
            }}
          />
        </div>

        {/* Bottom CTA bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm md:text-base cursor-pointer"
          >
            <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10">Discuss Your Use Case</span>
          </Link>
          <Link
            href="/#process"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-[#0b1f3a] border-2 border-slate-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#1e63e9] hover:text-[#1e63e9] hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-sm md:text-base cursor-pointer"
          >
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[50%] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10">See Our Working Process</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
