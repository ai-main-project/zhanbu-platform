
"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Heart } from "lucide-react"
import { useTranslations } from "next-intl"

export function InteractiveTool() {
  const t = useTranslations("InteractiveTool")

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cosmic-purple/40 via-midnight/50 to-midnight/80 py-24 sm:py-32 px-4">
      <div className="container relative z-10 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-4xl font-bold text-gold-leaf sm:text-5xl md:text-6xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silvermoon/80 sm:text-xl"
        >
          {t("description")}
        </motion.p>
        <Tabs defaultValue="tarot" className="mx-auto mt-16 max-w-2xl">
          <TabsList className="grid w-full grid-cols-2 h-14 p-1.5 bg-abyss/40 backdrop-blur-md rounded-xl border border-silvermoon/10">
            <TabsTrigger
              value="tarot"
              className="rounded-lg text-lg data-[state=active]:bg-gold-leaf/20 data-[state=active]:text-gold-leaf transition-all duration-300"
            >
              {t("tarot_tab")}
            </TabsTrigger>
            <TabsTrigger
              value="zodiac"
              className="rounded-lg text-lg data-[state=active]:bg-gold-leaf/20 data-[state=active]:text-gold-leaf transition-all duration-300"
            >
              {t("zodiac_tab")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tarot">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="mt-8 border-gold-leaf/20 bg-abyss/30 backdrop-blur-lg overflow-hidden">
                <CardContent className="flex flex-col items-center p-10 space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse-glow bg-stardust/20 blur-2xl rounded-full" />
                    <Moon className="relative h-24 w-24 animate-float text-stardust drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                  </div>
                  <p className="text-xl text-silvermoon/90 font-medium">{t("tarot_description")}</p>
                  <Button className="h-14 px-10 text-lg font-bold border-2 border-stardust bg-stardust/10 text-stardust hover:bg-stardust hover:text-abyss transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-stardust/40">
                    {t("tarot_cta")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="zodiac">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="mt-8 border-gold-leaf/20 bg-abyss/30 backdrop-blur-lg overflow-hidden">
                <CardContent className="flex flex-col items-center p-10 space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse-glow bg-stardust/20 blur-2xl rounded-full" />
                    <Heart className="relative h-24 w-24 animate-float text-stardust drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                  </div>
                  <p className="text-xl text-silvermoon/90 font-medium">{t("zodiac_description")}</p>
                  <Button className="h-14 px-10 text-lg font-bold border-2 border-stardust bg-stardust/10 text-stardust hover:bg-stardust hover:text-abyss transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-stardust/40">
                    {t("try_now")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
