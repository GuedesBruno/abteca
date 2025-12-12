import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import { PROJECTS } from "@/lib/static-data"

export const metadata: Metadata = {
    title: "Projetos Institucionais - ABTECA",
    description: "Conheça os projetos e programas da ABTECA",
}

const projects = PROJECTS

export default function ProjetosPage() {
    return (
        <div className="container py-16">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">Projetos Institucionais</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Iniciativas que transformam a realidade da Tecnologia Assistiva no Brasil.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <project.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">
                                {project.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/projetos/${project.slug}`}>
                                    Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
