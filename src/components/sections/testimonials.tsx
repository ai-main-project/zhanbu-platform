
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
    <section className="py-24 sm:py-32 px-4 bg-midnight/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif-display text-4xl font-bold text-gold-leaf sm:text-5xl md:text-6xl"
          >
            {t("title")}
          </motion.h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="group h-full border-gold-leaf/10 bg-cosmic-purple/20 p-8 text-left backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-gold-leaf/40 hover:-translate-y-2 hover:shadow-gold-leaf/5">
                <CardContent className="p-0">
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(testimonial.stars)].map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-current text-stardust drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic leading-relaxed text-silvermoon/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center justify-end gap-3 border-t border-gold-leaf/10 pt-6">
                    <div className="h-10 w-10 rounded-full bg-gold-leaf/20 flex items-center justify-center font-bold text-gold-leaf">
                      {testimonial.name[0]}
                    </div>
                    <p className="font-serif-display text-lg font-bold text-gold-leaf">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
