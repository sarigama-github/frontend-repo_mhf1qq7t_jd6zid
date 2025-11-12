import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

const certs = [
  { title: 'Applications of AI for Anomaly Detection', org: 'NVIDIA Deep Learning Institute', date: 'Apr 2025' },
  { title: 'Problem Solving Intermediate', org: 'HackerRank', date: 'Oct 2025' },
  { title: 'AWS Academy Cloud Foundations', org: 'AWS Academy', date: '2025' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-[#0b0f17] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold">Certifications</h2>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-fuchsia-400 via-cyan-400 to-transparent" />
          <div className="space-y-6">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="absolute -left-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="text-white/70">{c.org}</div>
                <div className="text-sm text-white/60">{c.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
