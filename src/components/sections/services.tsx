
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
        <h2 className="text-slate-800 text-3xl font-extrabold leading-tight shadow-sm tracking-tight">{t("title")}</h2>
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
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-primary/10 shadow-soft hover:shadow-soft-hover transition-all duration-300">
              {/* Image Area with Gradient */}
              <div
                className="w-full h-40 bg-center bg-cover relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, #ffffff 100%), 
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a78bfa' stop-opacity='0.2'/%3E%3Cstop offset='100%25' stop-color='%23fda4af' stop-opacity='0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ffffff' width='400' height='200'/%3E%3Crect fill='url(%23g)' width='400' height='200'/%3E%3C/svg%3E")`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-full p-2.5 border border-primary/20 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl block drop-shadow-sm">{service.icon}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 pt-0 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                      {t(`${service.id}_title`)}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(`${service.id}_description`)}
                    </p>
                  </div>
                </div>
                <Link
                  href={service.href}
                  className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-bold transition-colors"
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
          className="flex flex-col items-center justify-center py-8 gap-2 opacity-80"
        >
          <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{t("powered_by")}</p>
          <div className="flex gap-1 text-accent-yellow">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[16px] filled">star</span>
            ))}
          </div>
          <p className="text-xs text-slate-400">{t("readings_count")}</p>
        </motion.div>
      </div>
    </section>
  )
}
