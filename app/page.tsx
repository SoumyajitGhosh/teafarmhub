import Header from "@/components/header"
import Hero from "@/components/hero"
import Impact from "@/components/impact"
import About from "@/components/about"
import TreeVarieties from "@/components/tree-varieties"
import TreeShowcase from "@/components/tree-showcase"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Blog from "@/components/blog"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Impact />
      <About />
      <TreeVarieties />
      <TreeShowcase />
      <Testimonials />
      <Team />
      <Blog />
      <CallToAction />
      <Footer />
    </main>
  )
}
