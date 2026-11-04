"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  FaRobot,
  FaProjectDiagram,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: FaBrain,
    title: "AI Strategy & Consulting",
    description:
      "Identify high-value use cases, assess data readiness, and define a realistic roadmap with clear success criteria before any build begins.",
  },
  {
    icon: FaCogs,
    title: "Intelligent Automation",
    description:
      "Automate repetitive processes — approvals, data entry, reporting — with governed AI workflows that save hours every week.",
  },
  {
    icon: FaRobot,
    title: "AI Agents & Assistants",
    description:
      "Domain-aware assistants for support, operations and internal knowledge that answer, triage and act within approved guardrails.",
  },
  {
    icon: FaProjectDiagram,
    title: "Systems Integration",
    description:
      "Connect AI to the tools you already run — CRM, ERP, helpdesk, data warehouses — so insights land where work happens.",
  },
  {
    icon: FaChartLine,
    title: "Data & Analytics",
    description:
      "Turn scattered data into dashboards and decision support that surface trends, risks and opportunities in real time.",
  },
  {
    icon: FaShieldAlt,
    title: "Governance & Support",
    description:
      "Monitoring, evaluation, access control and ongoing tuning so solutions stay reliable, compliant and improving after launch.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: ".services-title",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-16 right-10 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-24 left-12 w-4 h-4 bg-cyan-400/25 rounded-full animate-bounce" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="services-title">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center gap-3 mb-4"
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
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight"
            >
              Our <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-slate-600 max-w-2xl mx-auto"
            >
              End-to-end capability — from first use-case workshop to production AI that
              your team can trust and operate.
            </motion.p>
          </div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#1e63e9] to-[#06b6d4] rounded-r-full" />

              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#1e63e9] group-hover:to-[#06b6d4] transition-all duration-300">
                <service.icon className="text-xl text-[#1e63e9] group-hover:text-white transition-colors duration-300" aria-hidden />
              </div>

              <h3 className="text-lg font-bold text-[#0b1f3a] mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] text-white px-8 py-4 rounded-full font-semibold hover:opacity-95 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Discuss Your Use Case
          </Link>
        </div>
      </div>
    </section>
  );
}
