"use client";

import { useTranslations } from "next-intl";

export function DailyOracle() {
    const t = useTranslations("Dashboard");

    return (
        <div className="flex flex-col gap-3 p-4 pt-2 pb-24">
            <h3 className="text-white tracking-light text-xl font-bold leading-tight px-1">{t("oracle_title")}</h3>
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2f2348] via-[#1e162e] to-[#171122] p-[1px]">
                {/* Border Gradient effect via padding + inner div */}
                <div className="relative rounded-2xl bg-[#1e162e] p-6 h-full">
                    {/* Decorative background element */}
                    <div className="absolute -top-10 -right-10 size-32 bg-primary/20 blur-[50px] rounded-full"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{t("oracle_subtitle")}</span>
                        </div>
                        <p className="text-slate-300 text-lg font-normal leading-relaxed">
                            "{t("oracle_message")}"
                        </p>
                        <div className="flex justify-end mt-2">
                            <button className="text-sm font-medium text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                                {t("ask_followup")} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
