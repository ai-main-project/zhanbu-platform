
"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Star, Sun, Moon, Sparkles } from "lucide-react"
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
    {
      title: t("horoscope_title"),
      description: t("horoscope_description"),
      icon: <Sparkles className="h-12 w-12 text-stardust" />,
    },
  ]

  return (
    <section id="services" className="container mx-auto py-24 sm:py-32 px-4">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="group h-full border-silvermoon/10 bg-midnight/30 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-stardust/40 hover:shadow-stardust/5 hover:-translate-y-2">
              <CardHeader className="relative overflow-hidden">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-abyss/50 text-stardust shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <div className="animate-float">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="font-serif-display text-2xl font-semibold text-stardust group-hover:text-gold-leaf transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-silvermoon/70 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
