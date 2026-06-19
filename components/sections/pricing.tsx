"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Everything you need to start capturing leads around the clock.",
    features: [
      "AI agent embedded on your website",
      "FAQ answers & instant responses",
      "Lead capture (name, phone, email, job)",
      "Email & SMS notifications",
      "Full setup & installation by our team",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$279",
    period: "/month",
    description: "Missed-call text-back, booking, CRM pipeline & monthly lead report.",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Missed call text-back",
      "CRM pipeline & lead tracking",
      "Appointment booking integration",
      "Monthly lead report",
      "Custom agent branding & persona",
      "Priority support",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/month",
    description: "24/7 AI phone agent, full optimization & strategy calls.",
    features: [
      "Everything in Growth",
      "24/7 AI phone agent (after-hours & overflow)",
      "Monthly agent optimization & tuning",
      "Conversation review",
      "Quarterly strategy call",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-[#050508] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, predictable pricing.
          </h2>
          <p className="text-white/50 text-lg">
            One-time $149 setup fee. Then just a monthly subscription. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-7 rounded-2xl border transition-all",
                plan.highlighted
                  ? "bg-emerald-600/10 border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-xs text-white font-medium whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-7">
                <h3 className="text-white font-semibold text-lg mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm mb-1.5">{plan.period}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check
                      className={cn(
                        "w-4 h-4 mt-0.5 flex-shrink-0",
                        plan.highlighted ? "text-emerald-400" : "text-white/35"
                      )}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all",
                  plan.highlighted
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                    : "border border-white/[0.1] text-white/60 hover:text-white hover:border-white/20"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-sm mt-8"
        >
          All plans include the $149 one-time setup fee. Billed monthly through Stripe.
        </motion.p>
      </div>
    </section>
  );
}
