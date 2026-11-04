// modified- responsive clean minimal classy contact section
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Clock,
  Calendar,
  Check,
  Copy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const SERVICES = [
  "Workflow Automation",
  "Robotic Process Automation",
  "Data & BI Dashboards",
  "Reconciliation & Validation",
  "AI Assistants & Document AI",
  "Websites & E-Commerce",
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid work email is required" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Please enter at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState<string>("Automation")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText("hello@intevoris.ai")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("submitting")
    setServerMessage(null)

    const payload = {
      ...data,
      service: selectedService,
      subject: `New Enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      if (endpoint && endpoint.trim().length > 0) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        const json = await response.json().catch(() => ({}))
        if (response.ok) {
          setSubmitStatus("success")
          setServerMessage("Thank you! Your message has been sent. We'll be in touch within 24 hours.")
          reset()
        } else {
          const errMsg =
            (Array.isArray(json.errors) && json.errors[0]?.message) ||
            "Unable to send message. Please email hello@intevoris.ai."
          setSubmitStatus("error")
          setServerMessage(errMsg)
        }
      } else {
        await new Promise((res) => setTimeout(res, 800))
        setSubmitStatus("success")
        setServerMessage("Thank you! Your message has been received. We'll get back to you shortly.")
        reset()
      }
    } catch {
      setSubmitStatus("error")
      setServerMessage("Network error. Please try again or email hello@intevoris.ai directly.")
    }
  }

  return (
    <section
      id="contact"
      className="relative pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, #1e63e9 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Clean & Minimal */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#1e63e9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </span>
            <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1f3a] tracking-tight"
          >
            Let&apos;s start a{" "}
            <span className="bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#037899] bg-clip-text text-transparent">
              conversation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-2.5 sm:mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2"
          >
            A practical conversation starts with one business challenge. Reach out and our team will get back to you within 24 hours.
          </motion.p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#0b1f3a] text-white p-5 sm:p-7 md:p-9 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-7">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Get In Touch
                </p>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Intevoris AI Solutions
                </h3>
              </div>

              {/* Contact details */}
              <div className="space-y-3 sm:space-y-3.5">
                {/* Email with copy */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 sm:p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-blue-400/30 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center text-white shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Email us</p>
                      <a
                        href="mailto:hello@intevoris.ai"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        hello@intevoris.ai
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="ml-auto px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer text-xs flex items-center gap-1.5 shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Turnaround */}
                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/[0.06] border border-white/10">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center text-white shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">Response time</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">Within 24 hours</p>
                  </div>
                </div>

                {/* Consultation */}
                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/[0.06] border border-white/10">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center text-white shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">Consultation</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">Free 30-min discovery call</p>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="pt-1 sm:pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for new projects</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl p-5 sm:p-7 md:p-9 relative"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b1f3a]">Message Received</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    {serverMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#0b1f3a] text-white hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Service selector chips */}
                  <div>
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      I&apos;m interested in
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const isSelected = selectedService === s
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSelectedService(s)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#0b1f3a] text-white shadow-sm"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60"
                            }`}
                          >
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register("name")}
                        placeholder="Your name"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#0b1f3a] placeholder:text-slate-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1e63e9]"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#0b1f3a] placeholder:text-slate-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1e63e9]"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      {...register("company")}
                      placeholder="Company name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 bg-white transition-all focus:outline-none focus:border-[#1e63e9] focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      placeholder="Tell us about your project or what you want to achieve..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#0b1f3a] placeholder:text-slate-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                        errors.message ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-[#1e63e9]"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {submitStatus === "error" && serverMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {serverMessage}
                    </div>
                  )}

                  {/* Luxury Crystal Shine Submit Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }}>
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="group relative w-full py-4 px-8 rounded-full font-semibold text-white bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-[0_12px_32px_rgba(30,99,233,0.45)] border border-white/25 overflow-hidden disabled:opacity-60 text-sm sm:text-base tracking-wide"
                    >
                      {/* Top rim crystal edge reflection */}
                      <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

                      {/* Bottom rim soft reflection */}
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

                      {/* Primary Crystal Shine Sweep on Hover */}
                      <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />

                      {/* Secondary soft trailing shimmer */}
                      <span className="absolute -top-[50%] -bottom-[50%] -left-[120%] w-[35%] bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent -skew-x-[25deg] transition-all duration-1000 delay-75 ease-out group-hover:left-[170%] pointer-events-none" />

                      {/* Button Label & Icon */}
                      <span className="relative z-10 flex items-center justify-center gap-2.5 font-medium">
                        {submitStatus === "submitting" ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Message…</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
