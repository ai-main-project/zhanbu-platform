
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { FeaturedMaster } from "@/components/sections/featured-master";
import { InteractiveTool } from "@/components/sections/interactive-tool";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedMaster />
      <InteractiveTool />
      <Testimonials />
      <CallToAction />
    </>
  );
}
