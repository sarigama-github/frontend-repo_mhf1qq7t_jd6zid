import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const socials = [
  { icon: Github, href: 'https://github.com/RakeshVemula9', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rakesh-vemula-698b6523a', label: 'LinkedIn' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -80])
  const y2 = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f17] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f17]/40 to-[#0b0f17]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pt-24 md:flex-row md:gap-16 md:pt-28">
        <motion.div style={{ y: y1 }} className="relative w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for internships & freelance
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              <span className="typing inline-block whitespace-nowrap pr-2">Full-Stack Developer & AI Engineer</span>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/80 md:text-xl">
            Building intelligent systems with modern web technologies
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" /> Warangal, Telangana, India
            </div>
            <a href="mailto:rakeshvemula15@gmail.com" className="group flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-fuchsia-300 group-hover:animate-ping" /> rakeshvemula15@gmail.com
            </a>
            <a href="tel:+916302532856" className="group flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-emerald-300" /> +91 6302532856
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-5 py-3 text-cyan-100 transition hover:scale-[1.02] hover:from-cyan-500/30 hover:to-blue-500/30">
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/20 blur-lg transition-opacity group-hover:opacity-100" />
            </a>
            <a href="mailto:rakeshvemula15@gmail.com?subject=Resume%20Request%20-%20Rakesh%20Vemula" className="group relative inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/30 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 px-5 py-3 text-fuchsia-100 transition hover:scale-[1.02] hover:from-fuchsia-500/30 hover:to-purple-500/30">
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 -z-10 rounded-xl bg-fuchsia-500/20 blur-lg transition-opacity group-hover:opacity-100" />
            </a>
            <div className="ml-2 flex items-center gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur transition hover:scale-110 hover:border-white/20">
                  <s.icon className="h-5 w-5 text-white/80 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="relative w-full md:w-1/2">
          <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-fuchsia-500/10 via-cyan-500/10 to-transparent blur-3xl" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* Spline already full-screen background; keep this container for visual frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0f17]/60" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle animated particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-white/40 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
