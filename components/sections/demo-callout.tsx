"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDownRight, Phone } from "lucide-react";

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
            Talk to a real AI agent right now — call it or chat it.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/55">
            Everything below is live — built for{" "}
            <span className="font-medium text-white/80">
              Summit Heating &amp; Cooling
            </span>
            , a sample HVAC company we made up for this demo. Ask about emergency
            service, pricing, or booking an appointment — it answers and books leads
            exactly like the agent we&apos;d build for{" "}
            <span className="font-medium text-white/80">your</span> business.
          </p>

          {/* Primary CTA — call the AI phone agent */}
          <a
            href="tel:+15612207136"
            className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            <Phone className="h-5 w-5" />
            Call the AI phone agent — (561) 220-7136
          </a>
          <p className="mt-3 text-sm text-white/45">
            📞 A live demo line for a sample HVAC company — call it and hear the AI
            answer, take your info, and book a job in real time.
          </p>

          {/* Secondary — chat */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
            <span>Prefer to type? Tap the chat bubble, bottom-right</span>
            <ArrowDownRight className="h-4 w-4 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
