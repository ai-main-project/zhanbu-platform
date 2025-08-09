"use client"

import * as React from "react"
import {Link, pathnames} from '@/i18n/navigation';
import { useTranslations } from "next-intl"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

type Pathname = keyof typeof pathnames;

function NavItem({ item }: { item: { titleKey: string; href: Pathname; subItems?: { titleKey: string; href: Pathname }[] } }) {
    const t = useTranslations('Navigation');
    const [isOpen, setIsOpen] = React.useState(false)
    const timerRef = React.useRef<number | null>(null)

    const handleOpenChange = (open: boolean) => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current)
            timerRef.current = null
        }
        if (open) {
            setIsOpen(true)
        } else {
            timerRef.current = window.setTimeout(() => {
                setIsOpen(false)
            }, 100)
        }
    }

    if (!item.subItems) {
        return (
            <Link href={item.href}>
                <Button variant="ghost" className="text-silvermoon hover:text-stardust">
                    {t(item.titleKey)}
                </Button>
            </Link>
        )
    }

    return (
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild onMouseEnter={() => handleOpenChange(true)} onMouseLeave={() => handleOpenChange(false)}>
                <Button variant="ghost" className="text-silvermoon hover:text-stardust">
                    {t(item.titleKey)}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                onMouseEnter={() => handleOpenChange(true)}
                onMouseLeave={() => handleOpenChange(false)}
                className="w-48 bg-abyss border-silvermoon/20 text-silvermoon"
            >
                <div className="grid gap-2 p-2">
                    {item.subItems.map((subItem) => (
                        <Link
                            key={subItem.titleKey}
                            href={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm hover:bg-stardust/10"
                            onClick={() => setIsOpen(false)}
                        >
                            {t(subItem.titleKey)}
                        </Link>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}


type NavItemType = {
  titleKey: string;
  href: Pathname;
  subItems?: {
    titleKey: string;
    href: Pathname;
  }[];
};

export function NavigationMenu() {

  const menuItems: NavItemType[] = [
    {
      titleKey: "bazi",
      href: "/bazi",
      subItems: [
        { titleKey: "bazi_chart", href: "/bazi/chart" },
        { titleKey: "bazi_synastry", href: "/bazi/synastry" },
      ],
    },
    {
      titleKey: "astrology",
      href: "/astrology",
      subItems: [
        { titleKey: "astrology_natal", href: "/astrology/natal" },
        { titleKey: "astrology_synastry", href: "/astrology/synastry" },
      ],
    },
    {
      titleKey: "tarot",
      href: "/tarot",
      subItems: [
        { titleKey: "single_card_draw", href: "/tarot/single-draw" },
        { titleKey: "three_card_spread", href: "/tarot/three-card" },
      ],
    },
    { titleKey: "horoscope", href: "/horoscope" },
    { titleKey: "ai_reading", href: "/ai-reading" },
    { titleKey: "calendar", href: "/calendar" },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => (
        <NavItem key={item.titleKey} item={item} />
      ))}
    </nav>
  )
}
