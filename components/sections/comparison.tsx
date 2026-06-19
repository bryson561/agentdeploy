"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const without = [
  "Leads go to voicemail after hours",
  "Missed calls = jobs lost to competitors",
  "Hours spent answering the same questions",
  "No record of who reached out and when",
  "Response time measured in hours or days",
];

const withAgent = [
  "Every inquiry answered instantly, 24/7",
  "Leads captured before they call the next guy",
  "FAQs handled automatically, zero effort",
  "Every lead logged with name, phone & job",
  "Response time measured in seconds",
];

export function ComparisonSection() {
  return (
    <section className="relative bg-[#030303] py-28 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
            The Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            The difference one agent makes.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Same website, same traffic. The only thing that changes is whether
            someone answers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <h3 className="text-white/60 font-semibold text-lg mb-6">
              Without AgentDeploy
            </h3>
            <ul className="space-y-4">
              {without.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/45"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center">
                    <X className="w-3 h-3 text-white/30" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-emerald-600/[0.08] border border-emerald-500/20 shadow-lg shadow-emerald-500/5"
          >
            <h3 className="text-white font-semibold text-lg mb-6">
              With AgentDeploy
            </h3>
            <ul className="space-y-4">
              {withAgent.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
