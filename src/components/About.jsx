import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Cpu, Sparkles } from 'lucide-react'

const skills = [
  { name: 'C++', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'SQL', level: 75 },
  { name: 'React.js', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 78 },
  { name: 'Flask', level: 70 },
  { name: 'REST APIs', level: 85 },
  { name: 'WebSockets', level: 65 },
  { name: 'LLM Integration', level: 75 },
  { name: 'Scikit-learn', level: 70 },
  { name: 'Pandas', level: 80 },
  { name: 'NumPy', level: 80 },
  { name: 'Android', level: 65 },
  { name: 'OpenCV', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'MongoDB', level: 75 },
]

export default function About() {
  return (
    <section id="about" className="relative bg-[#070b12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-fuchsia-300" />
          <h2 className="text-3xl font-bold">About Rakesh</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-3 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                <Cpu className="h-4 w-4" /> Builder mindset with focus on backend performance and AI integration
              </div>
              <p className="text-white/80 leading-relaxed">
                Currently pursuing B.Tech in Computer Science at IIIT Nagpur (Nov 2022 - June 2026). I love crafting performant backends, integrating AI systems, and building polished user experiences. I'm obsessed with clean architecture, observability, and delivering features fast without compromising quality.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-fuchsia-200">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-lg font-semibold">Indian Institute of Information Technology, Nagpur</div>
                  <div className="text-white/70">B.Tech, Computer Science and Engineering</div>
                  <div className="mt-1 text-sm text-white/60">Nov 2022 - June 2026</div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
              <div className="grid grid-cols-1 gap-3">
                {skills.map((s, i) => (
                  <div key={i} className="group">
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-white/80">{s.name}</span>
                      <span className="text-white/60">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.03 }}
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 shadow-[0_0_12px_#22d3ee]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Floating Tech</h3>
              <div className="relative h-40">
                {skills.slice(0, 10).map((s, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
                    animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                    transition={{ duration: 3 + (i % 5), repeat: Infinity }}
                    style={{ top: `${(i % 5) * 18}%`, left: `${(i * 9) % 80}%` }}
                  >
                    {s.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
