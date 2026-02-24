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
        <div className="flex-1 bg-white/90 backdrop-blur-xl border-t border-primary/10 rounded-t-[2.5rem] relative flex flex-col overflow-hidden shadow-[0_-10px_40px_rgba(167,139,250,0.1)]">
            {/* Handle */}
            <div className="w-full flex justify-center pt-3 pb-1">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
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
                                className="bg-primary/10 rounded-full w-10 h-10 shrink-0 border border-primary/20 shadow-sm flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                            </div>
                        )}
                        <div className={`flex flex-1 flex-col gap-1 ${message.role === "user" ? "items-end" : "items-start"}`}>
                            {message.role === "oracle" && (
                                <div className="flex items-center gap-2 px-1">
                                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">{t("oracle_name")}</p>
                                    <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: "12px" }}>verified</span>
                                </div>
                            )}
                            <div className={`text-sm font-medium leading-relaxed max-w-[320px] rounded-2xl px-5 py-4 shadow-soft ${message.role === "user"
                                ? "rounded-br-none bg-gradient-to-r from-primary to-accent-pink text-white"
                                : "rounded-bl-none bg-white text-slate-800 border border-slate-100"
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
                        <div className="bg-primary/10 rounded-full w-10 h-10 shrink-0 border border-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-5 py-4 rounded-2xl rounded-bl-none bg-white shadow-soft border border-slate-100">
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} className="h-2" />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/95 backdrop-blur-xl border-t border-primary/5 pb-8 relative z-20">
                <div className="flex items-center gap-3">
                    <label className="flex flex-col h-14 flex-1">
                        <div className="flex w-full flex-1 items-stretch rounded-2xl h-full shadow-inner bg-slate-50 border border-slate-200 focus-within:border-primary/50 focus-within:bg-white transition-all">
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-slate-800 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-400 px-5 text-base font-medium leading-normal"
                                placeholder={t("input_placeholder")}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="flex items-center justify-center pr-2">
                                <button
                                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-pink hover:opacity-90 text-white transition-all shadow-md disabled:opacity-50 disabled:grayscale"
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>send</span>
                                </button>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
