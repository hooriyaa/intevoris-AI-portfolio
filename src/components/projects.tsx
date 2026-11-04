// modified- projects section with crystal shine CTA button
"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {
  FaFileAlt,
  FaComments,
  FaChartBar,
  FaClipboardList,
  FaSearchDollar,
  FaUserCheck,
  FaEnvelopeOpenText,
  FaCogs,
} from "react-icons/fa"
import PerspectiveCarousel, {
  type PerspectiveCarouselItem,
} from "@/components/ui/perspective-carousel"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const demos: PerspectiveCarouselItem[] = [
  {
    title: "Document Intelligence Demo",
    summary:
      "Upload contracts or reports and get structured summaries, key clauses and action items — grounded in your own documents.",
    tags: ["RAG", "Summarisation", "QA"],
    icon: <FaFileAlt className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Support Copilot Demo",
    summary:
      "A supervised assistant that drafts replies from your knowledge base, tags urgency and hands complex cases to humans.",
    tags: ["Agents", "Helpdesk", "Guardrails"],
    icon: <FaComments className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Ops Insights Demo",
    summary:
      "Live dashboards that merge data from multiple systems to flag bottlenecks, SLA risks and weekly performance trends.",
    tags: ["Analytics", "Dashboards", "Alerts"],
    icon: <FaChartBar className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Workflow Automation Demo",
    summary:
      "Approvals, data sync and status updates that move automatically between tools — with full audit trails and human checkpoints.",
    tags: ["Automation", "Integrations", "Audit"],
    icon: <FaClipboardList className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Lead Qualification Demo",
    summary:
      "Scores and routes inbound leads from forms, email and CRM events so sales only sees opportunities worth a call.",
    tags: ["Scoring", "Routing", "CRM"],
    icon: <FaSearchDollar className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Onboarding Assistant Demo",
    summary:
      "Guides new customers through setup checklists, collects required documents and nudges incomplete steps automatically.",
    tags: ["Onboarding", "Checklists", "Email"],
    icon: <FaUserCheck className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Inbox Triage Demo",
    summary:
      "Classifies incoming requests, drafts first replies and escalates urgent items with full context attached.",
    tags: ["Triage", "NLP", "Priority"],
    icon: <FaEnvelopeOpenText className="text-white text-xl" aria-hidden />,
  },
  {
    title: "Process Monitor Demo",
    summary:
      "Watches key workflows end to end, flags failures and SLA breaches, and logs every automated decision for review.",
    tags: ["Monitoring", "SLA", "Logging"],
    icon: <FaCogs className="text-white text-xl" aria-hidden />,
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
    <section ref={sectionRef} id="solutions" className="py-20 md:py-28 px-4 md:px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-[#1e63e9] rounded-full" />
            <p className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase">
              Example Solutions
            </p>
            <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="projects-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight"
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
            className="mt-5 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" aria-hidden />
              Demonstration only — not live client deployments
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto"
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
          <div className="h-[520px] sm:h-[560px] md:h-[600px] w-full">
            <PerspectiveCarousel
              items={demos}
              loop
              slideWidth={260}
              rotationStep={55}
              inactiveScale={0.82}
              className="h-full w-full"
              viewportClassName="py-6"
            />
          </div>

          {/* Soft brand glow behind carousel */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-400/15 blur-3xl"
            aria-hidden
          />
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
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
