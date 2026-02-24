
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-mystic-gradient flex flex-col pb-24">
      <Hero />
      <Services />
      <BottomNavigation />
    </div>
  );
}
