// modified- footer with intevoris@gmail.com and WhatsApp link
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/", label: "X / Twitter" },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923212589668?text=Hello%20Intevoris%20AI!%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20an%20AI%20automation%20project%20for%20my%20business.",
      label: "WhatsApp",
    },
    { icon: FaEnvelope, href: "mailto:intevoris@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    "Workflow Automation",
    "Robotic Process Automation",
    "Data & Business Intelligence",
    "Reconciliation & Data Validation",
    "AI Assistants & Document AI",
    "Websites & E-Commerce",
  ];

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Ticker */}
      <div className="relative py-2.5 sm:py-3 overflow-hidden logo-gradient-ribbon border-y border-white/20 shadow-md shadow-blue-950/15 text-white">
        {/* Subtle glass reflections */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300/35 to-transparent pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap relative z-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center space-x-8 px-4 text-xs sm:text-sm tracking-wider uppercase font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" aria-hidden={i === 1}>
              <span>Simplify Work. Amplify Growth.</span>
              <FaStar className="w-3 h-3 text-cyan-200 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
              <span>Intelligence · Integration · Impact</span>
              <FaStar className="w-3 h-3 text-cyan-200 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
              <span>Practical AI for Real Workflows</span>
              <FaStar className="w-3 h-3 text-cyan-200 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
              <span>Let's Build Together</span>
              <FaStar className="w-3 h-3 text-cyan-200 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Image
              src="/new-Logo.png"
              alt="Intevoris AI Solutions"
              width={240}
              height={100}
              className="h-16 sm:h-20 w-auto object-contain mb-5"
            />
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Practical AI solutions that simplify work, integrate with your stack and
              create lasting impact for your teams.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#1e63e9] hover:border-blue-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="text-base font-bold text-[#0b1f3a] mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#1e63e9] transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1e63e9] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <h3 className="text-base font-bold text-[#0b1f3a] mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-600 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full mr-3 opacity-70" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base font-bold text-[#0b1f3a] mb-5">Get in Touch</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center space-x-3 text-slate-600">
                <FaEnvelope className="w-4 h-4 text-[#1e63e9] shrink-0" />
                <a href="mailto:intevoris@gmail.com" className="hover:text-[#1e63e9] transition-colors truncate">
                  intevoris@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/923212589668?text=Hello%20Intevoris%20AI!%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20an%20AI%20automation%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1e63e9] transition-colors"
                >
                  +92 321 2589668
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <FaMapMarkerAlt className="w-4 h-4 text-[#06b6d4] shrink-0" />
                <span>Remote-first · Global delivery</span>
              </div>
            </div>
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center mt-6 bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-[0_8px_24px_rgba(30,99,233,0.4)] hover:scale-[1.03] active:scale-[0.97] border border-white/20 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
              <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
              <span className="relative z-10">Send Enquiry</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="border-t border-slate-200 mt-10 sm:mt-12 pt-6 sm:pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left"
        >
          <p className="text-slate-500 text-xs sm:text-sm" suppressHydrationWarning>
            © {currentYear} Intevoris AI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-5 sm:space-x-6">
            <span className="text-slate-400 text-xs sm:text-sm">Privacy Policy</span>
            <span className="text-slate-400 text-xs sm:text-sm">Terms of Service</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
