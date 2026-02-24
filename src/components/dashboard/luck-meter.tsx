"use client";

import { useTranslations } from "next-intl";

interface LuckMeterProps {
    score: number;
}

export function LuckMeter({ score }: LuckMeterProps) {
    const t = useTranslations("Dashboard");

    // Calculate gradient stops based on score
    const gradient = `conic-gradient(#5b13ec 0% ${score}%, #2f2348 ${score}% 100%)`;

    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4">
            <div className="relative flex items-center justify-center size-64">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                {/* Meter Ring */}
                <div
                    className="relative size-56 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse-slow transition-all duration-1000"
                    style={{ background: gradient }}
                >
                    {/* Inner Circle to create Donut */}
                    <div className="size-[200px] rounded-full bg-background-dark flex flex-col items-center justify-center z-10 relative">
                        {/* Decorative inner dashes */}
                        <div className="absolute inset-2 border border-dashed border-white/10 rounded-full"></div>
                        <span className="text-primary font-bold text-6xl tracking-tighter drop-shadow-[0_0_10px_rgba(91,19,236,0.5)]">
                            {score}%
                        </span>
                        <span className="text-slate-400 text-sm font-medium uppercase tracking-widest mt-1">
                            {t("luck_score")}
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-slate-400 text-center text-sm mt-4 max-w-xs">
                {t("alignment_msg")}
            </p>
        </div>
    );
}
