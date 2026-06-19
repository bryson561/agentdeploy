"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Zap } from "lucide-react";

const points = [
  {
    icon: Clock,
    stat: "78%",
    label: "of customers hire the first business that responds",
  },
  {
    icon: Zap,
    stat: "5 min",
    label: "is all it takes for a lead to go cold and move on",
  },
  {
    icon: TrendingUp,
    stat: "24/7",
    label: "is the new baseline — your competitors already offer it",
  },
];

export function AIUrgencySection() {
  return (
    <section className="relative bg-[#050508] py-28 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
            The Shift
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your competitors aren't waiting.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-16">
            The businesses winning the most jobs aren't the cheapest or the
            biggest — they're the ones that answer first. AI made that the new
            standard, and customers already expect it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left"
              >
                <span className="inline-flex w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </span>
                <div className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {p.stat}
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{p.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
