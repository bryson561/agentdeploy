import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { DemoCalloutSection } from "@/components/sections/demo-callout";
import { ScrollStatsSection } from "@/components/sections/scroll-stats";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { ProblemSection } from "@/components/sections/problem";
import { ComparisonSection } from "@/components/sections/comparison";
import { AIUrgencySection } from "@/components/sections/ai-urgency";
import { ChatDemoSection } from "@/components/sections/chat-demo";
import { ProcessSection } from "@/components/sections/process";
import { FeatureChartSection } from "@/components/sections/feature-chart";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navbar />
      <HeroSection />
      <DemoCalloutSection />
      <ScrollStatsSection />
      <ProductShowcase />
      <ProblemSection />
      <ComparisonSection />
      <AIUrgencySection />
      <ChatDemoSection />
      <ProcessSection />
      <FeatureChartSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
