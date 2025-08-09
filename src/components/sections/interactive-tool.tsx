
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
    <section className="bg-cosmic-purple/50 py-24 sm:py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-display text-4xl font-bold text-gold-leaf md:text-5xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-silvermoon/80"
        >
          {t("description")}
        </motion.p>
        <Tabs defaultValue="tarot" className="mx-auto mt-12 max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tarot">{t("tarot_tab")}</TabsTrigger>
            <TabsTrigger value="zodiac">{t("zodiac_tab")}</TabsTrigger>
          </TabsList>
          <TabsContent value="tarot">
            <Card className="border-gold-leaf/30 bg-transparent pt-6">
              <CardContent className="space-y-4">
                <Moon className="mx-auto h-16 w-16 animate-pulse-glow text-stardust" />
                <p>{t("tarot_description")}</p>
                <Button className="animate-pulse-glow border-stardust bg-stardust/20 text-stardust hover:bg-stardust hover:text-abyss">
                  {t("tarot_cta")}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="zodiac">
            <Card className="border-gold-leaf/30 bg-transparent pt-6">
              <CardContent className="space-y-4">
                <Heart className="mx-auto h-16 w-16 animate-pulse-glow text-stardust" />
                <p>{t("zodiac_description")}</p>
                <Button className="animate-pulse-glow border-stardust bg-stardust/20 text-stardust hover:bg-stardust hover:text-abyss">
                  {t("try_now")}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
