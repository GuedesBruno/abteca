"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search } from "lucide-react";
import Link from "next/link";

const allNews = [
    { id: 1, title: "ABTECA participa de Fórum Internacional de Acessibilidade", date: "12 Dez, 2024", category: "Eventos", excerpt: "Representantes da associação apresentaram avanços na legislação brasileira sobre tecnologia assistiva e trocaram experiências com líderes globais." },
    { id: 2, title: "Novo edital de fomento à inovação em TA é lançado", date: "05 Dez, 2024", category: "Oportunidades", excerpt: "Parceria com agências de fomento vai destinar R$ 2 milhões para startups do setor que apresentarem soluções escaláveis." },
    { id: 3, title: "Relatório Anual de Impacto 2024", date: "01 Dez, 2024", category: "Institucional", excerpt: "Confira os resultados alcançados pelos nossos projetos, incluindo o número de beneficiários diretos e indiretos em todo o território nacional." },
    { id: 4, title: "Workshop: Introdução à Tecnologia Assistiva na Escola", date: "20 Nov, 2024", category: "Educação", excerpt: "Evento capacitou mais de 500 professores da rede pública para identificação e implementação de recursos de TA em sala de aula." },
    { id: 5, title: "Parceria com Universidade Federal para desenvolvimento de próteses", date: "15 Nov, 2024", category: "Pesquisa", excerpt: "Acordo de cooperação técnica visa acelerar o desenvolvimento de próteses de baixo custo utilizando impressão 3D." },
    { id: 6, title: "ABTECA recebe prêmio de Inovação Social", date: "10 Nov, 2024", category: "Prêmios", excerpt: "Reconhecimento foi concedido devido ao impacto do projeto 'Acessibilidade para Todos' em comunidades vulneráveis." },
];

const categories = ["Todas", "Eventos", "Oportunidades", "Institucional", "Educação", "Pesquisa"];

export default function NoticiasPage() {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNews = allNews.filter(item => {
        const matchesCategory = selectedCategory === "Todas" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <section className="bg-background border-b py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold text-primary mb-6">Notícias e Atualizações</h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    variant={selectedCategory === cat ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Buscar notícias..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-12">
                {filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item) => (
                            <Card key={item.id} className="flex flex-col hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {item.date}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                                        <Link href={`/noticias/${item.id}`}>{item.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground line-clamp-3 text-sm">
                                        {item.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                                        <Link href={`/noticias/${item.id}`}>Ler mais</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        Nenhuma notícia encontrada para os filtros selecionados.
                    </div>
                )}

                {/* Mock Pagination */}
                {filteredNews.length > 0 && (
                    <div className="mt-16 flex justify-center gap-2">
                        <Button variant="outline" size="sm" disabled>Anterior</Button>
                        <Button variant="default" size="sm">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Próximo</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
