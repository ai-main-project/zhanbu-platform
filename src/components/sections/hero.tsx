
"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="@container w-full">
      <div
        className="relative flex min-h-[500px] flex-col items-center justify-end p-6 pb-12 gap-6 bg-gradient-to-b from-primary-light/30 via-white to-transparent overflow-hidden"
      >
        {/* Floating Delicate Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-pink/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-mint/20 rounded-full blur-[60px] pointer-events-none"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-3 text-center z-10 max-w-lg mx-auto"
        >
          {/* Version Badge */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full border border-primary/20 bg-white/60 backdrop-blur-sm text-xs font-bold text-primary shadow-sm tracking-widest">
              {t("badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-slate-800 text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight drop-shadow-sm">
            {t("title_prefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">{t("title_highlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base font-medium leading-relaxed max-w-xs mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-[320px] mt-4"
        >
          <Link
            href="/tarot"
            className="relative group w-full flex cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary hover:shadow-soft-hover transition-all duration-300 shadow-soft text-white"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-bold tracking-wide">{t("cta")}</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
