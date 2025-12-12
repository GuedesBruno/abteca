import Link from "next/link"
import { ArrowRight, BookOpen, Microscope, Share2, Shield, Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Programa Nacional de Formação",
        slug: "formacao",
        icon: BookOpen,
        description: "Capacitação contínua para profissionais da área de TA."
    },
    {
        title: "Observatório de TA",
        slug: "observatorio",
        icon: Microscope,
        description: "Monitoramento de dados e indicadores sobre tecnologia assistiva."
    },
    {
        title: "Apoio a Políticas Públicas",
        slug: "politicas-publicas",
        icon: Shield,
        description: "Assessoria técnica para governos e legisladores."
    },
    {
        title: "Inovação e Produção",
        slug: "inovacao",
        icon: LightbulbIcon,
        description: "Estímulo à indústria nacional e startups do setor."
    },
    {
        title: "Comunicação e Difusão",
        slug: "comunicacao",
        icon: Share2,
        description: "Disseminação de conhecimento para a sociedade."
    },
]

import { Lightbulb as LightbulbIcon } from "lucide-react"

export function ProjectsSection() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
            <div className="container">
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Projetos Institucionais</h2>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        A ABTECA atua em cinco eixos estratégicos para fortalecer a Tecnologia Assistiva no Brasil.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.slug} className="flex flex-col transition-all hover:border-primary/50">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <project.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="p-0 text-primary" asChild>
                                    <Link href={`/projetos/${project.slug}`}>
                                        Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
