"use client";

import { motion } from "framer-motion";
import { PhoneOff, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "It's 9 PM. A homeowner's AC just broke.",
    body: "They found you on Google, visited your site, and had a question. No chat. No response. They clicked back and called the next company on the list.",
  },
  {
    icon: Clock,
    title: "You're on a job. Your phone rings — missed.",
    body: "You can't stop mid-service to answer. By the time you call back, they've already booked someone else. That was a $2,000 job gone.",
  },
  {
    icon: TrendingDown,
    title: "Your competitor responded in 2 minutes.",
    body: "They didn't hire a receptionist. They deployed an AI agent. Now they're booking twice the jobs with the same crew and zero extra overhead.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#030303] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-medium">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            You're losing jobs you
            <br />
            <span className="text-white/40">don't even know about.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every unanswered message after hours is revenue walking out the door — straight to a competitor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center p-8 rounded-2xl bg-white/[0.015] border border-white/[0.05]"
        >
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            78% of customers hire whoever responds first.
          </p>
          <p className="text-white/40 mt-3 text-base">
            Your website is silent after hours. It doesn't have to be.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
