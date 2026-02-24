"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CameraViewfinder } from "@/components/face-reading/camera-viewfinder";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function FaceReadingPage() {
    const t = useTranslations("FaceReading");

    return (
        <div className="fixed inset-0 z-[100] bg-background-light font-display text-slate-800 overflow-hidden h-[100dvh] w-full select-none flex flex-col pt-safe">
            <div className="relative flex h-full w-full flex-col max-w-md mx-auto bg-background-light overflow-hidden">
                {/* Frosted Header Overlaying Viewfinder */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/40 to-transparent pb-10">
                    <Link href="/" className="text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors shadow-sm">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h2 className="text-white text-lg font-bold tracking-tight drop-shadow-md">{t("title")}</h2>
                    <button className="text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors shadow-sm">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                {/* Viewfinder Wrapper (Keeps dark context for the camera stream) */}
                <div className="flex-1 w-full bg-black relative">
                    <CameraViewfinder />
                </div>

                {/* Action Controls - Light Theme */}
                <div className="relative flex-none h-32 flex items-center justify-center px-6 pb-2 pt-2 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 -mt-6">
                    <div className="flex items-center justify-between w-full max-w-xs">
                        {/* Gallery Button */}
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-active:scale-95 transition-transform overflow-hidden shadow-soft">
                                <div
                                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWIUq8oaDmHnCM5NFPhjXjCkjLrgbjlUn3TRKjTgpd9AZEx0fdS6ZBKEO9XCnd0f1VZEVA8KW6cZmKhADnG3u9dgYnIci3J4uSukxEcUo99DA0wffNCLI7iaFtKA20L9Ya64L-onlNbeW3VPKqbUxi4k7-D95CvMbvkItDCSCxjr-l5eAnnYxaUw8ESrv6-oCtCXf48eQ47jpbXL8fSSGFLiMydhScbDayBhyqpgX_GUJjD1OmPzGSSno8Lvi1GN3upvofD_PB9F4')" }}
                                ></div>
                            </div>
                        </button>

                        {/* Shutter Button */}
                        <button className="relative group flex items-center justify-center -mt-8">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-300"></div>
                            <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-lg relative z-10 transition-all group-active:scale-95">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center shadow-inner pt-0.5 pl-0.5">
                                    <span className="material-symbols-outlined text-white text-[32px] drop-shadow-sm">auto_awesome</span>
                                </div>
                            </div>
                        </button>

                        {/* Filters Button */}
                        <button className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 group-active:scale-95 transition-all shadow-soft">
                                <span className="material-symbols-outlined text-xl">face</span>
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
