
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

export function FeaturedMaster() {
  const t = useTranslations("FeaturedMaster")
  const masterName = t("master_name");

  return (
    <section className="py-24 sm:py-32 px-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
        >
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gold-leaf/20 blur-3xl" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative h-full w-full animate-float"
          >
            <Image
              src="/user-placeholder.svg"
              alt={masterName}
              fill
              className="rounded-full border-8 border-gold-leaf/30 object-cover shadow-[0_0_50px_rgba(218,165,32,0.3)] backdrop-blur-sm"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl lg:ml-auto"
        >
          <div className="inline-block rounded-full bg-gold-leaf/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-leaf uppercase mb-6">
            {t("featured_badge") || "Expert Master"}
          </div>
          <h2 className="font-serif-display text-4xl font-bold leading-tight text-gold-leaf sm:text-5xl md:text-6xl">{t("title")}</h2>
          <p className="mt-8 text-lg leading-relaxed text-silvermoon/90 sm:text-xl">
            {t("master_bio")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current text-stardust drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
              ))}
            </div>
            <span className="text-base font-medium text-silvermoon/70">{t("reviews")}</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="mt-10 h-14 px-8 border-gold-leaf/50 text-gold-leaf hover:bg-gold-leaf hover:text-cosmic-purple transition-all duration-300 shadow-lg hover:shadow-gold-leaf/20"
              >
                {t("learn_more")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 border-gold-leaf/20 bg-midnight/95 backdrop-blur-xl">
              <div className="grid gap-4">
                <h4 className="font-serif-display text-lg font-medium leading-none text-gold-leaf">{t("about", { master_name: masterName })}</h4>
                <p className="text-sm leading-relaxed text-silvermoon/80">
                  {t("master_bio_extended") || t("master_bio")}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>
    </section>
  )
}
