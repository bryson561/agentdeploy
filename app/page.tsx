import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ProblemSection } from "@/components/sections/problem";
import { ChatDemoSection } from "@/components/sections/chat-demo";
import { ProcessSection } from "@/components/sections/process";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ChatDemoSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
