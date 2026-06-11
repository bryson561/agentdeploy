import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AgentDeploy",
  description: "Simple, transparent pricing for AI chat agents. Starter at $199/month, Growth at $279/month, Pro at $399/month. One-time $149 setup fee.",
};

const faqs = [
  {
    q: "What is the $149 setup fee for?",
    a: "It covers the time our team spends training your agent, writing its knowledge base, and installing it on your website. It's a one-time charge — not recurring.",
  },
  {
    q: "Do I need to do anything technical?",
    a: "No. You fill out a short intake form with your business info, and we handle everything — training, setup, and installation. If you need help with the intake form, we're available.",
  },
  {
    q: "How long does setup take?",
    a: "Most agents go live within 48–72 hours of receiving your completed intake form. Phone features like missed call text-back require carrier registration that can take a few extra days to clear.",
  },
  {
    q: "What scheduling tools do you integrate with?",
    a: "We support Calendly, Housecall Pro, ServiceTitan, and most calendar tools with a shareable booking link. If you use something else, ask us — we'll figure it out.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can change your plan at any time. Just reach out and we'll handle it. Changes take effect at the next billing cycle.",
  },
  {
    q: "What happens if my business info changes?",
    a: "Just let us know and we'll update your agent. Growth and Pro plans include ongoing maintenance. Starter plan updates are handled on a case-by-case basis.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, cancel anytime. No contracts, no cancellation fees. The $149 setup fee is non-refundable since the work is already done.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#030303]">
      <Navbar />

      <div className="pt-32 pb-8 px-4 text-center">
        <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-medium">
          Pricing
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Simple pricing.
          <br />
          <span className="text-white/40">No surprises.</span>
        </h1>
        <p className="text-white/50 text-xl max-w-xl mx-auto">
          One-time $149 setup fee, then a flat monthly rate. Cancel anytime.
        </p>
      </div>

      <PricingSection />

      {/* FAQ */}
      <section className="bg-[#030303] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
