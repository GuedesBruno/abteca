import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from 'next'
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: 'Associados | ABTECA',
    description: 'Benefícios e informações para associados da ABTECA.',
}

import { PageHeader } from "@/components/layout/PageHeader"

export default function Associados() {
    const benefits = [
        "Descontos em cursos e eventos",
        "Acesso à biblioteca digital exclusiva",
        "Networking com profissionais da área",
        "direito a voto nas assembleias",
        "Participação em grupos de trabalho temáticos"
    ]

    return (
        <div className="flex flex-col bg-slate-100">
            <PageHeader
                title="Área do Associado"
                description="Faça parte dessa rede que transforma vidas. Junte-se a nós e fortaleça o ecossistema de Tecnologia Assistiva no Brasil."
                variant="grid"
            />
            <div className="container py-12 md:py-24">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-4">Por que se associar?</h2>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button asChild className="w-full">
                                <Link href="/associe-se">Quero me Associar</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="font-semibold">Pessoa Física</h3>
                                <p className="text-sm text-muted-foreground">Profissionais, pesquisadores e estudantes.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold">Pessoa Jurídica</h3>
                                <p className="text-sm text-muted-foreground">Empresas, startups e instituições de ensino.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold">Institucional</h3>
                                <p className="text-sm text-muted-foreground">Órgãos públicos e ONGs parceiras.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
