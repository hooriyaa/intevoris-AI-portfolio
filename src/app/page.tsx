import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects"
import ToolsSection from "@/components/tools-section"
import ContactSection from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </main>
  )
}
