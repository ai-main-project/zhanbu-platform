"use client";

import { useTranslations } from "next-intl";

export function PremiumBanner() {
    const t = useTranslations("Profile");

    return (
        <div className="px-4 py-6">
            <div className="relative w-full rounded-[2rem] overflow-hidden group cursor-pointer">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary opacity-90"></div>
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 animate-shimmer opacity-30 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col items-center text-center gap-3 border border-yellow-500/30 rounded-[2rem]">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 text-white mb-1 shadow-lg shadow-amber-500/40">
                        <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold tracking-tight mb-1">{t("premium_title")}</h3>
                        <p className="text-white/80 text-sm font-light">{t("premium_desc")}</p>
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold py-3 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-shadow">
                        {t("upgrade_btn")}
                    </button>
                </div>
            </div>
        </div>
    );
}
