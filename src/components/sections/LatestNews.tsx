import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
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
        <section className="py-12 md:py-16 bg-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12 text-center">Últimas Notícias</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Card key={item.id} className="flex flex-col border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            {/* Decorative gradient header */}
                            <div className="h-3 bg-gradient-to-r from-primary to-blue-600" />

                            <CardHeader className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-slate-100 w-fit px-3 py-1 rounded-full">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>{item.date}</span>
                                </div>
                                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                    <Link href={`/noticias/${item.id}`}>{item.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                                <Button variant="ghost" asChild className="w-full justify-between group-hover:bg-primary/5">
                                    <Link href={`/noticias/${item.id}`}>
                                        Ler mais
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="default" size="lg" asChild>
                        <Link href="/noticias">Ver todas as notícias</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
