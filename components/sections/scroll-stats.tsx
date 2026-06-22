"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Bot, MessageSquareOff, Clock, Rocket } from "lucide-react";

const features = [
  {
    stat: "$1,200+",
    headline: "Lost per missed inquiry",
    description:
      "Every unanswered message after hours is revenue walking out the door, straight to a competitor who responded faster.",
    visual: "missed" as const,
  },
  {
    stat: "78%",
    headline: "Hire whoever responds first",
    description:
      "It's 9 PM. A homeowner visits your website. No chat. No response. They go to the next business on the list.",
    visual: "respond" as const,
  },
  {
    stat: "24/7",
    headline: "AI coverage, zero staff",
    description:
      "Your competitor didn't hire a night receptionist. They deployed an AI agent. Same team, more leads, zero extra overhead.",
    visual: "always-on" as const,
  },
  {
    stat: "48 hrs",
    headline: "From signup to live",
    description:
      "Zero technical work from you. We handle training, installation, and configuration. Fill out a short form and we do the rest.",
    visual: "launch" as const,
  },
];

function clampedSlide(progress: number, index: number, total: number) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const fadeIn = start + seg * 0.12;
  const fadeOut = end - seg * 0.12;

  let opacity: number;
  if (index === 0) {
    opacity = progress <= fadeOut ? 1 : progress >= end ? 0 : 1 - (progress - fadeOut) / (end - fadeOut);
  } else if (index === total - 1) {
    opacity = progress >= fadeIn ? 1 : progress <= start ? 0 : (progress - start) / (fadeIn - start);
  } else {
    if (progress < start) opacity = 0;
    else if (progress < fadeIn) opacity = (progress - start) / (fadeIn - start);
    else if (progress <= fadeOut) opacity = 1;
    else if (progress <= end) opacity = 1 - (progress - fadeOut) / (end - fadeOut);
    else opacity = 0;
  }

  let y: number;
  if (progress < start) y = 40;
  else if (progress < fadeIn) y = 40 * (1 - (progress - start) / (fadeIn - start));
  else if (progress <= fadeOut) y = 0;
  else if (progress <= end) y = -40 * ((progress - fadeOut) / (end - fadeOut));
  else y = -40;

  return { opacity: Math.max(0, Math.min(1, opacity)), y };
}

