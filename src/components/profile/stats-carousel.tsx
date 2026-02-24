"use client";

import { useTranslations } from "next-intl";

export function StatsCarousel() {
    const t = useTranslations("Profile");

    return (
        <div className="flex flex-col gap-3 py-2">
            <h3 className="px-6 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t("daily_insight")}</h3>
            <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory scrollbar-hide">
                {/* Stat Card 1 */}
                <div className="snap-center shrink-0 flex w-[160px] flex-col gap-3 rounded-[2rem] p-5 bg-white shadow-soft hover:shadow-soft-hover transition-shadow border border-primary/5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">auto_awesome</span>
                        <p className="text-slate-500 text-sm font-medium">{t("luck_score")}</p>
                    </div>
                    <div>
                        <p className="text-slate-900 tracking-tight text-3xl font-bold">88%</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
                            <p className="text-emerald-500 text-xs font-bold">+5% {t("today")}</p>
                        </div>
                    </div>
                </div>
                {/* Stat Card 2 */}
                <div className="snap-center shrink-0 flex w-[160px] flex-col gap-3 rounded-[2rem] p-5 bg-white shadow-soft hover:shadow-soft-hover transition-shadow border border-primary/5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-pink">self_improvement</span>
                        <p className="text-slate-500 text-sm font-medium">{t("mindfulness")}</p>
                    </div>
                    <div>
                        <p className="text-slate-900 tracking-tight text-3xl font-bold">12</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                            <p className="text-emerald-500 text-xs font-bold">{t("day_streak")}</p>
                        </div>
                    </div>
                </div>
                {/* Stat Card 3 */}
                <div className="snap-center shrink-0 flex w-[160px] flex-col gap-3 rounded-[2rem] p-5 bg-white shadow-soft hover:shadow-soft-hover transition-shadow border border-primary/5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-mint">history_edu</span>
                        <p className="text-slate-500 text-sm font-medium">{t("reports")}</p>
                    </div>
                    <div>
                        <p className="text-slate-900 tracking-tight text-3xl font-bold">45</p>
                        <div className="flex items-center gap-1 mt-1">
                            <p className="text-slate-400 text-xs font-medium">{t("lifetime_total")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
