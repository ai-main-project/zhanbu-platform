
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input" // We will create this component next

export function CallToAction() {
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
          开启你的灵性之旅
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-silvermoon/80"
        >
          订阅我们的独家内容，获取每周运势、占卜折扣和灵性文章。
        </motion.p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Button size="lg" className="animate-pulse-glow border-gold-leaf bg-gold-leaf/90 text-cosmic-purple hover:bg-gold-leaf">
                立即订阅
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>订阅电子报</DialogTitle>
              <DialogDescription>
                输入您的邮箱，第一时间接收来自宇宙的神秘信息。
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-gold-leaf text-cosmic-purple hover:bg-gold-leaf/90">
                确认订阅
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
