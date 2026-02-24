
"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

// Service card data structure
interface ServiceCard {
  id: string;
  icon: string;
  href: string;
}

const serviceCards: ServiceCard[] = [
  { id: "tarot", icon: "style", href: "/tarot" },
  { id: "face", icon: "face_6", href: "/face-reading" },
  { id: "astrology", icon: "auto_awesome", href: "/astrology" },
];

export function Services() {
  const t = useTranslations("Services")

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-primary"></span>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">{t("label")}</span>
        </div>
        <h2 className="text-white text-3xl font-bold leading-tight">{t("title")}</h2>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-6 px-4">
        {serviceCards.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="group relative overflow-hidden rounded-2xl bg-card-dark border border-white/5 shadow-lg">
              {/* Image Area with Gradient */}
              <div
                className="w-full h-48 bg-center bg-cover relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, #221933 100%), 
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%235b13ec' stop-opacity='0.3'/%3E%3Cstop offset='100%25' stop-color='%232a1b3d' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23221933' width='400' height='200'/%3E%3Crect fill='url(%23g)' width='400' height='200'/%3E%3C/svg%3E")`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10">
                  <span className="material-symbols-outlined text-purple-300 text-xl block">{service.icon}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 pt-2 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {t(`${service.id}_title`)}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {t(`${service.id}_description`)}
                    </p>
                  </div>
                </div>
                <Link
                  href={service.href}
                  className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold text-white transition-colors"
                >
                  <span>{t(`${service.id}_cta`)}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center py-6 gap-2 opacity-60"
        >
          <p className="text-xs text-white uppercase tracking-widest">{t("powered_by")}</p>
          <div className="flex gap-1 text-gold-accent">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[16px] filled">star</span>
            ))}
          </div>
          <p className="text-xs text-gray-400">{t("readings_count")}</p>
        </motion.div>
      </div>
    </section>
  )
}
