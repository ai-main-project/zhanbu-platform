
'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from "./locale-switcher";

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link
        href="/"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
      >
        <span className="material-symbols-outlined text-gold-accent">spark</span>
      </Link>

      {/* Title */}
      <h2 className="text-white text-lg font-bold tracking-wide flex-1 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
        {t('title')}
      </h2>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <Link href="/face-reading" className="flex size-10 items-center justify-center text-white hover:text-tech-cyan transition-colors">
          <span className="material-symbols-outlined">qr_code_scanner</span>
        </Link>
        <LocaleSwitcher />
        <button className="flex size-10 items-center justify-center text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
