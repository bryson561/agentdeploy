"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$5,000+", label: "Per Missed Call", sub: "average job value lost" },
  { value: "78%", label: "Hire First Responder", sub: "customers choose speed" },
  { value: "24/7", label: "AI Coverage", sub: "zero staff required" },
  { value: "48–72hrs", label: "Go Live", sub: "from signup to active" },
];

export function StatsSection() {
  return (
    <section className="bg-[#030303] border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/[0.02] via-transparent to-teal-600/[0.02] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/70">{stat.label}</div>
              <div className="text-xs text-white/35 mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
