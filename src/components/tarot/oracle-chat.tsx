"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { TarotCard as DeckCard } from "@/lib/tarot-deck";

interface Message {
    id: string;
    role: "oracle" | "user";
    content: string;
}

interface OracleChatProps {
    cards: (DeckCard | null)[];
    isReversed: boolean[];
    isRevealed: boolean;
    onSendMessage?: (message: string) => void;
}

export function OracleChat({ cards, isReversed, isRevealed, onSendMessage }: OracleChatProps) {
    const t = useTranslations("TarotSession");
    const cardT = useTranslations("Tarot");
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Add intro message on mount
    useEffect(() => {
        setMessages([{
            id: "intro",
            role: "oracle",
            content: t("oracle_intro")
        }]);
    }, [t]);

    // Add reading message when cards are revealed
    useEffect(() => {
        if (isRevealed && cards.every(c => c !== null)) {
            generateReading();
        }
    }, [isRevealed, cards]);

    const generateReading = async () => {
        setIsLoading(true);

        const positions = ["past", "present", "future"];
        const cardDetails = cards.map((card, index) => {
            if (!card) return null;
            const name = cardT(`${card.name_key}.name`);
            const meaning = isReversed[index]
                ? cardT(`${card.name_key}.meaning_rev`)
                : cardT(`${card.name_key}.meaning_up`);
            return {
                position: positions[index],
                name,
                meaning,
                reversed: isReversed[index]
            };
        }).filter(Boolean);

        try {
            const response = await fetch("/api/tarot-reading", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cards: cardDetails,
                    question: messages.find(m => m.role === "user")?.content || ""
                })
            });

            if (response.ok) {
                const reader = response.body?.getReader();
                const decoder = new TextDecoder();
                let fullContent = "";

                // Add placeholder message
                const readingMsgId = `reading-${Date.now()}`;
                setMessages(prev => [...prev, {
                    id: readingMsgId,
                    role: "oracle",
                    content: ""
                }]);

                if (reader) {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value);
                        fullContent += chunk;

                        // Update the reading message
                        setMessages(prev => prev.map(m =>
                            m.id === readingMsgId
                                ? { ...m, content: fullContent }
                                : m
                        ));
                    }
                }
            } else {
                // Fallback message if API fails
                setMessages(prev => [...prev, {
                    id: `reading-${Date.now()}`,
                    role: "oracle",
                    content: t("oracle_reading_fallback")
                }]);
            }
        } catch (error) {
            console.error("Error generating reading:", error);
            setMessages(prev => [...prev, {
                id: `error-${Date.now()}`,
                role: "oracle",
                content: t("oracle_error")
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            content: input.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        onSendMessage?.(input.trim());
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex-1 bg-white/5 backdrop-blur-xl border-t border-white/10 rounded-t-3xl relative flex flex-col overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
            {/* Handle */}
            <div className="w-full flex justify-center pt-3 pb-1">
                <div className="w-12 h-1 bg-white/20 rounded-full"></div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-end gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                        {message.role === "oracle" && (
                            <div
                                className="bg-gradient-to-br from-primary/50 to-purple-900 rounded-full w-10 h-10 shrink-0 border border-accent-gold/30 shadow-[0_0_10px_rgba(212,175,55,0.2)] flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-accent-gold text-lg">auto_awesome</span>
                            </div>
                        )}
                        <div className={`flex flex-1 flex-col gap-1 ${message.role === "user" ? "items-end" : "items-start"}`}>
                            {message.role === "oracle" && (
                                <div className="flex items-center gap-2">
                                    <p className="text-[#a492c9] text-[11px] font-bold uppercase tracking-wider">{t("oracle_name")}</p>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "12px" }}>verified</span>
                                </div>
                            )}
                            <div className={`text-base font-normal leading-relaxed max-w-[320px] rounded-2xl px-5 py-4 shadow-md ${message.role === "user"
                                    ? "rounded-br-none bg-primary text-white"
                                    : "rounded-bl-none bg-[#2f2348]/80 text-white/90 border border-white/5 backdrop-blur-sm"
                                }`}>
                                {message.content.split("\n").map((line, i) => (
                                    <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                    <div className="flex items-end gap-3">
                        <div className="bg-gradient-to-br from-primary/50 to-purple-900 rounded-full w-10 h-10 shrink-0 border border-accent-gold/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-accent-gold text-lg">auto_awesome</span>
                        </div>
                        <div className="flex items-center gap-1 px-5 py-4 rounded-2xl rounded-bl-none bg-[#2f2348]/80">
                            <span className="w-2 h-2 bg-accent-gold rounded-full typing-dot-1"></span>
                            <span className="w-2 h-2 bg-accent-gold rounded-full typing-dot-2"></span>
                            <span className="w-2 h-2 bg-accent-gold rounded-full typing-dot-3"></span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} className="h-2" />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-background-dark/90 backdrop-blur-lg border-t border-white/5 pb-6">
                <div className="flex items-center gap-3">
                    <label className="flex flex-col h-12 flex-1">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-inner bg-[#2f2348] border border-white/5 focus-within:border-primary/50 transition-colors">
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#a492c9]/70 px-4 text-sm font-normal leading-normal"
                                placeholder={t("input_placeholder")}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="flex items-center justify-center pr-2">
                                <button
                                    className="flex items-center justify-center size-8 rounded-lg bg-primary hover:bg-primary/80 text-white transition-colors disabled:opacity-50"
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
