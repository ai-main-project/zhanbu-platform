"use client";

import { useTranslations } from "next-intl";

export function GrandmasterInsight() {
    const t = useTranslations("BaziReport");

    return (
        <section className="mt-4 pb-20">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl animate-pulse">auto_awesome</span>
                    <h3 className="text-white tracking-wide text-xl font-bold">{t("insight_title")}</h3>
                </div>
            </div>
            <div
                className="glass-panel rounded-2xl p-0 overflow-hidden border-primary/20"
                style={{
                    background: 'rgba(44, 38, 22, 0.4)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(236, 182, 19, 0.2)'
                }}
            >
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="p-6 max-h-[500px] overflow-y-auto custom-scroll relative">
                    {/* Decorative quote mark */}
                    <div className="absolute top-4 right-6 text-6xl text-white/5 font-serif font-bold pointer-events-none">”</div>
                    <div className="space-y-6">

                        {/* Personality */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("personality_title")}
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed">
                                {t.rich("personality_insight", {
                                    fire: (chunks) => <span className="text-element-fire font-medium">{chunks}</span>,
                                    highlight: (chunks) => <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(236,182,19,0.5)]">{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Career */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("career_title")}
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed">
                                {t.rich("career_insight", {
                                    highlight: (chunks) => <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(236,182,19,0.5)]">{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Wealth */}
                        <div>
                            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {t("wealth_title")}
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed">
                                {t.rich("wealth_insight", {
                                    highlight: (chunks) => <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(236,182,19,0.5)]">{chunks}</span>,
                                    white: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                })}
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center">
                            <button className="text-xs text-primary/70 border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/10 transition-colors flex items-center gap-1">
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
