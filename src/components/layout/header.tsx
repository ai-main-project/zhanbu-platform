
'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { NavigationMenu } from "./navigation-menu"
import { Button } from "@/components/ui/button"
import { LocaleSwitcher } from "./locale-switcher"

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-silvermoon/20 bg-abyss/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="font-serif-display text-2xl font-bold text-stardust">
          {t('title')}
        </Link>
        <div className="flex-grow flex justify-center">
          <NavigationMenu />
        </div>
        <div className="flex items-center space-x-1 sm:space-x-4">
          <LocaleSwitcher />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="text-silvermoon hover:text-stardust">{t('login')}</Button>
            <Button variant="outline" className="border-stardust text-stardust hover:bg-stardust hover:text-abyss">{t('register')}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
