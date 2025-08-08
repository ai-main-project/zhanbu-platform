
"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Heart } from "lucide-react"

export function InteractiveTool() {
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
          体验互动占卜
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-silvermoon/80"
        >
          无需等待，立即获得来自宇宙的即时指引。
        </motion.p>
        <Tabs defaultValue="tarot" className="mx-auto mt-12 max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tarot">每日塔罗</TabsTrigger>
            <TabsTrigger value="zodiac">星座速配</TabsTrigger>
          </TabsList>
          <TabsContent value="tarot">
            <Card className="border-gold-leaf/30 bg-transparent pt-6">
              <CardContent className="space-y-4">
                <Moon className="mx-auto h-16 w-16 animate-pulse-glow text-stardust" />
                <p>抽一张牌，看看今日宇宙给你的启示。</p>
                <Button className="animate-pulse-glow border-stardust bg-stardust/20 text-stardust hover:bg-stardust hover:text-abyss">
                  抽取我的今日塔R罗牌
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="zodiac">
            <Card className="border-gold-leaf/30 bg-transparent pt-6">
              <CardContent className="space-y-4">
                <Heart className="mx-auto h-16 w-16 animate-pulse-glow text-stardust" />
                <p>输入你和TA的星座，看看你们的匹配指数。</p>
                <Button className="animate-pulse-glow border-stardust bg-stardust/20 text-stardust hover:bg-stardust hover:text-abyss">
                  开始星座速配
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
