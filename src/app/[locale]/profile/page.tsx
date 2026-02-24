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
        <div className="bg-background-light font-display text-slate-800 transition-colors py-4 duration-200 min-h-screen pb-24">
            <div className="relative flex h-full w-full flex-col overflow-x-hidden max-w-md mx-auto">
                {/* Top App Bar */}
                <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10 shadow-sm">
                    <Link href="/" className="text-slate-600 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </Link>
                    <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-tight flex-1 text-center">{t("title")}</h2>
                    <div className="flex w-10 items-center justify-end">
                        <button className="text-primary hover:text-primary-dark hover:bg-primary/5 size-10 rounded-full flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
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
