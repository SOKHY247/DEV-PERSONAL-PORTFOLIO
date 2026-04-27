import { useState } from 'react'
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Navbar } from "@/layout/Navbar"
import { Blog } from "./sections/Blog"
import { Footer } from "./sections/Footer"
import { AIContenct } from "./PageContent/AIContenct"
import { MLCentenct } from "./PageContent/MLCentenct"
import { AIChangingCentenct } from "./PageContent/AIChangingCentenct"
import { DeepLearning } from "./PageContent/DeepLearning"

const pageMap = {
  'what-is-ai': AIContenct,
  'machine-learning': MLCentenct,
  'ai-in-web-dev': AIChangingCentenct,
  'deep-learning': DeepLearning,
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState(null)

  const PageComponent = selectedSlug ? pageMap[selectedSlug] : null

  if (PageComponent) {
    return (
      <PageComponent
        onBack={() => setSelectedSlug(null)}
        onNavigate={(slug) => setSelectedSlug(slug)}
      />
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Blog onReadMore={(slug) => setSelectedSlug(slug)} />
      </main>
      <Footer />
    </div>
  )
}

export default App
