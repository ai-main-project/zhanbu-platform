
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, Sun, Moon } from "lucide-react";

export default function TarotLandingPage() {
  const t = useTranslations("Tarot");

  const spreads = [
    {
      titleKey: "single_card_draw",
      descriptionKey: "single_card_description",
      href: "/tarot/single-draw",
      icon: <Sun className="h-12 w-12 text-stardust" />,
    },
    {
      titleKey: "three_card_spread",
      descriptionKey: "three_card_description",
      href: "/tarot/three-card",
      icon: <Moon className="h-12 w-12 text-stardust" />,
    },
  ];

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-serif-display text-5xl font-bold text-gold-leaf">{t("landing_title")}</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-silvermoon/80">{t("landing_subtitle")}</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {spreads.map((spread) => (
          <Link href={spread.href} key={spread.titleKey}>
            <Card className="h-full border-silvermoon/20 bg-midnight/50 text-center shadow-lg backdrop-blur-sm hover:border-gold-leaf/50 transition-colors duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-abyss">
                  {spread.icon}
                </div>
                <CardTitle className="font-serif-display text-2xl text-stardust">{t(spread.titleKey)}</CardTitle>
              </CardHeader>
              <CardDescription className="text-silvermoon/80 px-6 pb-6">{t(spread.descriptionKey)}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
