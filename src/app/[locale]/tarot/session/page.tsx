"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { tarotDeck, TarotCard as DeckCard } from "@/lib/tarot-deck";
import { TarotCard } from "@/components/tarot/tarot-card";
import { OracleChat } from "@/components/tarot/oracle-chat";
import { Link } from "@/i18n/navigation";

// Shuffle helper
const shuffleDeck = (deck: DeckCard[]) => {
    return [...deck].sort(() => Math.random() - 0.5);
};

export default function TarotSessionPage() {
    const t = useTranslations("TarotSession");
    const router = useRouter();

    const [shuffledDeck] = useState<DeckCard[]>(() => shuffleDeck(tarotDeck));
    const [drawnCards, setDrawnCards] = useState<(DeckCard | null)[]>([null, null, null]);
    const [isReversed, setIsReversed] = useState<boolean[]>([false, false, false]);
    const [isRevealed, setIsRevealed] = useState(false);
    const [cardsReady, setCardsReady] = useState(false);

    // Draw all three cards
    const drawCards = useCallback(() => {
        const cards = shuffledDeck.slice(0, 3);
        const reversed = cards.map(() => Math.random() > 0.5);
        setDrawnCards(cards);
        setIsReversed(reversed);
        setCardsReady(true);
    }, [shuffledDeck]);

    // Initialize cards on first render
    useState(() => {
        drawCards();
    });

    // Reveal all cards with animation
    const handleReveal = () => {
        if (!cardsReady) {
            drawCards();
        }
        setIsRevealed(true);
    };

    const positions: ("past" | "present" | "future")[] = ["past", "present", "future"];

    return (
        <div className="h-[100dvh] w-full overflow-hidden flex flex-col bg-background-light font-display">
            {/* Header */}
            <header className="flex items-center px-4 py-3 justify-between relative z-20 bg-white/80 backdrop-blur-md sticky top-0 border-b border-primary/10 shadow-sm">
                <Link
                    href="/tarot"
                    className="text-slate-600 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 hover:text-primary transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                </Link>
                <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
                    {t("title")}
                </h2>
                <div className="flex w-16 items-center justify-end">
                    <Link
                        href="/"
                        className="text-slate-400 hover:text-primary text-sm font-bold leading-normal tracking-wide shrink-0 transition-colors"
                    >
                        {t("end")}
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0 bg-mystic-gradient pointer-events-none"></div>

                {/* Floating Soft Blobs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[60px]"></div>
                <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent-pink/20 rounded-full blur-[80px]"></div>
                <div className="absolute top-10 right-10 w-24 h-24 bg-accent-mint/20 rounded-full blur-[40px]"></div>

                {/* Cards Display Area */}
                <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4 shrink-0 min-h-[45vh]">
                    {/* Cards Container */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-sm px-6 items-end justify-items-center">
                        {positions.map((position, index) => (
                            <TarotCard
                                key={position}
                                card={drawnCards[index] || undefined}
                                isRevealed={isRevealed}
                                isReversed={isReversed[index]}
                                position={position}
                                isCenter={position === "present"}
                            />
                        ))}
                    </div>

                    {/* Labels */}
                    <div className="grid grid-cols-3 w-full max-w-sm px-6 mt-6 text-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{t("past")}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">{t("present")}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{t("future")}</span>
                    </div>

                    {/* Reveal Button */}
                    {!isRevealed && (
                        <div className="mt-8 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-pink rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                            <button
                                onClick={handleReveal}
                                className="relative flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 px-8 bg-gradient-to-r from-primary to-accent-pink text-white gap-2 text-base font-bold leading-normal shadow-lg hover:scale-105 active:scale-95 transition-all"
                            >
                                <span className="material-symbols-outlined text-white text-[24px]">spark</span>
                                <span className="truncate tracking-wide">{t("reveal_all")}</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Oracle Chat Interface */}
                <OracleChat
                    cards={drawnCards}
                    isReversed={isReversed}
                    isRevealed={isRevealed}
                />
            </main>
        </div>
    );
}
