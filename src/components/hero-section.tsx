// modified- hero section grid background contrast enhanced
"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaStar, FaArrowRight, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { Button } from "./ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const marqueeItems = [
  "Intelligence",
  "Integration",
  "Impact",
  "AI Automation",
  "Smart Workflows",
  "Growth Systems",
]

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
          delay: 0.12,
        },
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden pt-28 pb-0 md:pt-32 bg-gradient-to-b from-white via-slate-50 to-white min-h-[80vh] flex flex-col justify-center"
    >
      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.14]" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#1e63e9 1px, transparent 1px), linear-gradient(90deg, #1e63e9 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
   

          {/* Headline — wewise style: bold + script gradient word */}
          <h1 className="hero-reveal text-[2.6rem] sm:text-5xl md:text-[4.25rem] lg:text-[5.25rem] font-bold text-[#0b1f3a] tracking-tight leading-[1.12] mb-6">
            Simplify Work.
            <br />
            Amplify{" "}
            <span
              className="inline-block bg-gradient-to-r from-[#1e63e9] via-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent leading-none"
              style={{
                fontFamily: "var(--font-arizonia), cursive",
                fontSize: "1.45em",
              }}
            >
              Growth.
            </span>
          </h1>

          {/* Sub copy */}
          <p className="hero-reveal text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Intevoris AI Solutions builds practical AI systems that remove busywork,
            connect your tools, and turn data into decisions — so your team can focus
            on what moves the business forward.
          </p>

          {/* CTAs — WeWise style with luxury crystal shine & smooth hover */}
          <div className="hero-reveal flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] hover:scale-[1.02] active:scale-[0.98] border border-white/25 overflow-hidden text-sm sm:text-base cursor-pointer"
            >
              {/* Top glass reflection */}
              <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
              {/* Bottom rim cyan reflection */}
              <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />
              {/* Crystal Shine Sweep */}
              <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Start an Enquiry</span>
                <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>

            <Link
              href="/#services"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-[#0b1f3a] border-2 border-slate-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#1e63e9] hover:text-[#1e63e9] hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-sm sm:text-base cursor-pointer"
            >
              <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[50%] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
              <span className="relative z-10">Our Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Quick Chat — Hero Bottom Right (Icon Only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute right-4 sm:right-8 bottom-16 sm:bottom-20 z-20"
      >
        <a
          href="https://wa.me/?text=Hi%20Intevoris%20AI,%20I'd%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/35 hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30 overflow-hidden"
          title="Chat on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Crystal shine sweep */}
          <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />

          {/* Online green indicator on top right */}
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-sm" />
          </span>

          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>
      </motion.div>

      {/* Marquee strip — right under hero content, minimal gap */}
      <div className="relative mt-6 md:mt-8 bg-gradient-to-r from-[#1e63e9] via-[#2b7fff] to-[#06b6d4] py-3 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex items-center space-x-8 whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-8 text-white font-semibold text-sm tracking-wide uppercase"
            >
              {marqueeItems.map((item) => (
                <span key={`${i}-${item}`} className="flex items-center space-x-8">
                  <span>{item}</span>
                  <FaStar className="text-xs opacity-80" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
