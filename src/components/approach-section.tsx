// modified- our approach section with user provided text and CTA
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  FaSearch,
  FaDraftingCompass,
  FaCheckDouble,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa"

const approachPillars = [
  {
    step: "01",
    icon: FaSearch,
    title: "Understand Your Workflow",
    description:
      "We listen to your team, map your current process and identify repetitive tasks, delays and opportunities for improvement.",
    tag: "Workflow Mapping",
  },
  {
    step: "02",
    icon: FaDraftingCompass,
    title: "Design a Practical Solution",
    description:
      "We define the requirements, recommend suitable tools and agree on clear outcomes—with human review wherever it matters.",
    tag: "Practical Design",
  },
  {
    step: "03",
    icon: FaCheckDouble,
    title: "Build and Validate",
    description:
      "We develop a focused prototype, test it against real business scenarios and refine it through your feedback.",
    tag: "Prototype & Feedback",
  },
  {
    step: "04",
    icon: FaRocket,
    title: "Launch and Improve",
    description:
      "We support implementation, document the workflow and review results to identify further improvements.",
    tag: "Launch & Improve",
  },
]

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative pt-6 sm:pt-8 md:pt-10 pb-14 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden border-t border-slate-100"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, #1e63e9 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2.5 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our Approach
            </span>
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight leading-tight"
          >
            Understand Your Business.{" "}
            <span className="bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#037899] bg-clip-text text-transparent">
              Build What Matters.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mt-3 sm:mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2"
          >
            We start with your challenges and create practical AI and automation solutions that help your team work more effectively.
          </motion.p>
        </div>

        {/* Four Cards: One row on desktop (lg:grid-cols-4), vertically stacked on mobile (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {approachPillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Step Badge */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#1e63e9] transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a] tracking-tight mb-2.5 group-hover:text-[#1e63e9] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0f46b8] border border-blue-200/50">
                    {pillar.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0b1f3a] tracking-tight">
            Have a process you want to simplify?
          </h3>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Let’s explore what better could look like.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
            >
              <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
              <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Click Here to Connect</span>
                <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/#process"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-[#0b1f3a] border-2 border-slate-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#1e63e9] hover:text-[#1e63e9] hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-sm sm:text-base cursor-pointer"
            >
              <span className="relative z-10">See Working Process</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
