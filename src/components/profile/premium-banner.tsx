"use client";

import { useTranslations } from "next-intl";

export function PremiumBanner() {
    const t = useTranslations("Profile");

    return (
        <div className="px-4 py-6">
            <div className="relative w-full rounded-[2rem] overflow-hidden group cursor-pointer shadow-soft hover:shadow-soft-hover transition-all">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/40 to-accent-pink/20"></div>
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 animate-shimmer opacity-40 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col items-center text-center gap-3 border border-white/60 rounded-[2rem] bg-white/40 backdrop-blur-[2px]">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 text-white mb-1 shadow-md shadow-amber-400/30">
                        <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
                    </div>
                    <div>
                        <h3 className="text-slate-800 text-lg font-extrabold tracking-tight mb-1">{t("premium_title")}</h3>
                        <p className="text-slate-600 text-sm font-medium">{t("premium_desc")}</p>
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-r from-primary to-accent-pink text-white font-bold py-3.5 px-6 rounded-2xl hover:opacity-90 transition-opacity shadow-sm">
                        {t("upgrade_btn")}
                    </button>
                </div>
            </div>
        </div>
    );
}
