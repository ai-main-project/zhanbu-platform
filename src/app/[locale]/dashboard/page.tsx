"use client";

import { useTranslations } from "next-intl";
import { LuckMeter } from "@/components/dashboard/luck-meter";
import { FortuneStats } from "@/components/dashboard/fortune-stats";
import { DailyOracle } from "@/components/dashboard/daily-oracle";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function DashboardPage() {
    const t = useTranslations("Dashboard");

    // Mock data simulation based on date
    const today = new Date();
    const daySeed = today.getDate() + today.getMonth() * 31;
    // Simple seeded random for demo
    const mockScore = 80 + (daySeed % 20);

    const stats = [
        { type: "love" as const, score: 4.0 },
        { type: "career" as const, score: 5.0 },
        { type: "wealth" as const, score: 3.0 },
    ];

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-0 bg-background-light dark:bg-background-dark">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <div className="flex size-12 shrink-0 items-center">
                    {/* Avatar placeholder */}
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/50" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKOG3q-0Mgp6LHlXuTfwmVt4jU0GbY3v8UvYOJMUgRzRbvMZoTct0zqlATi1u31iIVXUFVAFvX_Uzuh19_A_n1-ehRBjYddX2GIBzMM3P_yWjND4yv-ZwCRDbXkOEw7wBKaF7Td_E36IYxzafvFjNGbtC-k3BNHXkDrNdZqtuGQCS1hY72dTDo-BCZT7GwLlqJebLd4k641G9_4EcytvpsoBh3mTgVfnJm0wo5pqYY87hbDnkVi9Cv0krasaZUEfTxkbn0eAiMTJk")' }}></div>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{t("title")}</h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                    </button>
                </div>
            </div>

            {/* Hero Section: Luck Meter */}
            <LuckMeter score={mockScore} />

            {/* Fortune Modules (Stats) */}
            <FortuneStats stats={stats} />

            {/* AI Oracle Section */}
            <DailyOracle />

            {/* Bottom Navigation */}
            <BottomNavigation />
        </div>
    );
}
