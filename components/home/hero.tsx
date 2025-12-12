import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-primary px-4 py-24 text-center text-primary-foreground md:px-8">
            {/* Background Pattern or Image Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-4xl space-y-8">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Tecnologia Assistiva para <br className="hidden md:block" />
                    <span className="text-secondary">Autonomia</span> e <span className="text-secondary">Inclusão</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
                    Promovendo a pesquisa, o desenvolvimento e a difusão da tecnologia assistiva no Brasil.
                    Junte-se a nós na construção de uma sociedade mais acessível.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" variant="secondary" asChild className="text-primary font-bold">
                        <Link href="/associe-se">
                            Associe-se à ABTECA <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10 border-white/20" asChild>
                        <Link href="/projetos">
                            Conheça Nossos Projetos
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
