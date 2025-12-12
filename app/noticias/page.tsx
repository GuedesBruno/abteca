import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Notícias - ABTECA",
    description: "Fique por dentro das novidades da ABTECA",
}

import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { NEWS } from "@/lib/static-data"

const news = NEWS

export default function NoticiasPage() {
    return (
        <div className="container py-16">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">Notícias</h1>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Buscar notícias..." />
                    <Button type="submit">Buscar</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <Card key={item.id} className="flex flex-col hover:shadow-md transition-shadow">
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
                            <Button variant="outline" asChild className="w-full">
                                <Link href={`/noticias/${item.slug}`}>
                                    Ler completa
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                {/* Pagination Placeholder */}
                <Button variant="ghost" disabled>Anterior</Button>
                <Button variant="outline" className="mx-2">1</Button>
                <Button variant="ghost">Próxima</Button>
            </div>
        </div>
    )
}
