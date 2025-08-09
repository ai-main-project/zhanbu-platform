
import { useTranslations } from "next-intl"

export default function HoroscopePage() {
  const t = useTranslations("Navigation")

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">{t("horoscope")}</h1>
      <p className="mt-4 text-lg">
        This is the page for Zodiac Horoscope.
      </p>
    </div>
  )
}
