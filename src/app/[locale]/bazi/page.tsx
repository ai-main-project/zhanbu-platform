// app/page.tsx
'use client';

import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cosmic-purple text-silvermoon font-sans-modern p-6 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-gold-leaf text-4xl font-serif-display animate-pulse-glow tracking-widest">
        神秘命运平台
      </h1>
      <p className="max-w-xl text-center text-lg">
        探索你的星辰轨迹，从八字、占星到塔罗，全方位解读你的人生之谜。
      </p>

      <div className="flex space-x-4">
        <Link href="/bazi">
          <button className="bg-gold-leaf text-abyss px-5 py-2 rounded-lg hover:opacity-80 transition-all">
            八字命盘
          </button>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-midnight text-stardust px-5 py-2 rounded-lg">
              占星介绍
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-silvermoon border border-gold-leaf">
            <h2 className="text-xl font-serif-display mb-2 text-gold-leaf">占星学简介</h2>
            <p>
              占星通过天体运行揭示个体的性格、潜能与命运。星盘是你宇宙的出生图。
            </p>
          </DialogContent>
        </Dialog>

        <Link href="/tarot">
          <button className="bg-stardust text-midnight px-5 py-2 rounded-lg">
            塔罗占卜
          </button>
        </Link>
      </div>
    </main>
  );
}
