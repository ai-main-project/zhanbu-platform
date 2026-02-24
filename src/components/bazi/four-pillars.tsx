"use client";

import { useTranslations } from "next-intl";

interface PillarData {
    timeframe: string; // Year, Month, Day, Hour
    stem: string;
    stemElement: string;
    branch: string;
    branchElement: string;
    isMaster?: boolean;
}

export function FourPillars() {
    const t = useTranslations("BaziReport");

    // Mock data matching the example HTML
    const pillars: PillarData[] = [
        { timeframe: "year", stem: "甲", stemElement: "wood", branch: "子", branchElement: "water" },
        { timeframe: "month", stem: "丙", stemElement: "fire", branch: "寅", branchElement: "wood" },
        { timeframe: "day", stem: "戊", stemElement: "earth", branch: "辰", branchElement: "earth", isMaster: true },
        { timeframe: "hour", stem: "庚", stemElement: "metal", branch: "午", branchElement: "fire" },
    ];

    const getElementColor = (element: string) => {
        switch (element) {
            case "wood": return "text-element-wood bg-element-wood/20 border-t-element-wood";
            case "fire": return "text-element-fire bg-element-fire/20 border-t-element-fire";
            case "earth": return "text-element-earth bg-element-earth/20 border-t-element-earth";
            case "metal": return "text-element-metal bg-element-metal/20 border-t-element-metal";
            case "water": return "text-element-water bg-element-water/20 border-t-element-water";
                return "";
        }
    };

    const getElementBorder = (element: string) => {
        switch (element) {
            case "wood": return "border-t-element-wood";
            case "fire": return "border-t-element-fire";
            case "earth": return "border-t-element-earth";
            case "metal": return "border-t-element-metal";
            case "water": return "border-t-element-water";
                return "";
        }
    }

    const getElementText = (element: string) => {
        switch (element) {
            case "wood": return "text-element-wood";
            case "fire": return "text-element-fire";
            case "earth": return "text-element-earth";
            case "metal": return "text-element-metal";
            case "water": return "text-element-water";
            default: return "";
        }
    }

    const getElementBg = (element: string) => {
        switch (element) {
            case "wood": return "bg-element-wood/20";
            case "fire": return "bg-element-fire/20";
            case "earth": return "bg-element-earth/20";
            case "metal": return "bg-element-metal/20";
            case "water": return "bg-element-water/20";
            default: return "";
        }
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-primary tracking-wide text-xl font-bold">{t("four_pillars")}</h3>
                <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">{t("solar_cal")}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
                {pillars.map((pillar, index) => (
                    <div key={index} className="flex flex-col gap-2 relative">
                        {pillar.isMaster && (
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-black font-bold px-2 py-0.5 rounded-full z-10 shadow-[0_0_10px_rgba(236,182,19,0.3)]">
                                {t("master")}
                            </div>
                        )}
                        <div className={`text-center text-xs text-slate-400 uppercase tracking-widest mb-1 ${pillar.isMaster ? 'mt-2' : ''}`}>
                            {t(pillar.timeframe)}
                        </div>
                        <div
                            className={`glass-panel rounded-xl p-3 flex flex-col items-center gap-3 border-t-2 ${getElementBorder(pillar.stemElement)} ${pillar.isMaster ? 'bg-primary/5 shadow-[0_0_10px_rgba(236,182,19,0.3)]' : ''}`}
                            style={{
                                background: 'rgba(44, 38, 22, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(236, 182, 19, 0.1)'
                            }}
                        >
                            {/* Heavenly Stem */}
                            <div className="flex flex-col items-center">
                                <span className={`font-chinese text-2xl font-bold mb-1 ${pillar.isMaster ? 'text-primary' : ''}`}>{pillar.stem}</span>
                                <span className={`font-bold text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full ${getElementBg(pillar.stemElement)} ${getElementText(pillar.stemElement)}`}>
                                    {t(pillar.stemElement)}
                                </span>
                            </div>
                            <div className={`w-full h-px ${pillar.isMaster ? 'bg-primary/20' : 'bg-white/10'}`}></div>
                            {/* Earthly Branch */}
                            <div className="flex flex-col items-center">
                                <span className="font-chinese text-2xl font-bold mb-1">{pillar.branch}</span>
                                <span className={`font-bold text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full ${getElementBg(pillar.branchElement)} ${getElementText(pillar.branchElement)}`}>
                                    {t(pillar.branchElement)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
