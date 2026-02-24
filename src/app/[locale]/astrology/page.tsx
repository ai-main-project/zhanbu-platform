"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function AstrologyPage() {
    const t = useTranslations("AstrologyPage");

    return (
        <div className="min-h-screen bg-background-light pb-24 flex flex-col">
            <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10 shadow-sm">
                <div className="w-10"></div>
                <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-wide flex-1 text-center font-display">{t("title")}</h2>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-4 flex flex-col gap-4 font-display">
                {/* Bazi Card */}
                <Link href="/bazi/report" className="bg-white p-6 rounded-[2rem] border border-primary/5 hover:border-primary/20 shadow-soft hover:shadow-soft-hover transition-all group relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined">calendar_month</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{t("bazi_title")}</h3>
                        </div>
                        <p className="text-slate-500 text-sm">
                            {t("bazi_desc")}
                        </p>
                    </div>
                </Link>

                {/* Placeholder for Star Chart */}
                <div className="bg-white p-6 rounded-[2rem] border border-blue-500/10 shadow-sm opacity-60 relative overflow-hidden grayscale">
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-sm">
                                <span className="material-symbols-outlined">stars</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">{t("star_chart_title")}</h3>
                        </div>
                        <p className="text-slate-500 text-sm">
                            {t("star_chart_desc")}
                        </p>
                        <span className="absolute top-4 right-4 text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium">{t("coming_soon")}</span>
                    </div>
                </div>
            </main>
            <BottomNavigation />
        </div>
    );
}
