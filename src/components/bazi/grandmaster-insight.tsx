"use client";

import { useTranslations } from "next-intl";

export function GrandmasterInsight() {
    const t = useTranslations("BaziReport");

    return (
        <section className="mt-4 pb-20 font-display">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[28px] animate-pulse-slow">auto_awesome</span>
                    <h3 className="text-slate-800 tracking-wide text-xl font-bold">{t("insight_title")}</h3>
                </div>
            </div>
            <div
                className="bg-white/90 backdrop-blur-xl border border-primary/5 shadow-soft rounded-[2rem] p-0 overflow-hidden"
            >
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-60"></div>
                <div className="p-6 max-h-[500px] overflow-y-auto custom-scroll relative">
                    {/* Decorative quote mark */}
                    <div className="absolute top-2 right-6 text-7xl text-primary/5 font-serif font-bold pointer-events-none">”</div>
                    <div className="space-y-6 relative z-10">

                        {/* Personality */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("personality_title")}
                            </h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                {t.rich("personality_insight", {
                                    fire: (chunks) => <span className="text-element-fire font-bold">{chunks}</span>,
                                    highlight: (chunks) => <span className="text-primary font-bold">{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Career */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("career_title")}
                            </h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                {t.rich("career_insight", {
                                    highlight: (chunks) => <span className="text-primary font-bold">{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Wealth */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("wealth_title")}
                            </h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                {t.rich("wealth_insight", {
                                    highlight: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
                                    white: (chunks) => <span className="text-slate-800 font-bold">{chunks}</span>
                                })}
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center">
                            <button className="text-xs font-bold text-primary border border-primary/20 rounded-full px-5 py-2.5 hover:bg-primary/5 hover:border-primary/40 transition-all flex items-center gap-1.5 shadow-sm">
                                {t("ask_followup")}
                                <span className="material-symbols-outlined text-[16px]">chat</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
