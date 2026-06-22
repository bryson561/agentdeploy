"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassNavItem {
  label: string;
  href: string;
}

interface GlassNavPillProps {
  items: GlassNavItem[];
  className?: string;
}

/**
 * Frosted-glass navigation pill with an animated "lamp" indicator that
 * follows the active route. Dark-theme + emerald accent to match the site.
 */
export function GlassNavPill({ items, className }: GlassNavPillProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-lg shadow-black/20",
        className
      )}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
              isActive ? "text-white" : "text-white/60 hover:text-white"
            )}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="glass-nav-lamp"
                className="absolute inset-0 -z-10 rounded-full bg-emerald-500/10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute -top-px left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-emerald-400">
                  <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-emerald-400/30 blur-md" />
                  <div className="absolute -top-1 h-6 w-8 rounded-full bg-emerald-400/20 blur-md" />
                  <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-emerald-400/20 blur-sm" />
                </div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
