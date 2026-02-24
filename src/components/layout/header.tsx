
'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from "./locale-switcher";

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
      {/* Logo */}
      <Link
        href="/"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform hover:scale-105"
      >
        <span className="material-symbols-outlined text-primary text-xl">spark</span>
      </Link>

      {/* Title */}
      <h2 className="text-slate-800 text-lg font-bold tracking-wide flex-1 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-primary">
        {t('title')}
      </h2>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <Link href="/face-reading" className="flex size-10 items-center justify-center text-slate-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
          <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
        </Link>
        <LocaleSwitcher />
        <button className="flex size-10 items-center justify-center text-slate-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
          <span className="material-symbols-outlined text-xl">menu</span>
        </button>
      </div>
    </header>
  );
}
