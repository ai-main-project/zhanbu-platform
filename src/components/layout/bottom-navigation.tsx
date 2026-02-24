"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function BottomNavigation() {
    const t = useTranslations("BottomNav");
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname?.startsWith(path);
    };

    const navItems = [
        {
            href: '/',
            icon: 'home',
            label: t('home'),
            active: pathname === '/'
        },
        {
            href: '/tarot',
            icon: 'style',
            label: t('tarot'),
            active: pathname?.startsWith('/tarot')
        },
        {
            href: '/face-reading',
            icon: 'face',
            label: t('face'),
            active: pathname?.startsWith('/face-reading')
        },
        {
            href: '/astrology',
            icon: 'auto_awesome',
            label: t('astrology'),
            active: pathname?.startsWith('/astrology') || pathname?.startsWith('/bazi')
        },
        {
            href: '/profile',
            icon: 'person',
            label: t('profile'),
            active: pathname?.startsWith('/profile') || pathname?.startsWith('/dashboard') || pathname === '/history'
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#161022]/90 backdrop-blur-lg border-t border-white/5 pb-5 pt-2 px-2 z-50">
            <div className="flex justify-around items-end max-w-md mx-auto h-full">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 min-w-[60px] group transition-all duration-300 ${item.active ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <div className="relative p-1">
                            <span className={`material-symbols-outlined text-[26px] transition-transform duration-300 ${item.active ? 'scale-110 fill-current' : 'group-hover:scale-105'}`}>
                                {item.icon}
                            </span>
                            {item.active && (
                                <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(236,182,19,0.5)]"></div>
                            )}
                        </div>
                        <span className={`text-[10px] font-medium tracking-wide ${item.active ? 'text-primary' : ''}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
