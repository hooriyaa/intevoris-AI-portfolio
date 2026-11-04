// modified- header with crystal shine get in touch button
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
              <Link href="/" onClick={closeMobileMenu} aria-label="Intevoris AI home">
                <Image
                  src="/logo.png"
                  alt="Intevoris AI Solutions"
                  height={72}
                  width={160}
                  className="object-contain h-10 sm:h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.25 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#1e63e9] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1e63e9] after:to-[#06b6d4] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                className="hidden sm:block"
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] text-white font-semibold px-5 sm:px-6 py-2 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-[0_8px_24px_rgba(30,99,233,0.4)] hover:scale-[1.03] active:scale-[0.97] border border-white/25 overflow-hidden text-sm cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
                  <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
                  <span className="relative z-10">Get in Touch</span>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#0b1f3a]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#0b1f3a]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
              style={{ backgroundColor: "rgba(11,31,58,0.4)" }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden border-l border-slate-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Image
                    src="/logo.png"
                    alt="Intevoris AI Solutions"
                    height={48}
                    width={120}
                    className="object-contain h-10 w-auto"
                  />
                  <button
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-[#0b1f3a]" />
                  </button>
                </div>

                <nav className="flex-1 px-6 py-8 overflow-y-auto" aria-label="Mobile">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-lg font-medium text-[#0b1f3a] hover:text-[#1e63e9] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-slate-50 border-l-2 border-transparent hover:border-[#1e63e9]"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-slate-200">
                  <Link
                    href="/#contact"
                    onClick={closeMobileMenu}
                    className="group relative flex w-full items-center justify-center bg-gradient-to-r from-[#0f46b8] via-[#1e63e9] to-[#06b6d4] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(30,99,233,0.4)] border border-white/25 overflow-hidden text-sm"
                  >
                    <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
                    <span className="absolute -top-[50%] -bottom-[50%] -left-[100%] w-[60%] bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-[25deg] transition-all duration-700 ease-out group-hover:left-[170%] pointer-events-none" />
                    <span className="relative z-10">Get in Touch</span>
                  </Link>
                  <p className="mt-4 text-center text-slate-500 text-sm">
                    Simplify Work. Amplify Growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
