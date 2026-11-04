"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaStar, FaArrowRight } from "react-icons/fa"
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
      <div className="absolute inset-0 opacity-[0.045]" aria-hidden>
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

          {/* CTAs — WeWise style, brand blue/cyan colors */}
          <div className="hero-reveal flex flex-wrap justify-center gap-4 mb-8">
            <Button
              asChild
              className="h-12 rounded-full bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] border-0 text-white font-medium tracking-wider px-8 py-6 text-base hover:opacity-90 transition-all duration-300 cursor-pointer group shadow-lg shadow-blue-500/25"
            >
              <Link href="/#contact">
                Start an Enquiry
                <FaArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-full border-2 border-[#1e63e9] bg-transparent text-[#1e63e9] font-medium px-8 py-6 text-base hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            >
              <Link href="/#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

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
