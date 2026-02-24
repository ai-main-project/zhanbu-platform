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
        <div className="h-screen w-full overflow-hidden flex flex-col bg-background-dark">
            {/* Header */}
            <header className="flex items-center px-4 py-3 justify-between relative z-20 bg-background-dark/80 backdrop-blur-md sticky top-0 border-b border-white/5">
                <Link
                    href="/tarot"
                    className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "24px" }}>arrow_back_ios_new</span>
                </Link>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
                    {t("title")}
                </h2>
                <div className="flex w-16 items-center justify-end">
                    <Link
                        href="/"
                        className="text-[#a492c9] hover:text-white text-sm font-bold leading-normal tracking-[0.015em] shrink-0 transition-colors"
                    >
                        {t("end")}
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_#2e1a47_0%,_#161022_70%)] pointer-events-none"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent-gold rounded-full opacity-50 blur-[1px]"></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-30 blur-[2px]"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

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
                    <div className="grid grid-cols-3 w-full max-w-sm px-6 mt-4 text-center">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">{t("past")}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-bold gold-shimmer">{t("present")}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">{t("future")}</span>
                    </div>

                    {/* Reveal Button */}
                    {!isRevealed && (
                        <div className="mt-8 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                            <button
                                onClick={handleReveal}
                                className="relative flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] shadow-[0_0_30px_rgba(91,19,236,0.4)] hover:scale-105 active:scale-95 transition-all border border-white/10"
                            >
                                <span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>spark</span>
                                <span className="truncate">{t("reveal_all")}</span>
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
