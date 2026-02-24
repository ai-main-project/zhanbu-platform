"use client";

import { motion } from "framer-motion";
import { TarotCard as DeckCard } from "@/lib/tarot-deck";
import { useTranslations } from "next-intl";

interface TarotCardProps {
    card?: DeckCard;
    isRevealed: boolean;
    isReversed?: boolean;
    position: "past" | "present" | "future";
    onClick?: () => void;
    isCenter?: boolean;
}

export function TarotCard({
    card,
    isRevealed,
    isReversed = false,
    position,
    onClick,
    isCenter = false
}: TarotCardProps) {
    const t = useTranslations("Tarot");
    const cardT = card ? useTranslations(`Tarot.${card.name_key}`) : null;

    const positionIcons = {
        past: "history",
        present: "visibility",
        future: "auto_awesome"
    };

    return (
        <div
            className={`perspective-1000 w-full aspect-[2/3.2] cursor-pointer transition-all duration-500 hover:-translate-y-2 ${isCenter ? 'scale-110 z-10' : ''}`}
            onClick={onClick}
        >
            <motion.div
                className="relative w-full h-full transform-style-3d"
                initial={false}
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Card Back */}
                <div className={`absolute inset-0 backface-hidden rounded-lg ${isCenter ? 'bg-[#231b33] border-accent-gold/60 shadow-[0_0_25px_rgba(91,19,236,0.2)] ring-1 ring-accent-gold/20' : 'bg-[#1a1528] border-accent-gold/30 shadow-[0_0_15px_rgba(0,0,0,0.5)]'} border overflow-hidden`}>
                    <div className={`absolute inset-1 border ${isCenter ? 'border-accent-gold/40' : 'border-accent-gold/20 opacity-60'} rounded tarot-pattern`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`material-symbols-outlined ${isCenter ? 'text-accent-gold/60 text-3xl animate-pulse' : 'text-accent-gold/30 text-2xl'}`}>
                            {positionIcons[position]}
                        </span>
                    </div>
                </div>

                {/* Card Face */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-lg bg-gradient-to-br from-[#2a1f40] to-[#1a1528] border border-accent-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] overflow-hidden ${isReversed ? 'rotate-180' : ''}`}>
                    <div className="absolute inset-1 border border-accent-gold/30 rounded"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                        {cardT && (
                            <>
                                <span className="material-symbols-outlined text-accent-gold text-4xl mb-2">
                                    {positionIcons[position]}
                                </span>
                                <h3 className="text-accent-gold font-bold text-sm text-center leading-tight">
                                    {cardT("name")}
                                </h3>
                                {isReversed && (
                                    <span className="text-xs text-white/50 mt-1">({t("reversed_meaning").split(" ")[0]})</span>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
