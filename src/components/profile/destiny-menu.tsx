"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function DestinyMenu() {
    const t = useTranslations("Profile");

    return (
        <div className="flex flex-col gap-2 px-4 py-2">
            <h3 className="px-2 text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t("my_journey")}</h3>

            {/* Item 1: Destiny Vault -> History */}
            <Link href="/history" className="group flex items-center gap-4 bg-white p-4 rounded-[1.5rem] w-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm hover:shadow-md">
                <div className="text-white flex items-center justify-center rounded-2xl bg-primary shrink-0 size-12 shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <div className="flex-1 text-left">
                    <p className="text-slate-900 text-base font-semibold leading-normal">{t("vault_title")}</p>
                    <p className="text-slate-500 text-xs font-normal">{t("vault_desc")}</p>
                </div>
                <div className="shrink-0 text-slate-400">
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
            </Link>

            {/* Item 2: Saved Tarot -> Tarot Hub */}
            <Link href="/tarot" className="group flex items-center gap-4 bg-white p-4 rounded-[1.5rem] w-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm hover:shadow-md">
                <div className="text-white flex items-center justify-center rounded-2xl bg-[#a855f7] shrink-0 size-12 shadow-md shadow-[#a855f7]/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">style</span>
                </div>
                <div className="flex-1 text-left">
                    <p className="text-slate-900 text-base font-semibold leading-normal">{t("saved_tarot")}</p>
                    <p className="text-slate-500 text-xs font-normal">{t("saved_tarot_desc")}</p>
                </div>
                <div className="shrink-0 text-slate-400">
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
            </Link>

            {/* Item 3: Credits -> Placeholder */}
            <button className="group flex items-center gap-4 bg-white p-4 rounded-[1.5rem] w-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm hover:shadow-md">
                <div className="text-white flex items-center justify-center rounded-2xl bg-[#0ea5e9] shrink-0 size-12 shadow-md shadow-[#0ea5e9]/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div className="flex-1 text-left">
                    <p className="text-slate-900 text-base font-semibold leading-normal">{t("credits_title")}</p>
                    <p className="text-slate-500 text-xs font-normal">{t("credits_desc")}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-xs font-bold">3 Left</span>
                </div>
            </button>

            {/* Item 4: Settings -> Placeholder */}
            <button className="group flex items-center gap-4 bg-white p-4 rounded-[1.5rem] w-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm hover:shadow-md">
                <div className="text-white flex items-center justify-center rounded-2xl bg-[#64748b] shrink-0 size-12 shadow-md shadow-[#64748b]/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <div className="flex-1 text-left">
                    <p className="text-slate-900 text-base font-semibold leading-normal">{t("settings_title")}</p>
                    <p className="text-slate-500 text-xs font-normal">{t("settings_desc")}</p>
                </div>
                <div className="shrink-0 text-slate-400">
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
            </button>
        </div>
    );
}
