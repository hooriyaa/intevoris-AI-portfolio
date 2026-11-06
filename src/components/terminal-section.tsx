// modified- terminal showcase section before footer with 10s repeat loop
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal"

export function TerminalDemo() {
  return (
    <Terminal
      loop={true}
      repeatDelay={10000}
      className="bg-[#08182f] text-slate-100 border-slate-700/70 shadow-2xl shadow-blue-950/50 max-w-3xl mx-auto"
    >
      <TypingAnimation className="text-cyan-400 font-semibold font-mono">
        &gt; intevoris deploy --workflow "enterprise-automation"
      </TypingAnimation>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Analyzing operational bottlenecks &amp; team workflows.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Connecting CRM, ERP &amp; database pipelines.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Enforcing enterprise-grade security &amp; safety guardrails.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Deploying intelligent reconciliation &amp; validation bots.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Activating custom AI assistants &amp; document intelligence.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Verifying deterministic human-in-the-loop checkpoints.
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Live verification across business transaction events.
      </AnimatedSpan>

      <AnimatedSpan className="text-cyan-300 font-mono">
        <span>ℹ Pipeline Status:</span>
        <span className="pl-2">Connected · 99.9% Accuracy · Zero Disruption</span>
      </AnimatedSpan>

      <AnimatedSpan className="text-emerald-400 font-mono">
        ✔ Continuous improvement &amp; ROI analytics loop active.
      </AnimatedSpan>

      <TypingAnimation className="text-slate-400 font-mono">
        Success! AI automation system deployed and operational.
      </TypingAnimation>

      <TypingAnimation className="text-cyan-300 font-semibold font-mono">
        Ready to Simplify Work &amp; Amplify Growth.
      </TypingAnimation>
    </Terminal>
  )
}

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden border-t border-slate-200/60"
    >
      {/* Background glow & subtle tech grid */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, #1e63e9 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2.5 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Live Engine
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
            Deploy Intelligence.{" "}
            <span className="bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">
              Power Growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2"
          >
            A high-performance execution engine designed to automate repetitive workflows, connect legacy stacks, and deliver measurable ROI.
          </motion.p>
        </div>

        {/* Terminal Demo Display */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-blue-500/10 via-transparent to-cyan-500/10 border border-blue-500/20 shadow-2xl shadow-blue-500/5"
        >
          {/* Subtle backdrop glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1e63e9]/20 via-[#06b6d4]/20 to-[#1e63e9]/20 blur-xl opacity-50 -z-10" />

          <TerminalDemo />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
          >
            <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <span>Start Your Project</span>
              <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/#services"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-[#0b1f3a] border-2 border-slate-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#1e63e9] hover:text-[#1e63e9] hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-sm sm:text-base cursor-pointer"
          >
            <span className="relative z-10">Explore All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
