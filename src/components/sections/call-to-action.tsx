
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"

export function CallToAction() {
  const t = useTranslations("CallToAction")

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-stardust/5 via-cosmic-purple/40 to-midnight/80 py-24 sm:py-32 px-4">
      <div className="container relative z-10 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-4xl font-bold text-gold-leaf sm:text-5xl md:text-7xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-silvermoon/90 sm:text-2xl"
        >
          {t("description")}
        </motion.p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Button
                size="lg"
                className="h-16 px-12 text-xl font-bold animate-pulse-glow border-2 border-gold-leaf bg-gold-leaf text-cosmic-purple hover:bg-gold-leaf/90 transition-all duration-300 shadow-[0_0_30px_rgba(218,165,32,0.4)]"
              >
                {t("get_started")}
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] border-gold-leaf/20 bg-midnight/95 backdrop-blur-3xl">
            <DialogHeader>
              <DialogTitle className="font-serif-display text-2xl text-gold-leaf">{t("dialog_title")}</DialogTitle>
              <DialogDescription className="text-silvermoon/80 text-lg">
                {t("dialog_description")}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="h-12 border-white/10 bg-white/5 text-silvermoon placeholder:text-silvermoon/30 focus:border-gold-leaf/50"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="h-12 w-full bg-gold-leaf text-lg font-bold text-cosmic-purple hover:bg-gold-leaf/90 shadow-lg">
                {t("dialog_cta")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-stardust/10 blur-[120px]" />
      </div>
    </section>
  )
}
