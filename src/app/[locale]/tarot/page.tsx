"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function TarotPage() {
  const t = useTranslations("TarotPage");

  return (
    <div className="min-h-screen bg-background-light pb-24 flex flex-col font-display">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10 shadow-sm">
        <div className="w-10"></div>
        <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-wide flex-1 text-center">{t("title")}</h2>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-4">
        {/* Tarot Session Link */}
        <Link href="/tarot/session" className="bg-white p-6 rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all shadow-soft hover:shadow-soft-hover group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-pink/10 rounded-full blur-2xl group-hover:bg-accent-pink/20 transition-all"></div>
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">style</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{t("reading_title")}</h3>
            </div>
            <p className="text-slate-500 text-sm">
              {t("reading_desc")}
            </p>
            <div className="mt-2 flex items-center text-xs text-primary font-bold uppercase tracking-wider">
              {t("enter_portal")} <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
            </div>
          </div>
        </Link>
      </main>
      <BottomNavigation />
    </div>
  );
}
