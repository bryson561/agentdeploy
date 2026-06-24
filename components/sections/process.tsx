"use client";

import { motion } from "framer-motion";
import { ClipboardList, Bot, Rocket, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Subscribe & Fill the Intake Form",
    body: "Choose your plan and pay the one-time $149 setup fee through Stripe. We send you a short form covering your services, hours, service area, FAQs, and how you want leads handled.",
  },
  {
    number: "02",
    icon: Bot,
    title: "We Train Your Agent",
    body: "Our team trains your custom AI agent on your specific business. It learns your services, pricing ranges, common questions, and the language your industry uses.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Agent Goes Live on Your Website",
    body: "We install the chat widget directly on your site within 48–72 hours. Zero technical work required from you — we handle the full installation.",
  },
  {
    number: "04",
    icon: Bell,
    title: "Leads Hit Your Phone & Email",
    body: "Every captured lead reaches you in real time — by email and an instant push notification on your phone. No dashboard to log into; you'll know the second someone's interested. And you can reply to any conversation yourself, right from your phone.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "We Keep It Optimized",
    body: "As your business changes, we update your agent. Pro plan clients get monthly performance reports and agent tuning based on real conversation data.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#030303] py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Up and running
            <br />
            in 48–72 hours.
          </h2>
          <p className="text-white/50 text-lg">
            Zero technical work required on your end.
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-7 group"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/[0.06]" />
              )}

              <div className="flex-shrink-0 z-10">
                <div className="w-10 h-10 rounded-full bg-[#0c0c14] border border-white/[0.1] group-hover:border-emerald-500/40 transition-colors flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="pb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-emerald-500/50 tracking-widest">
                    {step.number}
                  </span>
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