function TextSlide({
  feature,
  index,
  total,
  scrollYProgress,
}: {
  feature: (typeof features)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, (p) => clampedSlide(p, index, total).opacity);
  const y = useTransform(scrollYProgress, (p) => clampedSlide(p, index, total).y);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center pr-8 md:pr-12"
    >
      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-emerald-400 mb-3 leading-none tracking-tighter">
        {feature.stat}
      </div>
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
        {feature.headline}
      </h3>
      <p className="text-white/50 text-sm md:text-base lg:text-lg max-w-md leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

function VisualMissed({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, (p) => clampedSlide(p, 0, 4).opacity);
  const scale = useTransform(scrollYProgress, (p) => 0.8 + clampedSlide(p, 0, 4).opacity * 0.2);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <MessageSquareOff className="w-10 h-10 md:w-14 md:h-14 text-red-400/60" />
        </div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-red-400/20"
            style={{
              width: 160 + i * 60,
              height: 160 + i * 60,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 text-xs font-bold"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          !
        </motion.div>
      </div>
    </motion.div>
  );
}

function VisualRespond({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, (p) => clampedSlide(p, 1, 4).opacity);
  const scale = useTransform(scrollYProgress, (p) => 0.8 + clampedSlide(p, 1, 4).opacity * 0.2);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
          animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0)", "0 0 40px 10px rgba(16,185,129,0.15)", "0 0 0 0 rgba(16,185,129,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Bot className="w-10 h-10 md:w-14 md:h-14 text-emerald-400" />
        </motion.div>
        {[45, 135, 225, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const dist = 90;
          return (
            <motion.div
              key={angle}
              className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400/30 border border-emerald-400/40"
              style={{
                top: "50%",
                left: "50%",
                x: Math.cos(rad) * dist - 6,
                y: Math.sin(rad) * dist - 6,
              }}
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          );
        })}
        {[45, 135, 225, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const len = 50;
          return (
            <motion.div
              key={`line-${angle}`}
              className="absolute bg-emerald-500/15 origin-left"
              style={{
                width: len,
                height: 1,
                top: "50%",
                left: "50%",
                rotate: angle,
                x: 30,
              }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, delay: angle / 360, repeat: Infinity }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

function VisualAlwaysOn({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, (p) => clampedSlide(p, 2, 4).opacity);
  const scale = useTransform(scrollYProgress, (p) => 0.8 + clampedSlide(p, 2, 4).opacity * 0.2);
  const ringRotate = useTransform(scrollYProgress, (p) => {
    const seg = 1 / 4;
    const start = 2 * seg;
    const end = start + seg;
    const local = Math.max(0, Math.min(1, (p - start) / (end - start)));
    return local * 180;
  });

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Clock className="w-10 h-10 md:w-14 md:h-14 text-emerald-400" />
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full border border-emerald-500/15 border-dashed"
          style={{ rotate: ringRotate }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full border border-emerald-500/8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            const radius = 112;
            return (
              <motion.div
                key={a}
                className="absolute w-2 h-2 rounded-full bg-emerald-400/50"
                style={{ top: "50%", left: "50%", x: Math.cos(r) * radius - 4, y: Math.sin(r) * radius - 4 }}
              />
            );
          })}
        </motion.div>
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-emerald-400 text-[10px] font-bold tracking-wider">ONLINE</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function VisualLaunch({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, (p) => clampedSlide(p, 3, 4).opacity);
  const scale = useTransform(scrollYProgress, (p) => 0.8 + clampedSlide(p, 3, 4).opacity * 0.2);
  const rocketY = useTransform(scrollYProgress, (p) => {
    const seg = 1 / 4;
    const start = 3 * seg;
    const end = 1;
    const local = Math.max(0, Math.min(1, (p - start) / (end - start)));
    return (1 - local) * 30;
  });

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <motion.div
          style={{ y: rocketY }}
          className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
        >
          <Rocket className="w-10 h-10 md:w-14 md:h-14 text-emerald-400" />
        </motion.div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20"
            initial={{ width: 80, height: 80, opacity: 0 }}
            animate={{ width: [80, 200 + i * 40], height: [80, 200 + i * 40], opacity: [0.4, 0] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-1 bg-gradient-to-b from-emerald-400/40 to-transparent"
          animate={{ height: [20, 40, 20], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

function ProgressBar({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-48 md:h-64 w-px bg-white/[0.06] hidden md:block">
      <motion.div style={{ height }} className="w-full bg-emerald-400/60 rounded-full origin-top" />
      {features.map((_, i) => (
        <ProgressDotNew key={i} index={i} total={features.length} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function ProgressDotNew({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const mid = (index + 0.5) * seg;

  const dotOpacity = useTransform(scrollYProgress, (p) => {
    const dist = Math.abs(p - mid);
    return dist < seg * 0.5 ? 1 : 0.25;
  });
  const dotScale = useTransform(scrollYProgress, (p) => {
    const dist = Math.abs(p - mid);
    return dist < seg * 0.5 ? 1.5 : 1;
  });

  return (
    <motion.div
      style={{ opacity: dotOpacity, scale: dotScale, top: `${(index / (total - 1)) * 100}%` }}
      className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400"
    />
  );
}

export function ScrollStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Smooth the raw scroll progress so the panel transitions glide instead of
  // tracking the scroll wheel 1:1 (removes the jumpy feel).
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <section className="bg-[#030303] py-28 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.stat} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {f.stat}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {f.headline}
              </div>
              <div className="text-xs text-white/40 leading-relaxed">
                {f.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#030303]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.04),transparent_60%)]" />

        <ProgressBar scrollYProgress={smoothProgress} />

        <div className="h-full flex items-center max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="relative h-[300px] md:h-[400px]">
              {features.map((feature, i) => (
                <TextSlide
                  key={feature.stat}
                  feature={feature}
                  index={i}
                  total={features.length}
                  scrollYProgress={smoothProgress}
                />
              ))}
            </div>

            <div className="relative h-[300px] md:h-[400px]">
              <VisualMissed scrollYProgress={smoothProgress} />
              <VisualRespond scrollYProgress={smoothProgress} />
              <VisualAlwaysOn scrollYProgress={smoothProgress} />
              <VisualLaunch scrollYProgress={smoothProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
