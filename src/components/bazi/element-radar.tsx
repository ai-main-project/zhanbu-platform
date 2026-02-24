"use client";

import { useTranslations } from "next-intl";

export function ElementRadar() {
    const t = useTranslations("BaziReport");

    return (
        <section className="mt-2">
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-slate-800 tracking-wide text-xl font-bold">{t("elemental_balance")}</h3>
                <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">info</span>
                </button>
            </div>
            <div
                className="bg-white/90 backdrop-blur-xl border border-primary/5 shadow-soft rounded-[2rem] p-6 relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-element-water/10 rounded-full blur-3xl"></div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Radar Chart Visualization */}
                    <div className="relative size-64 shrink-0 mx-auto">
                        <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 200 200">
                            {/* Grid: Concentric Pentagons */}
                            <g className="stroke-slate-200 fill-none stroke-1">
                                <polygon points="100,20 176,76 147,165 53,165 24,76"></polygon>
                                <polygon points="100,40 157,82 135,149 65,149 43,82"></polygon>
                                <polygon points="100,60 138,88 123,133 77,133 62,88"></polygon>
                                <polygon points="100,80 119,94 112,116 88,116 81,94"></polygon>
                            </g>
                            {/* Axis Lines */}
                            <g className="stroke-slate-200 stroke-1">
                                <line x1="100" x2="100" y1="100" y2="20"></line>
                                <line x1="100" x2="176" y1="100" y2="76"></line>
                                <line x1="100" x2="147" y1="100" y2="165"></line>
                                <line x1="100" x2="53" y1="100" y2="165"></line>
                                <line x1="100" x2="24" y1="100" y2="76"></line>
                            </g>
                            {/* Data Polygon */}
                            <polygon className="fill-primary/20 stroke-primary stroke-2 filter drop-shadow-sm" points="100,36 145,85 119,139 86,145 47,83"></polygon>
                            {/* Data Points */}
                            <circle className="fill-element-fire" cx="100" cy="36" r="3"></circle>
                            <circle className="fill-element-earth" cx="145" cy="85" r="3"></circle>
                            <circle className="fill-element-metal" cx="119" cy="139" r="3"></circle>
                            <circle className="fill-element-water" cx="86" cy="145" r="3"></circle>
                            <circle className="fill-element-wood" cx="47" cy="83" r="3"></circle>
                            {/* Labels */}
                            <text className="fill-element-fire text-[10px] font-bold uppercase tracking-wider" textAnchor="middle" x="100" y="15">{t("fire")}</text>
                            <text className="fill-element-earth text-[10px] font-bold uppercase tracking-wider" textAnchor="start" x="185" y="76">{t("earth")}</text>
                            <text className="fill-element-metal text-[10px] font-bold uppercase tracking-wider" textAnchor="start" x="155" y="175">{t("metal")}</text>
                            <text className="fill-element-water text-[10px] font-bold uppercase tracking-wider" textAnchor="end" x="45" y="175">{t("water")}</text>
                            <text className="fill-element-wood text-[10px] font-bold uppercase tracking-wider" textAnchor="end" x="15" y="76">{t("wood")}</text>
                        </svg>
                    </div>

                    {/* Chart Stats */}
                    <div className="flex-1 w-full grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="size-2 rounded-full bg-element-fire"></div>
                            <span className="text-xs text-slate-500 font-medium">{t("fire")}</span>
                            <span className="ml-auto text-sm font-bold text-slate-800">35%</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="size-2 rounded-full bg-element-wood"></div>
                            <span className="text-xs text-slate-500 font-medium">{t("wood")}</span>
                            <span className="ml-auto text-sm font-bold text-slate-800">25%</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="size-2 rounded-full bg-element-earth"></div>
                            <span className="text-xs text-slate-500 font-medium">{t("earth")}</span>
                            <span className="ml-auto text-sm font-bold text-slate-800">20%</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="size-2 rounded-full bg-element-metal"></div>
                            <span className="text-xs text-slate-500 font-medium">{t("metal")}</span>
                            <span className="ml-auto text-sm font-bold text-slate-800">15%</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                            <div className="size-2 rounded-full bg-element-water"></div>
                            <span className="text-xs text-slate-500 font-medium">{t("water")}</span>
                            <span className="ml-auto text-sm font-bold text-slate-800">5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
