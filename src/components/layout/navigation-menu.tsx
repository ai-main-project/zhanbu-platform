"use client"

import * as React from "react"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "八字命理",
    href: "/bazi",
    subItems: [
      { title: "本命盘", href: "/bazi/chart" },
      { title: "合盘", href: "/bazi/synastry" },
    ],
  },
  {
    title: "西方占星",
    href: "/astrology",
    subItems: [
      { title: "个人星盘", href: "/astrology/natal" },
      { title: "关系合盘", href: "/astrology/synastry" },
    ],
  },
  {
    title: "塔罗占卜",
    href: "/tarot",
    subItems: [
      { title: "单张牌解读", href: "/tarot/single" },
      { title: "牌阵占卜", href: "/tarot/spread" },
    ],
  },
  { title: "AI命盘解读", href: "/ai-reading" },
  { title: "灵性日历", href: "/calendar" },
]

function NavItem({ item }: { item: (typeof menuItems)[0] }) {
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
                    {item.title}
                </Button>
            </Link>
        )
    }

    return (
        <Popover open={isOpen} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild onMouseEnter={() => handleOpenChange(true)} onMouseLeave={() => handleOpenChange(false)}>
                <Button variant="ghost" className="text-silvermoon hover:text-stardust">
                    {item.title}
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
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm hover:bg-stardust/10"
                            onClick={() => setIsOpen(false)}
                        >
                            {subItem.title}
                        </Link>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}


export function NavigationMenu() {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </nav>
  )
}
