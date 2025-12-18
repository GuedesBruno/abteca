import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Lab de Inovação Aberta | ABTECA',
    description: 'Espaço co-criativo para desenvolvimento de protótipos de baixo custo.',
}

export default function ProjetoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <PageHeader
                title="Lab de Inovação Aberta"
                description="Inovação"
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
                            <p>Um espaço maker dedicado à tecnologia assistiva, onde desenvolvedores, terapeutas e usuários co-criam soluções acessíveis e de código aberto.</p>
                            <p>O Lab apoia projetos que utilizam impressão 3D, eletrônica básica e materiais adaptáveis para criar dispositivos personalizados.</p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <div className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
                                Status: Fase Piloto
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                        <Image
                            src="/images/project-3.jpg"
                            alt="Lab de Inovação Aberta"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
