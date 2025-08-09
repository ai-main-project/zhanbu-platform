
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-silvermoon/20 py-8 text-center text-sm text-silvermoon/60">
      <div className="container mx-auto">
        <p>{t("copyright", { year })}</p>
      </div>
    </footer>
  )
}
