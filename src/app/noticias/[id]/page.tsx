import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2, User } from "lucide-react";
import Link from "next/link";
import { NEWS_ITEMS } from "@/lib/data/news";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return NEWS_ITEMS.map((item) => ({
        id: item.id,
    }));
}

export default function NoticiaDetalhe({ params }: { params: { id: string } }) {
    const newsItem = NEWS_ITEMS.find((item) => item.id === params.id);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-100 pb-20">
            <div className="bg-slate-100 py-12 border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary" asChild>
                        <Link href="/noticias"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar para notícias</Link>
                    </Button>
                    <div className="flex gap-4 items-center mb-4">
                        <Badge>{newsItem.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {newsItem.date}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary max-w-4xl leading-tight">
                        {newsItem.title}
                    </h1>
                    <div className="mt-6 flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        Por <span className="font-semibold text-foreground ml-1">{newsItem.author}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <article className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
                    {/* Simulating HTML content render safely */}
                    <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                </article>

                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-slate-100 p-6 rounded-xl border">
                        <h3 className="font-bold text-lg mb-4">Compartilhe</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" className="w-full justify-start">
                                <Share2 className="mr-2 h-4 w-4" /> Facebook
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Share2 className="mr-2 h-4 w-4" /> LinkedIn
                            </Button>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-lg mb-2 text-primary">Fique por dentro</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Receba as últimas novidades da ABTECA diretamente no seu e-mail.
                        </p>
                        <div className="flex gap-2">
                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" placeholder="Seu e-mail" disabled />
                            <Button disabled>Assinar</Button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
