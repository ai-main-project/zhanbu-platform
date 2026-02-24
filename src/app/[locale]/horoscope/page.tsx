
import { useTranslations } from "next-intl"

export default function HoroscopePage() {
  const t = useTranslations("Navigation")

  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center text-slate-800 font-display p-6 text-center">
      <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm mb-4">
        <span className="material-symbols-outlined text-[32px]">stars</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">{t("horoscope")}</h1>
      <p className="text-slate-500 font-medium max-w-sm">
        This is the page for Zodiac Horoscope.
      </p>
    </div>
  )
}
