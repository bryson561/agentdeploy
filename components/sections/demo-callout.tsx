"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDownRight } from "lucide-react";

export function DemoCalloutSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20">
      {/* glow anchored toward the chat bubble (bottom-right) */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[520px] rounded-full bg-emerald-600/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-emerald-500/20 bg-emerald-600/[0.05] p-8 text-center sm:p-10"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            Live Demo
          </span>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Talk to a real AI agent right now.
          </h2>

          <p className="mx-auto mb-7 max-w-2xl text-lg leading-relaxed text-white/55">
            See the chat bubble in the{" "}
            <span className="font-medium text-white/80">bottom-right corner</span>?
            That&apos;s a live AI agent we built for{" "}
            <span className="font-medium text-white/80">
              Summit Heating &amp; Cooling
            </span>{" "}
            — a sample HVAC company we made up for this demo. Ask it about emergency
            service, pricing, or booking an appointment. It answers and books leads
            exactly like the agent we&apos;d build for{" "}
            <span className="font-medium text-white/80">your</span> business.
          </p>

          <div className="inline-flex items-center gap-2 font-medium text-emerald-400">
            <span>Try it now — tap the chat bubble, bottom-right</span>
            <ArrowDownRight className="h-5 w-5 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
