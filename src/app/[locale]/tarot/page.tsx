"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function TarotPage() {
  const t = useTranslations("Tarot"); // Using Tarot translations (landing_title etc)

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24 flex flex-col">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <div className="w-10"></div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center">Tarot & Divination</h2>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-4">
        {/* Tarot Session Link */}
        <Link href="/tarot/session" className="glass-panel p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="size-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <span className="material-symbols-outlined">style</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Start AI Reading</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Connect with the cards to reveal insights about love, career, and life.
            </p>
            <div className="mt-2 flex items-center text-xs text-primary font-bold uppercase tracking-wider">
              Enter Portal <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
            </div>
          </div>
        </Link>
      </main>
      <BottomNavigation />
    </div>
  );
}
