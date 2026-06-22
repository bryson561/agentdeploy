"use client";

import { useEffect, useState } from "react";
import { AILoader } from "@/components/ui/ai-loader";

/**
 * Full-screen loading overlay shown on first paint. Fades out as soon as the
 * page has loaded (or after a hard cap), so it never gates content longer than
 * needed. Renders on the server too, so there's no flash of unstyled content.
 */
export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const MIN_MS = 600; // avoid a jarring flash if it's already fast
    const HARD_CAP_MS = 3000; // never block longer than this
    const start = performance.now();

    const hide = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_MS - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    const cap = window.setTimeout(() => setHidden(true), HARD_CAP_MS);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(cap);
    };
  }, []);

  // Unmount after the fade-out transition completes.
  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 600);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <AILoader text="AgentDeploy" />
    </div>
  );
}
