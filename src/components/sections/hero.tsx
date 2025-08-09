
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DynamicStarrySky } from "@/components/common/dynamic-starry-sky"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="relative h-[calc(100vh-5rem)] w-full">
      <DynamicStarrySky />
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-6xl font-bold tracking-tight text-stardust md:text-8xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-silvermoon md:text-xl"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Button size="lg" variant="outline" className="border-stardust text-stardust hover:bg-stardust hover:text-abyss">
            {t("cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
