import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full bg-primary overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 z-10">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-white bg-white/10 text-white hover:bg-white/20">
                        Tecnologia Social
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Tecnologia a serviço da <span className="text-blue-200 block">Inclusão Social</span>
                    </h1>
                    <p className="max-w-[700px] text-lg text-blue-100 md:text-xl leading-relaxed">
                        A ABTECA conecta inovação e acessibilidade para transformer vidas. Somos a referência nacional em pesquisa, desenvolvimento e difusão de Tecnologia Assistiva no Brasil.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                            <Link href="/quem-somos">
                                Conheça a ABTECA
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 group border-white text-white hover:bg-white/10 hover:text-white" asChild>
                            <Link href="/projetos">
                                Nossos Projetos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Abstract shape illustration placeholder since we don't have real images yet */}
                <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center bg-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="text-white/20 text-9xl font-black">ABTECA</div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
