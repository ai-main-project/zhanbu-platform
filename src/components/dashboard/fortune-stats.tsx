"use client";

import { useTranslations } from "next-intl";

interface StatItem {
    type: "love" | "career" | "wealth";
    score: number; // 0-5
}

export function FortuneStats({ stats }: { stats: StatItem[] }) {
    const t = useTranslations("Dashboard");

    const getIcon = (type: string) => {
        switch (type) {
            case "love": return "favorite";
            case "career": return "work";
            case "wealth": return "monetization_on";
            default: return "star";
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case "love": return "text-pink-500 bg-pink-500/10";
            case "career": return "text-primary bg-primary/20";
            case "wealth": return "text-amber-400 bg-amber-400/10";
            default: return "text-slate-500 bg-slate-500/10";
        }
    };

    const getLabel = (type: string) => {
        return t(type);
    };

    const getSubLabel = (type: string) => {
        return t(`${type}_status`);
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            <h3 className="text-white tracking-light text-xl font-bold leading-tight px-1">{t("vital_aspects")}</h3>
            <div className="grid grid-cols-1 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.type}
                        className={`glass-panel flex items-center justify-between p-5 rounded-2xl glow-shadow transition-transform active:scale-[0.98] ${stat.type === 'career' ? 'border-l-4 border-l-primary' : ''}`}
                        style={{
                            background: 'rgba(30, 22, 46, 0.7)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 0 25px rgba(91, 19, 236, 0.15)'
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`size-12 rounded-full flex items-center justify-center ${getColor(stat.type)}`}>
                                <span className={`material-symbols-outlined text-[28px] ${stat.type === 'love' ? 'fill-current' : ''}`}>
                                    {getIcon(stat.type)}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-base font-bold">{getLabel(stat.type)}</span>
                                <span className={`text-xs ${stat.type === 'love' ? 'text-pink-300/60' : stat.type === 'career' ? 'text-primary/60' : 'text-amber-200/60'}`}>
                                    {getSubLabel(stat.type)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className={`flex gap-0.5 ${stat.type === 'love' ? 'text-pink-500' : stat.type === 'career' ? 'text-primary' : 'text-amber-400'}`}>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className={`material-symbols-outlined text-[20px] ${s <= Math.round(stat.score) ? 'fill-current' : 'opacity-30'}`}>
                                        star
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs font-mono text-slate-400">{stat.score.toFixed(1)}/5</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
