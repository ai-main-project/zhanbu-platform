"use client";

import { useTranslations } from "next-intl";

export function CameraViewfinder() {
    const t = useTranslations("FaceReading");

    return (
        <div className="flex-1 flex flex-col items-center justify-center relative p-4 pb-0 mt-8 min-h-[60vh]">
            {/* Camera Viewfinder Container */}
            <div className="relative w-full h-full max-h-[70vh] rounded-2xl overflow-hidden bg-black shadow-[0_0_30px_rgba(91,19,236,0.15)] ring-1 ring-white/10 group">

                {/* Simulated Camera Feed (Static Image for Demo) */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90 transition-opacity duration-1000"
                    role="img"
                    aria-label="Camera feed simulation"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMgBFHl7Hqa1hShNfIF5LT_mtS0qZgfIiUBXbsHPOWjB3LRp9UkEre0t5jtR3UgLpGhIUy01JQi9esX3f2liYdorf38es-gsQ6dbz-asa5UZvp-9gGhC8RFCPHE90Qdd7LT5W3y2v9F17KxwNjLb3L1MTES83vfOpU9fjJjoSMXyk5FAYg7zouZ0gtft90MNGA-62lgPaPMlZerkQQKJO4qGGrkGYemDrjgWjj9s29bvUo5DaHFpcosteO5-m1Y85c2KfYxc-v5ww')"
                    }}
                ></div>

                {/* Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>

                {/* Floating Progress Bar */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[85%] z-20">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-white/90 text-xs font-medium tracking-wider uppercase drop-shadow-md">{t("scanning")}</span>
                            <span className="text-tech-cyan text-xs font-bold font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">85%</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/40 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
                            <div className="h-full bg-primary relative rounded-full w-[85%]">
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-center text-white/80 text-[10px] mt-1 font-light">{t("hold_steady")}</p>
                    </div>
                </div>

                {/* Face Mesh Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                    {/* Central Target Box */}
                    <div className="relative w-64 h-80 border border-white/20 rounded-[3rem] overflow-hidden">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tech-cyan rounded-tl-xl"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-tech-cyan rounded-tr-xl"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-tech-cyan rounded-bl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tech-cyan rounded-br-xl"></div>

                        {/* Facial Landmarks */}
                        <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-tech-cyan rounded-full shadow-[0_0_10px_#00f0ff] animate-pulse"></div>
                        <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-tech-cyan rounded-full shadow-[0_0_10px_#00f0ff] animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-2 h-2 bg-tech-cyan/70 rounded-full"></div>
                        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-8 h-1 bg-tech-cyan/40 rounded-full"></div>

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 256 320" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 110 L128 170 L176 110" stroke="rgba(0, 240, 255, 0.3)" strokeDasharray="4 4" strokeWidth="1"></path>
                            <path d="M128 170 L128 250" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1"></path>
                            <circle cx="128" cy="170" r="40" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="1"></circle>
                        </svg>

                        {/* Scanning Beam */}
                        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tech-cyan to-transparent shadow-[0_0_15px_#00f0ff] animate-scan z-10"></div>
                    </div>
                </div>

                {/* Side Controls */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary/40 transition-all">
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </button>
                    <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary/40 transition-all">
                        <span className="material-symbols-outlined text-[20px]">flip_camera_ios</span>
                    </button>
                    <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary/40 transition-all">
                        <span className="material-symbols-outlined text-[20px]">grid_on</span>
                    </button>
                </div>

                {/* Bottom Privacy Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">{t("camera_active")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
