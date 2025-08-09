
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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-96 w-full animate-float"
        >
          <Image
            src="/user-placeholder.svg"
            alt={masterName}
            fill
            className="rounded-full border-4 border-gold-leaf/50 object-cover shadow-2xl shadow-gold-leaf/20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif-display text-4xl font-bold text-gold-leaf md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-silvermoon/80">
            {t("master_bio")}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-stardust" />
              ))}
            </div>
            <span className="text-sm text-silvermoon">{t("reviews")}</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-8 border-gold-leaf text-gold-leaf hover:bg-gold-leaf hover:text-cosmic-purple">
                {t("learn_more")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <h4 className="font-serif-display font-medium leading-none text-gold-leaf">{t("about", { master_name: masterName })}</h4>
                <p className="text-sm text-silvermoon/80">
                  {t("master_bio")}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>
    </section>
  )
}
