'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onLocaleChange(nextLocale: 'en' | 'zh') {
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-silvermoon hover:text-stardust">
                    <Languages className="h-4 w-4" />
                    <span className="uppercase text-xs font-semibold">{locale}</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-32 border-gold-leaf/20 bg-midnight/95 backdrop-blur-xl p-1">
                <div className="flex flex-col gap-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`justify-start text-xs ${locale === 'en' ? 'text-gold-leaf bg-gold-leaf/10' : 'text-silvermoon'}`}
                        onClick={() => onLocaleChange('en')}
                    >
                        English
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`justify-start text-xs ${locale === 'zh' ? 'text-gold-leaf bg-gold-leaf/10' : 'text-silvermoon'}`}
                        onClick={() => onLocaleChange('zh')}
                    >
                        简体中文
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
