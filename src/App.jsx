import { Hero } from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "./sections/Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
       <Hero />
       <About/>
       <Projects/>
       <Experience/>
       <Testimonials/>
       <Contact/>

      </main>
      <Footer/>
      <Analytics />
    </div>
  )
}

export default App
