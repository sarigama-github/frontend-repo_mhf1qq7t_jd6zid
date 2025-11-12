import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Real-Time Camera Image Processor',
    tags: ['Android', 'OpenCV', 'JNI', 'TypeScript', 'C++'],
    description:
      'Professional Android app with 5 real-time OpenCV filters, native C++ processing via JNI, and TypeScript web viewer with statistics dashboard',
    tech: 'CameraX API, OpenCV 4.8.0, Native C++, Express.js, Multer',
    highlights: '~2,500 lines of code | 80% completion in 2 days | Hardware-accelerated processing',
    link: 'https://github.com/RakeshVemula9/realtime-edge-detection-android',
    features: ['Grayscale', 'Edge Detection', 'Canny Algorithm', 'Real-time Processing'],
  },
  {
    title: 'Jarvis AI Voice Assistant',
    tags: ['Python', 'WebSockets', 'Groq API', 'Real-time AI'],
    description:
      'Modular AI assistant with speech-to-speech interaction, system automation, and LLM integration',
    features: ['Real-time Q&A', 'App automation', 'Speech synthesis', 'Asynchronous processing'],
  },
  {
    title: 'Smart Campaign Generator',
    tags: ['Streamlit', 'Mistral AI', 'OpenRouter API'],
    description:
      'AI-powered marketing text generator with customized tone and product focus',
    features: ['API optimization', 'Caching', 'Responsive UI'],
    live: '#',
  },
  {
    title: 'Customer Segmentation ML',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'K-Means', 'DBSCAN'],
    description:
      'ML clustering pipeline for customer behavior analysis with interactive visualizations',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#070b12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_-10%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(ellipse_at_20%_120%,rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group perspective"
            >
              <div className="relative h-full min-h-[320px] w-full rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur transition-all duration-300 [transform-style:preserve-3d] hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_60px_-20px_rgba(34,211,238,0.5)]">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="h-full rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    {(p.link || p.live) && (
                      <a href={p.link || p.live} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:scale-110 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>

                  {p.tech && (
                    <p className="mt-3 text-xs text-cyan-200/90">Tech: {p.tech}</p>
                  )}
                  {p.highlights && (
                    <p className="mt-1 text-xs text-fuchsia-200/90">Highlights: {p.highlights}</p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span key={j} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.features && (
                    <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/80">
                      {p.features.map((f, k) => (
                        <li key={k} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#34d399]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
