import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 z-10">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80">
                        Tecnologia Social
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
                        Tecnologia a serviço da <span className="text-blue-600 block">Inclusão Social</span>
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                        A ABTECA conecta inovação e acessibilidade para transformer vidas. Somos a referência nacional em pesquisa, desenvolvimento e difusão de Tecnologia Assistiva no Brasil.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                            <Link href="/quem-somos">
                                Conheça a ABTECA
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 group" asChild>
                            <Link href="/projetos">
                                Nossos Projetos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Abstract shape illustration placeholder since we don't have real images yet */}
                <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="text-primary/20 text-9xl font-black">ABTECA</div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
