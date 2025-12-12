import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const news = [
    {
        id: 1,
        title: "ABTECA participa do Congresso Internacional de Tecnologia Assistiva",
        slug: "congresso-tech-assistiva-2024",
        date: "10 Dez, 2024",
        excerpt: "Representantes da associação apresentaram avanços na pesquisa nacional sobre dispositivos de acessibilidade."
    },
    {
        id: 2,
        title: "Novo edital de fomento à inovação em TA é lançado",
        slug: "edital-fomento-2024",
        date: "05 Dez, 2024",
        excerpt: "Chamada pública visa apoiar startups e grupos de pesquisa com projetos de impacto social."
    },
    {
        id: 3,
        title: "Parceria estratégica com universidades federais",
        slug: "parceria-universidades",
        date: "28 Nov, 2024",
        excerpt: "Acordo de cooperação técnica vai acelerar o desenvolvimento de novas tecnologias."
    }
]

export function NewsSection() {
    return (
        <section className="container py-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Últimas Notícias</h2>
                <Button variant="ghost" asChild className="hidden md:flex">
                    <Link href="/noticias">
                        Ver todas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {news.map((item) => (
                    <Card key={item.id} className="flex flex-col border-none shadow-sm hover:shadow-md transition-shadow bg-card/50">
                        <CardHeader>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <Calendar className="mr-2 h-4 w-4" />
                                {item.date}
                            </div>
                            <CardTitle className="text-xl line-clamp-2">
                                <Link href={`/noticias/${item.slug}`} className="hover:text-primary transition-colors">
                                    {item.title}
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground line-clamp-3">
                                {item.excerpt}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0 text-primary" asChild>
                                <Link href={`/noticias/${item.slug}`}>
                                    Ler mais
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="mt-8 md:hidden text-center">
                <Button variant="outline" asChild>
                    <Link href="/noticias">Ver todas as notícias</Link>
                </Button>
            </div>
        </section>
    )
}
