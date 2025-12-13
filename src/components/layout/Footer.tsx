import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-white text-slate-900 py-12 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & About */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/logo-abteca.png" alt="ABTECA Logo" className="h-16 w-auto" />
                        </Link>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Associação Brasileira de Tecnologia Assistiva. Promovendo a inclusão social através da inovação, pesquisa e desenvolvimento de soluções acessíveis.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-4">Institucional</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/quem-somos" className="hover:text-secondary transition-colors">
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link href="/associados" className="hover:text-secondary transition-colors">
                                    Para Associados
                                </Link>
                            </li>
                            <li>
                                <Link href="/transparencia" className="hover:text-secondary transition-colors">
                                    Transparência
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacidade" className="hover:text-secondary transition-colors">
                                    Política de Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-4">Atuação</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/o-que-fazemos" className="hover:text-secondary transition-colors">
                                    Eixos de Atuação
                                </Link>
                            </li>
                            <li>
                                <Link href="/projetos" className="hover:text-secondary transition-colors">
                                    Nossos Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href="/noticias" className="hover:text-secondary transition-colors">
                                    Notícias e Eventos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-4">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <span>R. das Camélias, 37 - sala 203<br />Mirandópolis, São Paulo - SP, 04048-060</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <a href="mailto:abteca1@gmail.com" className="hover:text-primary">
                                    abteca1@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <a href="tel:+5511932137106" className="hover:text-primary">
                                    (11) 93213-7106
                                </a>
                            </li>
                        </ul>
                        {/* <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div> */}
                    </div>
                </div>

                <div className="border-t border-slate-200 mt-12 pt-8 text-center text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} ABTECA. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
