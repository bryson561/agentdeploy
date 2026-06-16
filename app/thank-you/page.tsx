"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Bot, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const INTAKE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScrpOAcGcLZHJXTytiDJnc5U7OHwRusJzLUgeT0qSCYV7Dl7g/viewform";

const nextSteps = [
  {
    icon: ClipboardList,
    title: "Fill out the intake form",
    body: "Tell us about your business — services, hours, service area, FAQs, and how you want leads handled. Takes about 10 minutes.",
    highlight: true,
  },
  {
    icon: Bot,
    title: "We train your agent",
    body: "Our team builds and trains your custom AI agent using everything you provide. No technical work required from you.",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Your agent goes live",
    body: "We install the chat widget on your website within 48–72 hours. You start getting leads immediately.",
    highlight: false,
  },
];

export default function ThankYouPage() {
  return (
    <main className="bg-[#030303]">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            You&apos;re in!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-lg mb-10 leading-relaxed"
          >
            Your payment was successful. There&apos;s just one step left — fill out the
            intake form so we can start building your AI agent.
          </motion.p>

          <motion.a
            href={INTAKE_FORM}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 text-base"
          >
            Fill Out the Intake Form
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/30 text-sm mt-4"
          >
            Takes about 10 minutes. We&apos;ll start building as soon as we receive it.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            What happens next
          </h2>

          <div className="space-y-4">
            {nextSteps.map((step, i) => (
              <div
                key={step.title}
                className={`flex gap-5 p-6 rounded-xl border transition-all ${
                  step.highlight
                    ? "bg-indigo-600/10 border-indigo-500/30"
                    : "bg-white/[0.02] border-white/[0.06]"
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.highlight
                        ? "bg-indigo-500/20 border border-indigo-500/30"
                        : "bg-white/[0.04] border border-white/[0.08]"
                    }`}
                  >
                    <step.icon
                      className={`w-5 h-5 ${
                        step.highlight ? "text-indigo-400" : "text-white/40"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-indigo-500/50 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                    {step.highlight && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
                        Your turn
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <p className="text-white/50 text-sm leading-relaxed">
              Questions? Email us at{" "}
              <a
                href="mailto:officeagentdeploy@gmail.com"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                officeagentdeploy@gmail.com
              </a>{" "}
              — we typically respond within a few hours.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              ← Back to homepage
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
