"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function HistoryPage() {
    const t = useTranslations("Profile");

    return (
        <div className="min-h-screen bg-background-light pb-24 flex flex-col font-display">
            <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10 shadow-sm">
                <Link href="/profile" className="text-slate-600 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </Link>
                <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-wide flex-1 text-center">{t("vault_title")}</h2>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-8 flex flex-col items-center justify-center text-center opacity-60 text-slate-400">
                <span className="material-symbols-outlined text-6xl mb-4 text-primary">history_edu</span>
                <p className="text-lg font-medium">{t("vault_desc")}</p>
            </main>
            <BottomNavigation />
        </div>
    );
}
