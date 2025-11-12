import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#070b12] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(236,72,153,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Let's build something amazing together</h3>
            <p className="mt-2 text-white/70">Available for collaborations, internships, and freelance projects.</p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold">Contact</h4>
            <a href="mailto:rakeshvemula15@gmail.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" /> rakeshvemula15@gmail.com
            </a>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold">Social</h4>
            <div className="flex items-center gap-3">
              <a href="https://github.com/RakeshVemula9" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rakesh-vemula-698b6523a" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2025 Rakesh Vemula
        </div>
      </div>
    </footer>
  )
}
