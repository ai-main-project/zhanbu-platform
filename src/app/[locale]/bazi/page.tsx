// app/page.tsx
'use client';

import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';

export default function BaziPage() {
  return (
    <main className="min-h-screen bg-mystic-gradient text-slate-600 font-display p-6 flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm mb-2">
          <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
        </div>
        <h1 className="text-slate-800 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          神秘命运平台
        </h1>
        <p className="max-w-md text-center text-base font-medium leading-relaxed">
          探索你的星辰轨迹，从八字、占星到塔罗，全方位解读你的人生之谜。
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Link href="/bazi" className="w-full">
          <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-6 py-4 rounded-full shadow-soft hover:shadow-soft-hover transition-all">
            八字命盘
          </button>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full bg-white text-slate-700 border border-primary/20 font-bold px-6 py-4 rounded-full shadow-sm hover:bg-slate-50 transition-all">
              占星介绍
            </button>
          </DialogTrigger>
          <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-[2rem] p-8 text-slate-600 border border-primary/10 shadow-soft w-[90vw] max-w-sm">
            <h2 className="text-xl font-bold mb-3 text-slate-800 text-center">占星学简介</h2>
            <p className="text-center leading-relaxed text-sm">
              占星通过天体运行揭示个体的性格、潜能与命运。星盘是你宇宙的出生图。
            </p>
          </DialogContent>
        </Dialog>

        <Link href="/tarot" className="w-full">
          <button className="w-full bg-primary/10 text-primary font-bold px-6 py-4 rounded-full shadow-sm hover:bg-primary/20 transition-all">
            塔罗占卜
          </button>
        </Link>
      </div>
    </main>
  );
}
