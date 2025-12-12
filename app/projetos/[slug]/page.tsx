import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PROJECTS } from "@/lib/static-data"
import { notFound } from "next/navigation"

// Required for static export
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="container py-16 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/projetos">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Projetos
                </Link>
            </Button>

            <div className="bg-card border rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <project.icon className="h-6 w-6" />
                    </div>
                    <h1 className="text-3xl font-bold text-primary capitalize">
                        {project.title}
                    </h1>
                </div>

                <div className="pros prose-slate max-w-none text-muted-foreground">
                    <p className="text-xl text-foreground font-medium mb-4">
                        {project.description}
                    </p>
                    <p>
                        {project.content}
                    </p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Objetivos</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Fomentar o desenvolvimento de TA.</li>
                        <li>Articular atores do ecossistema.</li>
                        <li>Promover a inclusão social.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
