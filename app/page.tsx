'use client'
import { ExpandingButton } from "@/components/ui/expanding-button";
import { HomeIcon, Images, Mail, UserRound } from "lucide-react";

import HomeSection from "@/components/sections/home-section";
import AboutSection from "@/components/sections/about-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}


export default function Home() {
  return (
    <main className="relative overflow-x-hidden flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory">
    
      {/* Floating buttons (independent of layout) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <div className="flex flex-col gap-2">
          <ExpandingButton label="Home"      icon={HomeIcon}  onClick={() => scrollTo("home")} />
          <ExpandingButton label="About Me"  icon={UserRound} onClick={() => scrollTo("about-me")} />
          <ExpandingButton label="Portfolio" icon={Images}    onClick={() => scrollTo("portfolio")} />
          <ExpandingButton label="Contact"   icon={Mail}      onClick={() => scrollTo("contact")} />
        </div>
      </div>
    
      {/* SECTION 1 - Home */}
      <HomeSection />
    
      {/* SECTION 2 - About Me */}
      <AboutSection/>
    
      {/* SECTION 3 - Portfolio */}
      <PortfolioSection/>
      
      {/* SECTION 4 - Contact */}
      <ContactSection/>
    </main>

  )
}
