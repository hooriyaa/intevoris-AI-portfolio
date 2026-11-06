// modified- home page with terminal showcase section before footer
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects"
import ToolsSection from "@/components/tools-section"
import ApproachSection from "@/components/approach-section"
import ContactSection from "@/components/contact"
import TerminalSection from "@/components/terminal-section"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ToolsSection />
      <ApproachSection />
      <ContactSection />
      <TerminalSection />
    </main>
  )
}
