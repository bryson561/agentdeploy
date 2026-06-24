"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = ["Starter", "Growth", "Pro"] as const;

const rows: { feature: string; included: [boolean, boolean, boolean] }[] = [
  { feature: "AI agent embedded on your website", included: [true, true, true] },
  { feature: "FAQ answers & instant responses", included: [true, true, true] },
  { feature: "Lead capture (name, phone, email, job)", included: [true, true, true] },
  { feature: "Email & app notifications", included: [true, true, true] },
  { feature: "Reply to any conversation yourself, anytime", included: [true, true, true] },
  { feature: "Full setup & installation by our team", included: [true, true, true] },
  { feature: "Missed-call text-back", included: [false, true, true] },
  { feature: "CRM pipeline & lead tracking", included: [false, true, true] },
  { feature: "Appointment booking integration", included: [false, true, true] },
  { feature: "Monthly lead report", included: [false, true, true] },
  { feature: "Custom agent branding & persona", included: [false, true, true] },
  { feature: "Priority support", included: [false, true, true] },
  { feature: "24/7 AI phone agent (after-hours)", included: [false, false, true] },
  { feature: "Monthly agent optimization & tuning", included: [false, false, true] },
  { feature: "Conversation review", included: [false, false, true] },
  { feature: "Quarterly strategy call", included: [false, false, true] },
];

export function FeatureChartSection() {
  return (
    <section className="relative bg-[#030303] py-28 px-4 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
            Compare Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything included, by plan.
          </h2>
          <p className="text-white/50 text-lg">
            Every plan is fully done-for-you. Upgrade as you grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.06] overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] bg-white/[0.02]">
            <div className="p-5 text-sm font-medium text-white/40">Features</div>
            {plans.map((plan, i) => (
              <div
                key={plan}
                className={cn(
                  "p-5 text-center text-sm font-semibold text-white",
                  i === 1 && "bg-emerald-600/[0.06] border-x border-emerald-500/10"
                )}
              >
                {plan}
                {i === 1 && (
                  <span className="block text-[10px] font-medium text-emerald-400 uppercase tracking-wider mt-0.5">
                    Most Popular
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {rows.map((row, r) => (
            <div
              key={row.feature}
              className={cn(
                "grid grid-cols-[1.6fr_repeat(3,1fr)] items-center border-t border-white/[0.05]",
                r % 2 === 1 && "bg-white/[0.01]"
              )}
            >
              <div className="p-4 text-sm text-white/65">{row.feature}</div>
              {row.included.map((inc, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-4 flex justify-center",
                    i === 1 && "bg-emerald-600/[0.04] border-x border-emerald-500/10"
                  )}
                >
                  {inc ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Minus className="w-4 h-4 text-white/15" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
