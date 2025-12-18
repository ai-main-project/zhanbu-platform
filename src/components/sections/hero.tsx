
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DynamicStarrySky } from "@/components/common/dynamic-starry-sky"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
      <DynamicStarrySky />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stardust/10 via-transparent to-transparent opacity-50" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif-display text-5xl font-bold tracking-tight text-stardust sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-balance text-lg font-medium text-silvermoon sm:text-xl md:text-2xl"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-10"
        >
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-stardust bg-transparent px-8 py-6 text-xl text-stardust hover:bg-stardust hover:text-abyss transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
          >
            <span className="relative z-10">{t("cta")}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
