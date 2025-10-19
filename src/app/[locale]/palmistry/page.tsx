
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import HandCanvas from "@/components/common/hand-canvas";

export default function PalmistryPage() {
  const t = useTranslations("Palmistry");

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-serif-display text-5xl font-bold text-gold-leaf">{t("title")}</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-silvermoon/80">{t("subtitle")}</p>
      <div className="relative w-full h-[600px] mt-8 rounded-lg overflow-hidden border-2 border-gold-leaf/20">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-midnight"><p className="text-stardust">{t("loading")}</p></div>}>
          <HandCanvas modelPath="/models/hand.glb" />
        </Suspense>
      </div>
    </div>
  );
}
