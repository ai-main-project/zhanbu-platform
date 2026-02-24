import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FourPillars } from "@/components/bazi/four-pillars";
import { ElementRadar } from "@/components/bazi/element-radar";
import { GrandmasterInsight } from "@/components/bazi/grandmaster-insight";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function BaziReportPage() {
    const t = useTranslations("BaziReport");

    return (
        <div className="bg-background-light text-slate-800 font-display antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
            {/* Top App Bar */}
            <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10 shadow-sm">
                <Link href="/" className="text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </Link>
                <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-wide flex-1 text-center">{t("title")}</h2>
                <button className="text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200">
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
