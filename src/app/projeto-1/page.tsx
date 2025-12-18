import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Programa Nacional de Formação | ABTECA',
    description: 'Capacitação em larga escala para profissionais de saúde e educação no uso de tecnologias assistivas.',
}

export default function ProjetoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <PageHeader
                title="Programa Nacional de Formação"
                description="Educação"
                variant="dots"
            />

            <div className="container py-12">
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors" asChild>
                    <Link href="/projetos">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Projetos
                    </Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
                            <p>O Programa Nacional de Formação é uma iniciativa abrangente focada em capacitar profissionais do SUS e da rede pública de ensino para identificar, prescrever e acompanhar o uso de Tecnologias Assistivas.</p>
                            <p>Através de cursos presenciais e EAD, o programa já certificou milhares de profissionais em todo o país, garantindo que o conhecimento chegue onde é mais necessário.</p>
                            <h3>Objetivos Principais:</h3>
                            <ul>
                                <li>Capacitar equipes multidisciplinares</li>
                                <li>Padronizar protocolos de atendimento</li>
                                <li>Melhorar a qualidade de vida dos usuários finais</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <div className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
                                Status: Em andamento
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                        <Image
                            src="/images/project-1.jpg"
                            alt="Programa Nacional de Formação"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
