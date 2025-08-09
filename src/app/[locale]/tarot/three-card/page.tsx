
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { tarotDeck, TarotCard as DeckCard } from "@/lib/tarot-deck";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

// A simple shuffle function
const shuffleDeck = (deck: DeckCard[]) => {
  return [...deck].sort(() => Math.random() - 0.5);
};

// Placeholder for a physical card look
function TarotCardFace({ card, isReversed }: { card: DeckCard; isReversed: boolean }) {
  const t = useTranslations(`Tarot.${card.name_key}`);
  return (
    <div className={`w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center p-2 bg-midnight border-2 border-gold-leaf/50 ${isReversed ? 'transform rotate-180' : ''}`}>
      <h3 className="text-gold-leaf font-serif-display text-lg text-center">{t('name')}</h3>
    </div>
  );
}

function TarotCardBack() {
  return <div className="w-full h-full rounded-lg shadow-lg bg-cosmic-purple border-2 border-silvermoon/30"></div>;
}

function RevealedCard({ card, isReversed, position }: { card: DeckCard; isReversed: boolean; position: string; }) {
  const t = useTranslations("Tarot");
  const cardT = useTranslations(`Tarot.${card.name_key}`);

  return (
    <Card className="text-left bg-midnight/50 border-silvermoon/20 h-full">
      <CardHeader>
        <CardTitle className="text-stardust font-serif-display text-xl">{position}</CardTitle>
        <CardDescription className="text-gold-leaf text-2xl">{cardT('name')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-silvermoon/70 italic">{cardT('keywords')}</p>
        <div>
          <h4 className="font-bold text-stardust text-sm">{isReversed ? t('reversed_meaning') : t('upright_meaning')}</h4>
          <p className="text-silvermoon/90 text-sm">{isReversed ? cardT('meaning_rev') : cardT('meaning_up')}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ThreeCardSpreadPage() {
  const t = useTranslations("Tarot");
  const [question, setQuestion] = useState("");
  const [shuffledDeck, setShuffledDeck] = useState<DeckCard[]>(() => shuffleDeck(tarotDeck));
  const [drawnCards, setDrawnCards] = useState<(DeckCard | null)[]>([]);
  const [isReversed, setIsReversed] = useState<boolean[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleDraw = () => {
    if (drawnCards.length < 3) {
      const newDrawnCards = [...drawnCards, shuffledDeck[drawnCards.length]];
      const newReversed = [...isReversed, Math.random() > 0.5];
      setDrawnCards(newDrawnCards);
      setIsReversed(newReversed);
      if (newDrawnCards.length === 3) {
        setTimeout(() => setIsRevealed(true), 500);
      }
    }
  };

  const positions = [t('position_past'), t('position_present'), t('position_future')];

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-serif-display text-4xl font-bold text-gold-leaf">{t("three_card_spread")}</h1>
      
      {!isRevealed ? (
        <>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-silvermoon/80">{t('focus_on_question_three')}</p>
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t('question_placeholder')}
            className="mt-6 max-w-xl mx-auto bg-midnight border-silvermoon/20"
          />
          <div className="mt-8 flex justify-center gap-4 h-72 items-center">
            {Array(3 - drawnCards.length).fill(null).map((_, index) => (
              <motion.div
                key={index}
                className="w-48 h-72 cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={handleDraw}
              >
                <TarotCardBack />
              </motion.div>
            ))}
            {drawnCards.map((card, index) => (
              <div key={index} className="w-48 h-72">
                {card && <TarotCardFace card={card} isReversed={isReversed[index]} />}
              </div>
            ))}
          </div>
           <Button onClick={() => setIsRevealed(true)} className="mt-8" disabled={drawnCards.length < 3}>
             {t('reveal_cards_cta', { count: 3 - drawnCards.length })}
           </Button>
        </>
      ) : (
        <div className="mt-8">
          {question && (
            <div className="mb-8 p-4 border-b border-silvermoon/20">
              <p className="text-sm text-silvermoon/70">{t('your_question')}</p>
              <p className="italic text-silvermoon text-lg">{question}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {drawnCards.map((card, index) => (
              card && <RevealedCard key={index} card={card} isReversed={isReversed[index]} position={positions[index]} />
            ))}
          </div>
          <Button onClick={() => window.location.reload()} className="mt-12">{t('draw_again_cta')}</Button>
        </div>
      )}
    </div>
  );
}
