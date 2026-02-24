"use client";

import { useTranslations } from "next-intl";

export function ProfileHeader() {
    const t = useTranslations("Profile");

    return (
        <div className="flex px-4 py-6 @container">
            <div className="flex w-full flex-col gap-6 items-center">
                <div className="flex gap-4 flex-col items-center relative">
                    <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-primary via-accent-pink to-accent-mint shadow-soft">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white shadow-sm"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs-tqAm91DA3NdZWoM-0GeGajZnUwQ6x_lG9b215jzUPyJUvp1G7twRUpz0XuLC587Kt79meFmBT6YgYknGpJys2WOcx0b991X-ZIq7pzLY-S2O_W8i9kl6TQruH_SwE7NGhe-BAtKLnv3oY6SS6lZxkFNOpu5zmULBPYHmhz9xx4eHdmr1L5utt-rjtFwCL2C_q2tXTXZ9_QJhlf3xfNxSdABH85SiInYOrMc3GzhCgAsqLj26PP6GcnUNcjQfjPsmvKieaZ12mE")' }}
                        >
                        </div>
                        {/* Status Dot */}
                        <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-emerald-400 border-4 border-white shadow-sm"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <h1 className="text-slate-900 text-[28px] font-bold leading-tight tracking-[-0.015em] text-center mb-1">{t("name_placeholder")}</h1>
                        <div className="px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 flex items-center gap-2 shadow-sm">
                            <span className="material-symbols-outlined text-amber-500 text-[16px]">verified</span>
                            <p className="text-amber-600 text-sm font-bold leading-normal text-center uppercase tracking-wider">{t("level_badge")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
