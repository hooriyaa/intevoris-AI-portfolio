// modified- floating whatsapp button component fixed to viewport
"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.45, ease: "easeOut" }}
      className="fixed right-5 sm:right-8 bottom-8 sm:bottom-10 z-50 pointer-events-auto"
      aria-label="WhatsApp quick chat"
    >
      <a
        href="https://wa.me/?text=Hi%20Intevoris%20AI,%20I'd%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/40 hover:shadow-[0_14px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/40 overflow-hidden"
        title="Chat on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Top crystal edge reflection */}
        <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        {/* Crystal shine sweep */}
        <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />

        {/* Online green indicator on top right */}
        <span className="absolute top-2 right-2 flex h-2.5 w-2.5 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-sm" />
        </span>

        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
      </a>
    </motion.aside>
  )
}
