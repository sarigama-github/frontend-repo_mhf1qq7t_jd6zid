import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App
