import Link from "next/link";
import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/[0.06] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">
                AgentDeploy
              </span>
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              AI chat agents for local businesses. Fully managed, done-for-you. Live in 48 hours.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-white/50">
            <div className="space-y-3">
              <p className="text-white/20 text-xs uppercase tracking-widest">Product</p>
              <Link href="/how-it-works" className="block hover:text-white transition-colors">How It Works</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
            </div>
            <div className="space-y-3">
              <p className="text-white/20 text-xs uppercase tracking-widest">Company</p>
              <Link href="/contact" className="block hover:text-white transition-colors">Get Started</Link>
              <a
                href="https://billing.stripe.com/p/login/9B6bJ19N65OF6jKcWXdby00"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Manage Subscription
              </a>
            </div>
          </nav>
        </div>

        <div className="border-t border-white/[0.04] mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} AgentDeploy. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">Built for local businesses. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
