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
                <div className={`absolute inset-0 backface-hidden rounded-2xl ${isCenter ? 'bg-gradient-to-br from-primary to-accent-pink border-white shadow-soft-hover ring-2 ring-primary/30' : 'bg-gradient-to-br from-primary-light to-white border-primary/20 shadow-soft'} border-2 overflow-hidden`}>
                    <div className={`absolute inset-2 border-2 ${isCenter ? 'border-white/40' : 'border-primary/10'} rounded-xl tarot-pattern opacity-50`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`material-symbols-outlined ${isCenter ? 'text-white text-[40px] animate-bounce-soft' : 'text-primary/40 text-3xl'}`}>
                            {positionIcons[position]}
                        </span>
                    </div>
                </div>

                {/* Card Face */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white border-2 border-primary/20 shadow-soft overflow-hidden ${isReversed ? 'rotate-180' : ''}`}>
                    <div className="absolute inset-1.5 border border-primary/10 rounded-xl bg-slate-50/50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        {card && (
                            <>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                    <span className="material-symbols-outlined text-primary text-2xl">
                                        {positionIcons[position]}
                                    </span>
                                </div>
                                <h3 className="text-slate-800 font-bold text-sm text-center leading-tight px-1">
                                    {t(`${card.name_key}.name`)}
                                </h3>
                                {isReversed && (
                                    <span className="text-xs text-slate-500 mt-1">({t(`${card.name_key}.reversed_meaning`).split(" ")[0]})</span>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
