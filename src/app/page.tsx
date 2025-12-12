import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { LatestNews } from "@/components/sections/LatestNews";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Highlights />
      <ProjectsCarousel />
      <CallToAction />
      <LatestNews />
    </div>
  );
}
