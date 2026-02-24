"use client";

import { useTranslations } from "next-intl";

export function DailyOracle() {
    const t = useTranslations("Dashboard");

    return (
        <div className="flex flex-col gap-3 p-4 pt-2 pb-24 font-display">
            <h3 className="text-slate-800 tracking-light text-xl font-bold leading-tight px-1">{t("oracle_title")}</h3>
            <div className="relative w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-accent-pink shadow-soft p-[1px]">
                {/* Border effect via padding + inner div */}
                <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/95 to-accent-pink/95 p-6 h-full">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 size-40 bg-white/20 blur-[40px] rounded-full mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white/90">
                            <span className="material-symbols-outlined text-[20px] animate-pulse">auto_awesome</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/80">{t("oracle_subtitle")}</span>
                        </div>
                        <p className="text-white text-lg font-medium leading-relaxed drop-shadow-sm">
                            &quot;{t("oracle_message")}&quot;
                        </p>
                        <div className="flex justify-end mt-2">
                            <button className="text-sm font-bold text-white hover:text-white/90 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-1 transition-all border border-white/20 shadow-sm">
                                {t("ask_followup")} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
