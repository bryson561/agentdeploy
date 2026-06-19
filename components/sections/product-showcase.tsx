"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { Bot, User, Send } from "lucide-react";

const conversation = [
  {
    role: "agent" as const,
    text: "Hey there! Welcome to Fresh Cuts. How can I help you today?",
  },
  {
    role: "user" as const,
    text: "Do you have any openings for a haircut this Saturday?",
  },
  {
    role: "agent" as const,
    text: "Yes! We have availability this Saturday at 10am, 1pm, and 3pm. Would any of those work for you?",
  },
  {
    role: "user" as const,
    text: "1pm works. Alex Rivera, 561-555-0147.",
  },
  {
    role: "agent" as const,
    text: "You're all set, Alex! Booked for Saturday at 1pm. You'll get a confirmation text shortly. Anything else I can help with?",
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-[#030303] relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              See your AI agent
              <br />
              <span className="text-emerald-400">in action</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Trained on your services, pricing, and FAQs.
              It responds like a knowledgeable employee, not a generic bot.
            </p>
          </div>
        }
      >
        <div className="h-full w-full flex flex-col">
          <div className="px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 flex items-center gap-3 rounded-t-lg md:rounded-t-xl shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-semibold">Fresh Cuts Assistant</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-white/70 text-xs">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 md:p-6 space-y-3 md:space-y-4 overflow-y-auto">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 md:gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "agent" ? "bg-emerald-500/20" : "bg-white/10"
                  }`}
                >
                  {msg.role === "agent" ? (
                    <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                  ) : (
                    <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] md:max-w-[70%] px-3.5 md:px-4 py-2.5 md:py-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                    msg.role === "agent"
                      ? "bg-white/[0.05] text-white/80 rounded-tl-sm"
                      : "bg-emerald-600 text-white rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/[0.06] flex items-center gap-3 shrink-0">
            <div className="flex-1 bg-white/[0.04] rounded-xl px-4 py-2.5 text-xs md:text-sm text-white/25">
              Type a message...
            </div>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
            </button>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
