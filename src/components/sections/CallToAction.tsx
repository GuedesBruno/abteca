import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export function CallToAction() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                    Junte-se a nós nessa transformação
                </h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Associados da ABTECA têm acesso a benefícios exclusivos, networking com especialistas e participação ativa nas decisões do setor.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg font-semibold" asChild>
                        <Link href="/associe-se">
                            <UserPlus className="mr-2 h-5 w-5" />
                            Quero me associar
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 text-lg" asChild>
                        <Link href="/associados">
                            Conhecer benefícios
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
