
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className={`w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center p-4 bg-midnight border-2 border-gold-leaf/50 ${isReversed ? 'transform rotate-180' : ''}`}>
      <h3 className="text-gold-leaf font-serif-display text-xl text-center">{t('name')}</h3>
      {/* In a real app, you'd have an <Image /> component here */}
    </div>
  );
}

function TarotCardBack() {
  return <div className="w-full h-full rounded-lg shadow-lg bg-cosmic-purple border-2 border-silvermoon/30"></div>;
}

function RevealedCard({ card, isReversed, question }: { card: DeckCard; isReversed: boolean; question: string; }) {
  const t = useTranslations("Tarot");
  const cardT = useTranslations(`Tarot.${card.name_key}`);

  return (
    <Card className="text-left bg-midnight/50 border-silvermoon/20">
      <CardHeader>
        <CardTitle className="text-gold-leaf font-serif-display text-3xl">{cardT('name')}</CardTitle>
        <CardDescription className="text-silvermoon/70">{cardT('keywords')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-bold text-stardust">{isReversed ? t('reversed_meaning') : t('upright_meaning')}</h4>
          <p className="text-silvermoon/90">{isReversed ? cardT('meaning_rev') : cardT('meaning_up')}</p>
        </div>
        {question && (
          <div className="p-4 border-t border-silvermoon/20">
            <p className="text-sm text-silvermoon/70">{t('your_question')}</p>
            <p className="italic text-silvermoon">{question}</p>
          </div>
        )}
        <Button onClick={() => window.location.reload()} className="mt-4">{t('draw_again_cta')}</Button>
      </CardContent>
    </Card>
  );
}

export default function SingleDrawPage() {
  const t = useTranslations("Tarot");
  const [question, setQuestion] = useState("");
  const [shuffledDeck, setShuffledDeck] = useState<DeckCard[]>(() => shuffleDeck(tarotDeck));
  const [drawnCard, setDrawnCard] = useState<DeckCard | null>(null);
  const [isReversed, setIsReversed] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleDraw = () => {
    const card = shuffledDeck[0];
    setDrawnCard(card);
    setIsReversed(Math.random() > 0.5);
    setIsRevealed(true);
  };
  
  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-serif-display text-4xl font-bold text-gold-leaf">{t("single_card_draw")}</h1>
      
      {!isRevealed ? (
        <>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-silvermoon/80">{t('focus_on_question')}</p>
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t('question_placeholder')}
            className="mt-6 max-w-xl mx-auto bg-midnight border-silvermoon/20"
          />
          <div className="mt-8 perspective-1000">
             <motion.div
                className="w-48 h-72 mx-auto cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={handleDraw}
              >
                <TarotCardBack />
              </motion.div>
          </div>
           <Button onClick={handleDraw} className="mt-8">{t('draw_card_cta')}</Button>
        </>
      ) : (
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="perspective-1000">
            <motion.div
              className="w-72 h-96 mx-auto"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute w-full h-full backface-hidden">
                  <TarotCardBack />
                </div>
                <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  {drawnCard && <TarotCardFace card={drawnCard} isReversed={isReversed} />}
                </div>
              </div>
            </motion.div>
          </div>
          
          {drawnCard && <RevealedCard card={drawnCard} isReversed={isReversed} question={question} />}
        </div>
      )}
    </div>
  );
}
