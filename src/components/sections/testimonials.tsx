
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

export function Testimonials() {
  const t = useTranslations("Testimonials")

  const testimonials = [
    {
      name: t("testimonial_1_author"),
      quote: t("testimonial_1_text"),
      stars: 5,
    },
    {
      name: t("testimonial_2_author"),
      quote: t("testimonial_2_text"),
      stars: 5,
    },
    {
      name: t("testimonial_3_author"),
      quote: t("testimonial_3_text"),
      stars: 5,
    },
  ]

  return (
    <section className="py-24 sm:py-32">
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
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="h-full border-gold-leaf/30 bg-cosmic-purple/60 p-6 text-left">
                <CardContent>
                  <div className="flex gap-1">
                    {[...Array(testimonial.stars)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current text-stardust" />
                    ))}
                  </div>
                  <blockquote className="mt-4 italic text-silvermoon">&quot;{testimonial.quote}&quot;</blockquote>
                  <p className="mt-4 text-right font-bold text-gold-leaf">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
