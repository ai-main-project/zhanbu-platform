
"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Star, Sun, Moon } from "lucide-react"

const services = [
  {
    title: "八字命理",
    description: "揭示您的生辰八字，洞察一生的运势起伏与机缘。",
    icon: <Sun className="h-12 w-12 text-stardust" />,
  },
  {
    title: "西方占星",
    description: "通过星盘解读，探索您的性格特质、天赋及未来潜能。",
    icon: <Star className="h-12 w-12 text-stardust" />,
  },
  {
    title: "塔罗占卜",
    description: "借助塔罗牌的象征力量，为您在迷茫时指引方向。",
    icon: <Moon className="h-12 w-12 text-stardust" />,
  },
]

export function Services() {
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
