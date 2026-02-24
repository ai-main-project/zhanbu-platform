import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FourPillars } from "@/components/bazi/four-pillars";
import { ElementRadar } from "@/components/bazi/element-radar";
import { GrandmasterInsight } from "@/components/bazi/grandmaster-insight";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function BaziReportPage() {
    const t = useTranslations("BaziReport");

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-black min-h-screen flex flex-col">
            {/* Top App Bar */}
            <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <Link href="/" className="text-white hover:text-primary transition-colors flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </Link>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center">{t("title")}</h2>
                <button className="text-white hover:text-primary transition-colors flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10">
                    <span className="material-symbols-outlined text-[24px]">share</span>
                </button>
            </header>

            {/* Main Content */}
            <main className="flex flex-col gap-6 p-4">
                <FourPillars />
                <ElementRadar />
                <GrandmasterInsight />
            </main>

            <BottomNavigation />
        </div>
    );
}
