"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { FaLightbulb, FaEye, FaHeart } from "react-icons/fa"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const pillars = [
  {
    icon: FaLightbulb,
    title: "Mission",
    text: "Deliver practical AI that simplifies everyday work, integrates cleanly with existing systems, and creates measurable impact for the teams that use it.",
  },
  {
    icon: FaEye,
    title: "Vision",
    text: "A future where every organisation runs on intelligent workflows — people focused on strategy and creativity while AI handles the repetitive load.",
  },
  {
    icon: FaHeart,
    title: "Values",
    text: "Clarity over hype, secure by design, and partnerships built on transparency — we only ship solutions we would run ourselves.",
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
      className="relative py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-slate-50 overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #1e63e9 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 about-content">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
              About Us
            </span>
            <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight">
            Built for teams ready to{" "}
            <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">
              work smarter
            </span>
          </h2>
          <p className="mt-5 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Intevoris AI Solutions partners with organisations to design, integrate and
            operate AI systems that fit real workflows — not demos that look good in a
            slide deck. From first discovery workshop to production support, we stay
            accountable for outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="about-content group bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                <item.icon className="text-white text-lg" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="about-content flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#solutions"
            className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] text-white px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            See Example Solutions
          </Link>
          <Link
            href="/#contact"
            className="border border-slate-300 text-[#0b1f3a] px-8 py-4 rounded-full font-semibold hover:bg-white hover:border-blue-300 transition-all duration-300"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
