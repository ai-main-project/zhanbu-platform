"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { ProfileHeader } from "@/components/profile/profile-header";
import { StatsCarousel } from "@/components/profile/stats-carousel";
import { DestinyMenu } from "@/components/profile/destiny-menu";
import { PremiumBanner } from "@/components/profile/premium-banner";

export default function ProfilePage() {
    const t = useTranslations("Profile");

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 min-h-screen pb-24">
            <div className="relative flex h-full w-full flex-col overflow-x-hidden max-w-md mx-auto">
                {/* Top App Bar */}
                <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
                    <Link href="/" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </Link>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{t("title")}</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="text-primary/80 dark:text-[#a492c9] hover:text-primary dark:hover:text-white text-base font-bold leading-normal tracking-[0.015em] shrink-0 transition-colors">Edit</button>
                    </div>
                </header>

                {/* Profile Content */}
                <ProfileHeader />
                <StatsCarousel />
                <DestinyMenu />
                <PremiumBanner />

                <div className="h-10"></div>
            </div>
            <BottomNavigation />
        </div>
    );
}
