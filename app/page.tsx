import { Hero } from "@/components/sections/Hero"
import { Highlights } from "@/components/sections/Highlights"
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel"
import { LatestNews } from "@/components/sections/LatestNews"

export default function Home() {
    return (
        <main>
            <Hero />
            <Highlights />
            <ProjectsCarousel />
            <LatestNews />
        </main>
    )
}
