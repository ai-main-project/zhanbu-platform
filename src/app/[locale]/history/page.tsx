"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function HistoryPage() {
    const t = useTranslations("Profile");

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24 flex flex-col">
            <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <Link href="/profile" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </Link>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center">{t("vault_title")}</h2>
                <div className="w-12"></div>
            </header>

            <main className="flex-1 p-8 flex flex-col items-center justify-center text-center opacity-60">
                <span className="material-symbols-outlined text-6xl mb-4">history_edu</span>
                <p className="text-lg">{t("vault_desc")}</p>
            </main>
            <BottomNavigation />
        </div>
    );
}
