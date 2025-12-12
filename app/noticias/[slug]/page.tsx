import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { NEWS } from "@/lib/static-data"
import { notFound } from "next/navigation"

// Required for static export
export async function generateStaticParams() {
    return NEWS.map((item) => ({
        slug: item.slug,
    }))
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const newsItem = NEWS.find(n => n.slug === slug)

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="container py-16 max-w-3xl">
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/noticias">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Notícias
                </Link>
            </Button>

            <article>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {newsItem.title}
                </h1>

                <div className="flex items-center gap-4 text-muted-foreground mb-8 pb-8 border-b">
                    <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{newsItem.date}</span>
                    </div>
                    <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Redação ABTECA</span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-foreground/80">
                    <p className="font-semibold text-xl mb-6">
                        {newsItem.excerpt}
                    </p>
                    <p>
                        {newsItem.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                        Cras venenatis euismod malesuada. Nulla facilisi.
                    </p>
                    {/* Placeholder image removed or keep static */}
                    <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center my-8 text-muted-foreground">
                        Imagem da Notícia
                    </div>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                </div>
            </article>
        </div>
    )
}
