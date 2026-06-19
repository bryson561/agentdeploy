import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProcessSection } from "@/components/sections/process";
import { CTASection } from "@/components/sections/cta";
import { ChatDemoSection } from "@/components/sections/chat-demo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — AgentDeploy",
  description: "See exactly how AgentDeploy sets up and manages your AI chat agent. Five simple steps from signup to live agent in 48–72 hours.",
};

const details = [
  {
    title: "What goes into the intake form?",
    body: "Your services list, service area, hours, emergency line, pricing ranges (e.g. 'tune-ups start at $89'), common FAQs, and how you want leads delivered. Most owners complete it in under 20 minutes.",
  },
  {
    title: "How is the agent trained?",
    body: "We use your intake form data to write a structured knowledge base. The agent is then configured through Chatbase — an enterprise-grade AI platform — and tested before going live on your site.",
  },
  {
    title: "How does the chat widget get on my website?",
    body: "We add a small snippet of code to your site. If you use a page builder like Wix, Squarespace, WordPress, or Webflow, we handle this without any disruption to your existing pages.",
  },
  {
    title: "What do lead notifications look like?",
    body: "You get a text and email the moment a lead is captured. The message includes the customer's name, contact info, and a summary of what they're looking for — so you can call back informed.",
  },
  {
    title: "What does ongoing management include?",
    body: "As your business evolves — new services, seasonal pricing, staff changes — you tell us and we update the agent. Pro plan clients also get a monthly report showing how many conversations happened, leads captured, and what customers are commonly asking.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#030303]">
      <Navbar />

      <div className="pt-32 pb-8 px-4 text-center">
        <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
          The Process
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          From signup to live agent
          <br />
          <span className="text-white/40">in 48–72 hours.</span>
        </h1>
        <p className="text-white/50 text-xl max-w-xl mx-auto">
          You fill out one form. We handle everything else.
        </p>
      </div>

      <ProcessSection />

      {/* Detail cards */}
      <section className="bg-[#050508] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            More detail on each step
          </h2>
          <div className="space-y-5">
            {details.map((d, i) => (
              <div
                key={d.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono text-emerald-500/50 pt-1 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{d.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChatDemoSection />
      <CTASection />
      <Footer />
    </main>
  );
}
