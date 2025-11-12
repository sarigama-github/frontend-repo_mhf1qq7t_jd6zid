import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C++', 'Python', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Cpu,
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'AI / ML',
    icon: Cpu,
    items: ['LLM Integration (Groq, OpenRouter, ChatGPT)', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Mobile',
    icon: Code2,
    items: ['Android', 'OpenCV', 'JNI/NDK', 'CameraX'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux CLI', 'CMake'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'Firebase'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0b0f17] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold">Technical Skills</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-3 flex items-center gap-3">
                <cat.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-2 text-white/80">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
