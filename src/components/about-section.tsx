// modified- about section integrated with official company profile
"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { FaLightbulb, FaEye, FaLayerGroup } from "react-icons/fa"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const pillars = [
  {
    icon: FaLightbulb,
    title: "Our Mission",
    subtitle: "Turn technology into measurable progress",
    text: "Practical AI, automation and digital solutions that reduce repetitive work, improve efficiency and create better customer experiences.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    subtitle: "A trusted partner for digital transformation",
    text: "A future where organizations of every size use intelligent, connected systems to adapt, compete and grow.",
  },
  {
    icon: FaLayerGroup,
    title: "Our Portfolio",
    subtitle: "Three core capability pillars",
    text: "Automation (workflows & software robots), Data & Business Intelligence (dashboards & reconciliation), and Digital Experiences (websites & AI assistants).",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-slate-50 overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 opacity-[0.14]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #1e63e9 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14 about-content">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
              Who We Are
            </span>
            <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight">
            Technology that fits the{" "}
            <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">
              way you work
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            We help businesses simplify operations, strengthen their digital presence
            and grow through intelligent automation and practical AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10 sm:mb-14">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="about-content group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-blue-500/20">
                <item.icon className="text-white text-lg" aria-hidden />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a] mb-1">{item.title}</h3>
              {item.subtitle && (
                <div className="text-xs font-semibold text-[#1e63e9] uppercase tracking-wide mb-2.5">
                  {item.subtitle}
                </div>
              )}
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="about-content flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <Link
            href="/#solutions"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
          >
            <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10">See Example Solutions</span>
          </Link>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-[#0b1f3a] border-2 border-slate-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#1e63e9] hover:text-[#1e63e9] hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-sm sm:text-base cursor-pointer"
          >
            <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[50%] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
            <span className="relative z-10">Talk to Our Team</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
