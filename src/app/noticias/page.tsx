import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: 'Notícias | ABTECA',
    description: 'Fique por dentro das últimas novidades e eventos da ABTECA.',
}

import { NEWS_ITEMS } from "@/lib/data/news";

export default function Noticias() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <PageHeader
                title="Notícias e Eventos"
                description="Fique por dentro das últimas novidades e eventos da ABTECA."
                variant="waves"
            />
            <div className="container py-6 md:py-12">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {NEWS_ITEMS.map((item) => (
                        <Card key={item.id} className="flex flex-col border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            {/* Decorative gradient header */}
                            <div className="h-3 bg-gradient-to-r from-primary to-blue-600" />

                            <CardHeader className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-slate-100 w-fit px-3 py-1 rounded-full">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>{item.date}</span>
                                </div>
                                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                                <Button variant="ghost" asChild className="w-full justify-between group-hover:bg-primary/5">
                                    <a href={`/noticias/${item.id}/`}>
                                        Ler mais
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 flex justify-center space-x-4">
                    <Button variant="outline" disabled>Anterior</Button>
                    <Button variant="outline" disabled>Próxima</Button>
                </div>
            </div>
        </div>
    )
}
