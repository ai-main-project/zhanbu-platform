"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CameraViewfinder } from "@/components/face-reading/camera-viewfinder";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function FaceReadingPage() {
    const t = useTranslations("FaceReading");

    return (
        <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen w-full select-none flex flex-col">
            <div className="relative flex h-full w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
                {/* Transparent Header */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 pt-6 bg-gradient-to-b from-background-dark/80 to-transparent">
                    <Link href="/" className="text-white/80 p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h2 className="text-white text-lg font-bold tracking-tight">{t("title")}</h2>
                    <button className="text-white/80 p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                {/* Viewfinder */}
                <CameraViewfinder />

                {/* Action Controls */}
                <div className="relative flex-none h-32 flex items-center justify-center px-6 pb-2 pt-2">
                    <div className="flex items-center justify-between w-full max-w-xs">
                        {/* Gallery Button */}
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 rounded-xl bg-[#221933] border border-white/10 flex items-center justify-center group-active:scale-95 transition-transform overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWIUq8oaDmHnCM5NFPhjXjCkjLrgbjlUn3TRKjTgpd9AZEx0fdS6ZBKEO9XCnd0f1VZEVA8KW6cZmKhADnG3u9dgYnIci3J4uSukxEcUo99DA0wffNCLI7iaFtKA20L9Ya64L-onlNbeW3VPKqbUxi4k7-D95CvMbvkItDCSCxjr-l5eAnnYxaUw8ESrv6-oCtCXf48eQ47jpbXL8fSSGFLiMydhScbDayBhyqpgX_GUJjD1OmPzGSSno8Lvi1GN3upvofD_PB9F4')" }}
                                ></div>
                            </div>
                        </button>

                        {/* Shutter Button */}
                        <button className="relative group flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:bg-primary/50 transition-all duration-300"></div>
                            <div className="w-20 h-20 rounded-full border-[3px] border-white flex items-center justify-center relative z-10 bg-transparent transition-all group-active:scale-95">
                                <div className="w-[66px] h-[66px] rounded-full bg-primary shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center group-hover:bg-[#6c2bfd] transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl opacity-80">auto_awesome</span>
                                </div>
                            </div>
                        </button>

                        {/* Filters Button */}
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 rounded-full bg-[#221933] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-active:scale-95 transition-all shadow-lg">
                                <span className="material-symbols-outlined">face</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Shared Bottom Navigation */}
                <BottomNavigation />
            </div>
        </div>
    );
}
