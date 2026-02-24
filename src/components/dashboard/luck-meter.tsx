"use client";

import { useTranslations } from "next-intl";

interface LuckMeterProps {
    score: number;
}

export function LuckMeter({ score }: LuckMeterProps) {
    const t = useTranslations("Dashboard");

    // Calculate gradient stops based on score
    const gradient = `conic-gradient(#8b5cf6 0% ${score}%, #f1f5f9 ${score}% 100%)`;

    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4 font-display">
            <div className="relative flex items-center justify-center size-64">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
                {/* Meter Ring */}
                <div
                    className="relative size-56 rounded-full flex items-center justify-center shadow-soft animate-pulse-slow transition-all duration-1000"
                    style={{ background: gradient }}
                >
                    {/* Inner Circle to create Donut */}
                    <div className="size-[200px] rounded-full bg-white flex flex-col items-center justify-center z-10 relative shadow-inner">
                        {/* Decorative inner dashes */}
                        <div className="absolute inset-2 border-2 border-dashed border-primary/5 rounded-full"></div>
                        <span className="text-primary font-bold text-6xl tracking-tighter drop-shadow-sm mt-2">
                            {score}%
                        </span>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                            {t("luck_score")}
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-slate-500 text-center text-sm font-medium mt-4 max-w-xs">
                {t("alignment_msg")}
            </p>
        </div>
    );
}
