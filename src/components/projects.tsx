// modified- solutions demos aligned with official company profile
"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {
  FaClipboardList,
  FaRobot,
  FaChartBar,
  FaBalanceScale,
  FaComments,
  FaFileInvoice,
  FaShoppingCart,
  FaExchangeAlt,
} from "react-icons/fa"
import PerspectiveCarousel, {
  type PerspectiveCarouselItem,
} from "@/components/ui/perspective-carousel"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const demos: PerspectiveCarouselItem[] = [
  {
    title: "Workflow Automation",
    summary:
      "Capture enquiries, assign owners, trigger approvals, and follow up on missing information across connected business tools.",
    tags: ["Workflows", "Onboarding", "Approvals"],
    icon: <FaClipboardList className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Robotic Process Automation",
    summary:
      "Software robots for repetitive computer tasks — routine record updates, portal report downloads, and file handling with human review.",
    tags: ["RPA", "Software Bots", "Audit Logs"],
    icon: <FaRobot className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Business Intelligence Dashboards",
    summary:
      "Clear visibility into business performance — track sales, expenses, orders and service KPIs consolidated from your tools.",
    tags: ["Dashboards", "Reporting", "Analytics"],
    icon: <FaChartBar className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Reconciliation & Data Validation",
    summary:
      "Match invoices with bank records and compare e-commerce orders with payment gateways and courier settlement files.",
    tags: ["Reconciliation", "Settlements", "Validation"],
    icon: <FaBalanceScale className="text-white text-xl" aria-hidden />,
  },
  {
    title: "AI Customer Support Assistants",
    summary:
      "Answer customer questions accurately using approved business information, collect initial details, and route smoothly to team members.",
    tags: ["AI Copilot", "Support", "Handover"],
    icon: <FaComments className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Document Information Extraction",
    summary:
      "Read selected fields automatically from invoices, receipts, and intake forms with validation before entering your database.",
    tags: ["OCR", "Field Extraction", "Invoices"],
    icon: <FaFileInvoice className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Websites & Connected E-Commerce",
    summary:
      "Company websites and online product catalogues linked directly with order journeys, courier notifications, and live reporting.",
    tags: ["E-Commerce", "Websites", "Sync"],
    icon: <FaShoppingCart className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Connected App Integrations",
    summary:
      "Seamlessly transfer data between online forms, spreadsheets, CRMs, and core ERP systems with zero manual copying.",
    tags: ["Integration", "APIs", "Data Sync"],
    icon: <FaExchangeAlt className="text-white text-xl" aria-hidden />,
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 85%",
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="solutions" className="py-14 sm:py-20 md:py-24 px-4 md:px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3"
          >
            <div className="w-2 h-2 bg-[#1e63e9] rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Example Solutions
            </p>
            <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="projects-title text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight"
          >
            Solutions you can{" "}
            <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">
              explore
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 flex justify-center px-2"
          >
            <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-semibold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wide text-center">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shrink-0" aria-hidden />
              Demonstration only — not live client deployments
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2.5 sm:mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2"
          >
            Illustrative examples of what we build. Each can be tailored to your data,
            tools and compliance requirements during a scoped engagement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="h-[420px] sm:h-[450px] md:h-[480px] w-full">
            <PerspectiveCarousel
              items={demos}
              loop
              slideWidth={260}
              rotationStep={55}
              inactiveScale={0.82}
              className="h-full w-full"
              viewportClassName="pt-2 pb-6"
              trackClassName="top-[43%] sm:top-[44%]"
              labelClassName="hidden"
            />
          </div>

          {/* Soft brand glow behind carousel */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-400/15 blur-3xl"
            aria-hidden
          />
        </motion.div>

        <div className="mt-8 sm:mt-10 text-center px-4">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
          >
            <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10">Request a Walkthrough</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
