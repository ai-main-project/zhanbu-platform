
import Link from "next/link"
import { NavigationMenu } from "./navigation-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-silvermoon/20 bg-abyss/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="font-serif-display text-2xl font-bold text-stardust">
          灵启之门
        </Link>
        <div className="flex-grow flex justify-center">
          <NavigationMenu />
        </div>
        <div className="flex items-center space-x-2">
            <Button variant="ghost" className="text-silvermoon hover:text-stardust">登录</Button>
            <Button variant="outline" className="border-stardust text-stardust hover:bg-stardust hover:text-abyss">注册</Button>
        </div>
      </div>
    </header>
  )
}
