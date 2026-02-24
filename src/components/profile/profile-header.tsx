"use client";

import { useTranslations } from "next-intl";

export function ProfileHeader() {
    const t = useTranslations("Profile");

    return (
        <div className="flex px-4 py-6 @container">
            <div className="flex w-full flex-col gap-6 items-center">
                <div className="flex gap-4 flex-col items-center relative">
                    {/* Aura Ring Avatar */}
                    <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-primary via-purple-500 to-indigo-500 shadow-glow-aura">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-background-light dark:border-background-dark"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs-tqAm91DA3NdZWoM-0GeGajZnUwQ6x_lG9b215jzUPyJUvp1G7twRUpz0XuLC587Kt79meFmBT6YgYknGpJys2WOcx0b991X-ZIq7pzLY-S2O_W8i9kl6TQruH_SwE7NGhe-BAtKLnv3oY6SS6lZxkFNOpu5zmULBPYHmhz9xx4eHdmr1L5utt-rjtFwCL2C_q2tXTXZ9_QJhlf3xfNxSdABH85SiInYOrMc3GzhCgAsqLj26PP6GcnUNcjQfjPsmvKieaZ12mE")' }}
                        >
                        </div>
                        {/* Status Dot */}
                        <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-emerald-500 border-4 border-background-light dark:border-background-dark"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <h1 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] text-center mb-1">Alex Star-Gazer</h1>
                        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-600/20 to-amber-600/20 border border-yellow-500/30 flex items-center gap-2">
                            <span className="material-symbols-outlined text-yellow-500 text-[16px]">verified</span>
                            <p className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold leading-normal text-center uppercase tracking-wider">{t("level_badge")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
