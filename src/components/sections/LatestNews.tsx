import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const news = [
    {
        id: 1,
        title: "ABTECA participa de Fórum Internacional de Acessibilidade",
        date: "12 Dez, 2024",
        excerpt: "Representantes da associação apresentaram avanços na legislação brasileira sobre tecnologia assistiva.",
        category: "Eventos"
    },
    {
        id: 2,
        title: "Novo edital de fomento à inovação em TA é lançado",
        date: "05 Dez, 2024",
        excerpt: "Parceria com agências de fomento vai destinar R$ 2 milhões para startups do setor.",
        category: "Oportunidades"
    },
    {
        id: 3,
        title: "Relatório Anual de Impacto 2024",
        date: "01 Dez, 2024",
        excerpt: "Confira os resultados alcançados pelos nossos projetos e o número de beneficiários.",
        category: "Institucional"
    },
];

export function LatestNews() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center">Últimas Notícias</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Card key={item.id} className="border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {item.date}
                                    <span className="mx-2">•</span>
                                    <span className="text-primary font-medium">{item.category}</span>
                                </div>
                                <CardTitle className="line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                    <Link href={`/noticias/${item.id}`}>{item.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3">
                                    {item.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="px-0 hover:bg-transparent text-primary group" asChild>
                                    <Link href={`/noticias/${item.id}`}>
                                        Ler notícia completa <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/noticias">Ver todas as notícias</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
