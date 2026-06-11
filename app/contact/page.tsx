"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ShoppingCart,
  ClipboardList,
  Zap,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Stripe payment links (subscription + $149 setup fee bundled) ──
const STRIPE_STARTER = "https://buy.stripe.com/test_dRm8wOaxdc242Sv27XbAs00";
const STRIPE_GROWTH  = "https://buy.stripe.com/test_bJebJ07l12ru50D4g5bAs01";
const STRIPE_PRO     = "https://buy.stripe.com/test_9B6eVceNt6HKbp1cMBbAs02";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Pick your plan & sign up",
    body: "Choose Starter, Growth, or Pro below. Click the button to subscribe and pay the one-time setup fee through Stripe. Takes under 2 minutes.",
    tag: "~2 min",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Fill out our intake form",
    body: "Right after you sign up, we send you a short intake form. Tell us your business name, what services you offer, common questions your customers ask, and how you want the agent to sound. No tech knowledge required.",
    tag: "~5 min",
  },
  {
    number: "03",
    icon: Zap,
    title: "Your agent goes live",
    body: "We build, train, and install your AI agent directly on your website. You don't touch a single line of code. Phone features like missed call text-back or AI phone agent may take a few extra days to configure.",
    tag: "48–72 hrs",
  },
];

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$199",
    period: "/mo",
    setup: "+ $149 setup",
    tagline: "Everything you need to start capturing leads around the clock.",
    color: "from-indigo-500 to-indigo-600",
    border: "border-indigo-500/20",
    glow: "bg-indigo-500/5",
    badge: null,
    href: STRIPE_STARTER,
    features: [
      "AI agent embedded on your website",
      "Instant FAQ answers, 24/7",
      "Lead capture — name, phone, email, job type",
      "Email & SMS notifications",
      "Full setup & installation — done for you",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$279",
    period: "/mo",
    setup: "+ $149 setup",
    tagline: "Missed-call text-back, booking, CRM pipeline & monthly lead report.",
    color: "from-violet-500 to-violet-600",
    border: "border-violet-500/30",
    glow: "bg-violet-500/8",
    badge: "Most Popular",
    href: STRIPE_GROWTH,
    features: [
      "Everything in Starter",
      "Missed call text-back",
      "CRM pipeline & lead tracking",
      "Appointment booking integration",
      "Monthly lead report",
      "Custom agent branding & persona",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$399",
    period: "/mo",
    setup: "+ $149 setup",
    tagline: "24/7 AI phone agent, full optimization & strategy calls.",
    color: "from-amber-500 to-orange-500",
    border: "border-amber-500/20",
    glow: "bg-amber-500/5",
    badge: null,
    href: STRIPE_PRO,
    features: [
      "Everything in Growth",
      "24/7 AI phone agent (after-hours & overflow)",
      "Monthly agent optimization & tuning",
      "Conversation review",
      "Quarterly strategy call",
    ],
  },
];

const trust = [
  { icon: Clock,          text: "Live in 48–72 hours after intake" },
  { icon: Shield,         text: "No contracts — cancel anytime" },
  { icon: MessageSquare,  text: "Works on any website platform" },
  { icon: CheckCircle,    text: "100% done for you — zero tech work" },
];

export default function GetStartedPage() {
  return (
    <main className="bg-[#030303] overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 px-4 text-center">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 mb-6">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs text-indigo-300 font-medium tracking-wide">
              3 steps · live in 48 hours
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Your AI agent,{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              up and running
            </span>
            <br />this week.
          </h1>

          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            Pick a plan, sign up in 2 minutes, fill out a quick form about your business —
            and we handle everything else. No tech skills needed.
          </p>
        </motion.div>
      </section>

      {/* ── HOW IT WORKS STEPS ── */}
      <section className="relative px-4 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative bg-[#0c0c14] border border-white/[0.07] rounded-2xl p-6 overflow-hidden"
              >
                {/* Step number watermark */}
                <span className="absolute right-4 top-3 text-7xl font-black text-white/[0.03] leading-none select-none">
                  {step.number}
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="mt-2.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/40 font-medium">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {step.body}
                </p>

                {/* Connector arrow — only between cards on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#030303] border border-white/[0.08] items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white/30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="border-y border-white/[0.05] bg-white/[0.015] py-5 mb-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trust.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-white/55 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <section className="px-4 pb-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-3 font-medium">
            Choose your plan
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-white/45 mt-3 text-base max-w-md mx-auto">
            All plans include full done-for-you setup. No hidden fees, no contracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.55 }}
              className={cn(
                "relative rounded-2xl border p-6 flex flex-col",
                plan.badge
                  ? "border-violet-500/40 bg-[#0d0d1a]"
                  : `${plan.border} bg-[#0c0c14]`,
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-semibold shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Glow behind popular */}
              {plan.badge && (
                <div className="absolute inset-0 rounded-2xl bg-violet-500/5 pointer-events-none" />
              )}

              {/* Header */}
              <div className="mb-5">
                <p className="text-white/50 text-sm font-medium mb-1">{plan.name}</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-white/35 text-base mb-1">{plan.period}</span>
                </div>
                <p className="text-white/30 text-xs">{plan.setup} · one-time</p>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-5 border-t border-white/[0.06] pt-5">
                {plan.tagline}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/65 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all",
                  plan.badge
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-900/30"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1]"
                )}
              >
                Get Started — {plan.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/25 text-sm mt-6">
          Checkout is handled securely through Stripe. Cancel anytime — no contracts.
        </p>
      </section>

      {/* ── INTAKE FORM EXPLAINER ── */}
      <section className="px-4 pb-32 max-w-3xl mx-auto text-center">
        <div className="relative rounded-2xl border border-indigo-500/15 bg-[#0c0c14] p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-violet-600/5 pointer-events-none" />

          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5">
              <ClipboardList className="w-6 h-6 text-indigo-400" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">
              After you sign up, we send you a short form.
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-6">
              To build an agent that actually sounds like your business, we need to know
              a bit about you — your services, your service area, common customer questions,
              and how you want the bot to handle after-hours calls. The form takes about
              5 minutes and you can fill it out from your phone.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                { label: "Your business", body: "Name, services, service area, hours" },
                { label: "Your customers", body: "Common questions, pricing, what to say" },
                { label: "Your goals", body: "Lead capture, bookings, emergency calls" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-sm mt-6">
              Once we receive your completed form, your agent is live within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-4 pb-32 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Still have questions?
        </h2>
        <p className="text-white/50 mb-7">
          Check out how it works or browse our pricing breakdown — or just reach out directly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/how-it-works"
            className="px-6 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white text-sm font-medium transition-all"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white text-sm font-medium transition-all"
          >
            See Full Pricing
          </Link>
          <a
            href="mailto:officeagentdeploy@gmail.com"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all"
          >
            Email Us Directly
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
