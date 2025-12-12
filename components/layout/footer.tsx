import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/">
                            <Image src="/logo.png" alt="Logo ABTECA" width={150} height={40} className="h-8 w-auto object-contain mb-2" />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Tecnologia Assistiva para Autonomia e Inclusão. Promovendo direitos e inovação.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Institucional</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/quem-somos" className="hover:text-primary">Quem Somos</Link></li>
                            <li><Link href="/o-que-fazemos" className="hover:text-primary">O que Fazemos</Link></li>
                            <li><Link href="/projetos" className="hover:text-primary">Projetos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Recursos</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/noticias" className="hover:text-primary">Notícias</Link></li>
                            <li><Link href="/associados" className="hover:text-primary">Área do Associado</Link></li>
                            <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Contato</h4>
                        <address className="space-y-2 text-sm text-muted-foreground not-italic">
                            <p>abteca1@gmail.com</p>
                            <p>(11) 93213-7106</p>
                            <p>
                                R. das Camélias, 37 - sala 203<br />
                                Mirandópolis, São Paulo - SP<br />
                                CEP 04048-060
                            </p>
                        </address>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ABTECA. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
