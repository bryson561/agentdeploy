"use client";

import { motion } from "framer-motion";
import { Bot, User, Check, Send } from "lucide-react";

const conversation = [
  {
    role: "user",
    text: "Hey, is your AC repair service available tonight?",
  },
  {
    role: "agent",
    text: "Hi there! Yes, we offer 24/7 emergency HVAC service across South Florida. We have a technician available as early as tonight. Can I get your name and address to get you on the schedule?",
  },
  {
    role: "user",
    text: "John Miller, 4821 Oak Drive, Coral Springs",
  },
  {
    role: "agent",
    text: "Perfect, John. I've captured your info and notified the team — expect a confirmation call within 15 minutes. Would you also like to schedule a follow-up maintenance visit?",
  },
];

const features = [
  "Answers questions instantly, 24/7",
  "Captures name, phone, and job details",
  "Notifies you by text or email in real time",
  "Books appointments in your existing calendar",
  "Escalates emergencies with your direct number",
];

export function ChatDemoSection() {
  return (
    <section className="bg-[#050508] py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4 font-medium">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Meet your new
              <br />
              24/7 front desk.
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Your AI agent is trained specifically on your business — your services, pricing, service area, and FAQs. It responds like a knowledgeable employee, not a generic bot.
            </p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/70 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-emerald-600/8 rounded-3xl blur-3xl" />

            <div className="relative bg-[#0c0c14] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
              {/* Widget header */}
              <div className="px-4 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">ProAir HVAC Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <p className="text-white/70 text-xs">Online · Responds instantly</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4 min-h-[280px]">
                {conversation.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.25 }}
                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "agent"
                          ? "bg-emerald-500/20"
                          : "bg-white/10"
                      }`}
                    >
                      {msg.role === "agent" ? (
                        <Bot className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-white/60" />
                      )}
                    </div>
                    <div
                      className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "agent"
                          ? "bg-white/[0.05] text-white/80 rounded-tl-sm"
                          : "bg-emerald-600 text-white rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input row */}
              <div className="px-4 py-3 border-t border-white/[0.06] flex items-center gap-2">
                <div className="flex-1 bg-white/[0.04] rounded-xl px-3.5 py-2 text-xs text-white/25">
                  Type a message...
                </div>
                <button className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            <p className="text-center text-white/20 text-xs mt-4 tracking-wide">
              Powered by AgentDeploy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
