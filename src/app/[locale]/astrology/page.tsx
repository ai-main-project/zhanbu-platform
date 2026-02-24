"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function AstrologyPage() {
    const t = useTranslations("BaziReport");

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24 flex flex-col">
            <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <div className="w-10"></div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center">Astrology Tools</h2>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-4 flex flex-col gap-4">
                {/* Bazi Card */}
                <Link href="/bazi/report" className="glass-panel p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">calendar_month</span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{t("title")}</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Detailed analysis of your Four Pillars and Five Elements balance with AI insights.
                        </p>
                    </div>
                </Link>

                {/* Placeholder for Star Chart */}
                <div className="glass-panel p-6 rounded-2xl border border-white/5 opacity-50 relative overflow-hidden grayscale">
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <span className="material-symbols-outlined">stars</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Star Chart</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Coming Soon. Western astrology birth chart analysis.
                        </p>
                        <span className="absolute top-4 right-4 text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/50">Coming Soon</span>
                    </div>
                </div>
            </main>
            <BottomNavigation />
        </div>
    );
}
