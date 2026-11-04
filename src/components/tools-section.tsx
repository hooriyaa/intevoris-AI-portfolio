// modified- restored original working process
"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaSearch,
  FaCrosshairs,
  FaLayerGroup,
  FaCode,
  FaCheckDouble,
  FaRocket,
} from "react-icons/fa"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We map your goals, users, tools and constraints to find the highest-value problems worth solving first.",
    icon: FaSearch,
  },
  {
    number: "02",
    title: "Define",
    text: "Scope, deliverables, timeline and acceptance criteria are agreed up front — so success is measurable.",
    icon: FaCrosshairs,
  },
  {
    number: "03",
    title: "Design",
    text: "Architecture, data flows, guardrails and UX are designed with your stakeholders before code ships.",
    icon: FaLayerGroup,
  },
  {
    number: "04",
    title: "Build",
    text: "We develop in short iterations with regular demos, so you see progress and can steer priorities early.",
    icon: FaCode,
  },
  {
    number: "05",
    title: "Validate",
    text: "Testing against agreed cases, security review and user acceptance — results documented before go-live.",
    icon: FaCheckDouble,
  },
  {
    number: "06",
    title: "Launch & Improve",
    text: "Deployment, handover, monitoring and a continuous improvement loop as your business evolves.",
    icon: FaRocket,
  },
]

// Node positions on a 1000×420 canvas (zigzag like n8n)
const nodePositions = [
  { x: 80, y: 90 },
  { x: 300, y: 90 },
  { x: 520, y: 90 },
  { x: 740, y: 90 },
  { x: 520, y: 310 },
  { x: 200, y: 310 },
]

function edgePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = (b.x - a.x) * 0.5
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`
}

export default function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // Cycle active node like a live workflow run
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const section = sectionRef.current
    const title = titleRef.current
    if (!section || !title) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const activeStep = steps[active]

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-14 sm:py-20 md:py-28 px-4 bg-white relative overflow-hidden"
    >
      {/* n8n-style dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80 pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-[#1e63e9] rounded-full" />
            <span className="text-slate-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              How We Work
            </span>
            <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight leading-tight">
            Our Working{" "}
            <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
            A clear path from first conversation to a working solution — watch the
            workflow run, stage by stage.
          </p>
        </div>

        {/* Workflow canvas */}
        <div className="relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-sm shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Terminal-style top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 bg-white/90">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs font-mono text-slate-500">
              intevoris-workflow · run #{active + 1}
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* Desktop workflow */}
            <div className="hidden md:block relative">
              <svg
                viewBox="0 0 1000 420"
                className="w-full h-auto"
                aria-hidden
              >
                <defs>
                  <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e63e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,1 L7,4 L0,7 Z" fill="#1e63e9" />
                  </marker>
                </defs>

                {/* Base edges */}
                {nodePositions.slice(0, -1).map((pos, i) => (
                  <path
                    key={`base-${i}`}
                    d={edgePath(pos, nodePositions[i + 1])}
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    markerEnd="url(#arrow)"
                  />
                ))}

                {/* Active edge — solid gradient */}
                <path
                  d={edgePath(nodePositions[active], nodePositions[(active + 1) % nodePositions.length])}
                  fill="none"
                  stroke="url(#edgeGrad)"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow)"
                  style={{ transition: "all 0.5s ease" }}
                />

                {/* Traveling pulse on active edge */}
                <circle r="7" fill="#06b6d4">
                  <animateMotion
                    dur="1.6s"
                    repeatCount="indefinite"
                    path={edgePath(nodePositions[active], nodePositions[(active + 1) % nodePositions.length])}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="14" fill="#06b6d4" opacity="0.25">
                  <animateMotion
                    dur="1.6s"
                    repeatCount="indefinite"
                    path={edgePath(nodePositions[active], nodePositions[(active + 1) % nodePositions.length])}
                  />
                </circle>
              </svg>

              {/* Node cards overlaid on canvas */}
              {steps.map((step, i) => {
                const pos = nodePositions[i]
                const isActive = i === active
                const isDone = i < active
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    className="absolute"
                    style={{
                      left: `${pos.x / 1000 * 100}%`,
                      top: `${pos.y / 420 * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      scale: isActive ? 1.06 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "step" : undefined}
                      className={`w-40 rounded-xl px-4 py-3 text-left border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-white border-blue-400 shadow-xl shadow-blue-500/25 ring-2 ring-blue-500/20"
                          : isDone
                            ? "bg-white border-emerald-300 shadow-md shadow-emerald-500/10"
                            : "bg-white/90 border-slate-200 shadow-sm hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-colors ${
                            isActive
                              ? "bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] text-white shadow-md shadow-blue-500/30"
                              : isDone
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <Icon aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-mono text-slate-400 leading-none">
                            {step.number}
                          </p>
                          <p className="text-sm font-bold text-[#0b1f3a] truncate leading-tight mt-0.5">
                            {step.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive
                              ? "bg-blue-500 animate-pulse"
                              : isDone
                                ? "bg-emerald-500"
                                : "bg-slate-300"
                          }`}
                        />
                        <span
                          className={`text-[10px] font-medium ${
                            isActive
                              ? "text-blue-600"
                              : isDone
                                ? "text-emerald-600"
                                : "text-slate-400"
                          }`}
                        >
                          {isActive ? "Running…" : isDone ? "Completed" : "Queued"}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile workflow — vertical */}
            <ol className="md:hidden relative pl-1 sm:pl-4">
              <div
                className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1e63e9] via-[#06b6d4] to-slate-200"
                aria-hidden
              />
              {steps.map((step, i) => {
                const isActive = i === active
                const isDone = i < active
                const Icon = step.icon
                return (
                  <li key={step.number} className="relative mb-4 sm:mb-5 last:mb-0 list-none">
                    <motion.div
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className={`relative rounded-xl border p-3.5 sm:p-4 pl-11 sm:pl-12 transition-all duration-300 ${
                        isActive
                          ? "bg-white border-blue-400 shadow-lg shadow-blue-500/20"
                          : isDone
                            ? "bg-white border-emerald-300 shadow-sm"
                            : "bg-white/80 border-slate-200"
                      }`}
                    >
                      <span
                        className={`absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] text-white"
                            : isDone
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon className="text-xs sm:text-sm" aria-hidden />
                      </span>
                      <p className="text-[10px] font-mono text-slate-400">{step.number}</p>
                      <p className="text-xs sm:text-sm font-bold text-[#0b1f3a]">{step.title}</p>
                      <p className="text-xs text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">{step.text}</p>
                      <span
                        className={`inline-flex items-center gap-1 mt-1.5 sm:mt-2 text-[10px] font-medium ${
                          isActive
                            ? "text-blue-600"
                            : isDone
                              ? "text-emerald-600"
                              : "text-slate-400"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive
                              ? "bg-blue-500 animate-pulse"
                              : isDone
                                ? "bg-emerald-500"
                                : "bg-slate-300"
                          }`}
                        />
                        {isActive ? "Running…" : isDone ? "Completed" : "Queued"}
                      </span>
                    </motion.div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* Active step detail card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 sm:mt-8 mx-auto max-w-3xl rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-4 sm:p-6 md:p-7 shadow-lg shadow-blue-500/10 text-center md:text-left md:flex md:items-center md:gap-6"
        >
          <span className="inline-flex shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] text-white items-center justify-center text-lg sm:text-xl shadow-lg shadow-blue-500/25 mx-auto md:mx-0 mb-3 md:mb-0">
            {(() => {
              const Icon = activeStep.icon
              return <Icon aria-hidden />
            })()}
          </span>
          <div>
            <p className="text-xs font-mono text-[#1e63e9] font-semibold mb-1">
              STEP {activeStep.number} · ACTIVE
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a] mb-1">
              {activeStep.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{activeStep.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
