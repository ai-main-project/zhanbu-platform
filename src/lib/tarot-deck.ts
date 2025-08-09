// src/lib/tarot-deck.ts

export type Arcana = "major" | "minor";

export interface TarotCard {
  id: number;
  arcana: Arcana;
  name_key: string; // Key for translation, e.g., "the_fool"
}

export const majorArcana: TarotCard[] = [
  { id: 0, arcana: "major", name_key: "the_fool" },
  { id: 1, arcana: "major", name_key: "the_magician" },
  { id: 2, arcana: "major", name_key: "the_high_priestess" },
  { id: 3, arcana: "major", name_key: "the_empress" },
  { id: 4, arcana: "major", name_key: "the_emperor" },
  { id: 5, arcana: "major", name_key: "the_hierophant" },
  { id: 6, arcana: "major", name_key: "the_lovers" },
  { id: 7, arcana: "major", name_key: "the_chariot" },
  { id: 8, arcana: "major", name_key: "strength" },
  { id: 9, arcana: "major", name_key: "the_hermit" },
  { id: 10, arcana: "major", name_key: "wheel_of_fortune" },
  { id: 11, arcana: "major", name_key: "justice" },
  { id: 12, arcana: "major", name_key: "the_hanged_man" },
  { id: 13, arcana: "major", name_key: "death" },
  { id: 14, arcana: "major", name_key: "temperance" },
  { id: 15, arcana: "major", name_key: "the_devil" },
  { id: 16, arcana: "major", name_key: "the_tower" },
  { id: 17, arcana: "major", name_key: "the_star" },
  { id: 18, arcana: "major", name_key: "the_moon" },
  { id: 19, arcana: "major", name_key: "the_sun" },
  { id: 20, arcana: "major", name_key: "judgement" },
  { id: 21, arcana: "major", name_key: "the_world" },
];

const suits = ["wands", "cups", "swords", "pentacles"];
const ranks = [
  "ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "page", "knight", "queen", "king"
];

export const minorArcana: TarotCard[] = suits.flatMap((suit, suitIndex) => 
  ranks.map((rank, rankIndex) => ({
    id: 22 + suitIndex * 14 + rankIndex,
    arcana: "minor",
    name_key: `${rank}_of_${suit}`
  }))
);

export const tarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];
