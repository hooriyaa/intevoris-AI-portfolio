"use client"
import { useRef, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaEnvelope, FaComments, FaClock } from "react-icons/fa"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contactHighlights = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@intevoris.ai",
    href: "mailto:hello@intevoris.ai",
  },
  {
    icon: FaComments,
    label: "Consultation",
    value: "Free 30-minute discovery call",
    href: null,
  },
  {
    icon: FaClock,
    label: "Response time",
    value: "Within 1 business day",
    href: null,
  },
]

const floatingTags = [
  { text: "AI Strategy", x: 12, y: 58, rotation: -10, primary: true },
  { text: "Automation", x: 78, y: 52, rotation: 8, primary: false },
  { text: "Integrations", x: 8, y: 84, rotation: 12, primary: false },
  { text: "AI Agents", x: 82, y: 80, rotation: -8, primary: true },
  { text: "Analytics", x: 24, y: 72, rotation: 10, primary: false },
  { text: "Governance", x: 70, y: 68, rotation: -12, primary: true },
]

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    company: z.string().optional(),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  })
  type FormData = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  useEffect(() => {
    if (typeof window === "undefined") return
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )
      gsap.fromTo(
        ".form-field",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("idle")
    setServerMessage(null)
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      if (!endpoint) {
        setSubmitStatus("error")
        setServerMessage(
          "Form endpoint is not configured yet. Please email hello@intevoris.ai.",
        )
        return
      }
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const json = await response.json().catch(() => ({}))
      if (response.ok) {
        setSubmitStatus("success")
        setServerMessage("Thank you! Your enquiry has been received — we'll reply within 1 business day.")
        reset()
      } else {
        const errMsg =
          (Array.isArray(json.errors) && json.errors[0]?.message) ||
          "Something went wrong. Please try again."
        setSubmitStatus("error")
        setServerMessage(errMsg)
      }
    } catch {
      setSubmitStatus("error")
      setServerMessage("Submission failed, please try again later.")
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#0b1f3a] transition-all duration-200 focus:outline-none focus:border-[#1e63e9] focus:ring-2 focus:ring-blue-500/20"

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 overflow-hidden bg-slate-50"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, #1e63e9 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Contact
            </span>
            <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight">
            Let's <span className="bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] bg-clip-text text-transparent">simplify your work</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Tell us about your workflows, tools and goals. We'll come back with a clear
            view of where AI can help — and where it shouldn't.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact highlights */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="text-2xl font-bold text-[#0b1f3a] mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactHighlights.map((item) => {
                  const inner = (
                    <motion.div
                      className="contact-card flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <item.icon className="text-white text-lg" aria-hidden />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0b1f3a]">{item.label}</p>
                        <p className="text-slate-600 text-sm">{item.value}</p>
                      </div>
                    </motion.div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  )
                })}
              </div>
            </motion.div>

            {/* Decorative tags area */}
            <div className="relative min-h-[220px] rounded-2xl bg-gradient-to-br from-[#0b1f3a] to-[#16345c] p-8 overflow-hidden">
              <div className="relative z-10 max-w-xs">
                <p className="text-white text-xl font-bold leading-snug">
                  Ready to remove the busywork?
                </p>
                <p className="text-blue-200 text-sm mt-3 leading-relaxed">
                  Share a process that drains your team — we'll sketch a practical
                  approach together.
                </p>
              </div>
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {floatingTags.map((tag, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`absolute px-4 py-2 rounded-full text-xs font-semibold shadow-lg ${
                      tag.primary
                        ? "bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] text-white"
                        : "bg-white/95 text-[#0b1f3a] border border-white"
                    }`}
                    style={{
                      left: `${tag.x}%`,
                      top: `${tag.y}%`,
                      transform: `rotate(${tag.rotation}deg)`,
                    }}
                  >
                    {tag.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <motion.div
            className="contact-form bg-white rounded-2xl border border-slate-200 shadow-xl shadow-blue-500/5 p-6 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-xl font-bold text-[#0b1f3a] mb-1">Enquiry form</h3>
            <p className="text-slate-500 text-sm mb-6">All fields marked * are required.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-field">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#0b1f3a]">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className={inputClass}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#0b1f3a]">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className={inputClass}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="company" className="block text-sm font-semibold mb-2 text-[#0b1f3a]">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  {...register("company")}
                  className={inputClass}
                  placeholder="Organisation (optional)"
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-[#0b1f3a]">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={inputClass}
                  placeholder="e.g. Automation for support workflows"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p role="alert" className="mt-1 text-sm text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#0b1f3a]">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the problem, tools involved and what success looks like…"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-lg font-semibold text-white bg-gradient-to-r from-[#1e63e9] to-[#06b6d4] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer hover:opacity-95 disabled:opacity-60 shadow-lg shadow-blue-500/20"
                >
                  {isSubmitting ? "Sending…" : "Send Enquiry"}
                </button>
              </motion.div>

              {submitStatus === "success" && serverMessage && (
                <p role="status" className="text-green-700 text-sm">
                  {serverMessage}
                </p>
              )}
              {submitStatus === "error" && serverMessage && (
                <p role="alert" className="text-red-600 text-sm">
                  {serverMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
