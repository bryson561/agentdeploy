"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-[#030303] py-28 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-6 font-medium">
            Get Started Today
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stop losing jobs to
            <br />
            missed messages.
          </h2>
          <p className="text-white/50 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Your AI agent can be live on your website within 48–72 hours. The $149 setup fee is less than the value of a single job you're already missing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 text-base"
            >
              Get Your Agent Live
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="text-white/45 hover:text-white text-sm transition-colors"
            >
              View full pricing →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
