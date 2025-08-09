
"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Star, Sun, Moon } from "lucide-react"
import { useTranslations } from "next-intl"

export function Services() {
  const t = useTranslations("Services")

  const services = [
    {
      title: t("bazi_title"),
      description: t("bazi_description"),
      icon: <Sun className="h-12 w-12 text-stardust" />,
    },
    {
      title: t("astrology_title"),
      description: t("astrology_description"),
      icon: <Star className="h-12 w-12 text-stardust" />,
    },
    {
      title: t("tarot_title"),
      description: t("tarot_description"),
      icon: <Moon className="h-12 w-12 text-stardust" />,
    },
  ]

  return (
    <section id="services" className="container mx-auto py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <Card className="h-full border-silvermoon/20 bg-midnight/50 text-center shadow-lg backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-abyss">
                  {service.icon}
                </div>
                <CardTitle className="font-serif-display text-2xl text-stardust">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-silvermoon/80">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
