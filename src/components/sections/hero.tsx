
"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="@container w-full">
      <div
        className="relative flex min-h-[500px] flex-col items-center justify-end p-6 pb-12 gap-6 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 16, 34, 0.3) 0%, rgba(22, 16, 34, 0.8) 60%, #161022 100%), 
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3CradialGradient id='a' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%235b13ec' stop-opacity='0.3'/%3E%3Cstop offset='100%25' stop-color='%23161022' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23161022' width='800' height='600'/%3E%3Ccircle cx='400' cy='300' r='300' fill='url(%23a)'/%3E%3C/svg%3E")`
        }}
      >
        {/* Floating Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-3 text-center z-10 max-w-lg mx-auto"
        >
          {/* Version Badge */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-purple-200 uppercase tracking-widest">
              {t("badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight drop-shadow-xl">
            {t("title_prefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">{t("title_highlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base font-normal leading-relaxed max-w-xs mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-[320px]"
        >
          <Link
            href="/tarot"
            className="relative group w-full flex cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(91,19,236,0.5)] border border-white/10"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-white text-lg font-bold tracking-wide">{t("cta")}</span>
              <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
