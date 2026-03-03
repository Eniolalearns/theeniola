import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedWork } from "@/components/featured-work"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
