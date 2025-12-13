import { ArrowRight } from "lucide-react"
import { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Projetos | ABTECA',
    description: 'Conheça os projetos em andamento da ABTECA.',
}

import { PageHeader } from "@/components/layout/PageHeader"

export default function Projetos() {
    const projetos = [
        {
            title: "Programa Nacional de Formação",
            description: "Capacitação em larga escala para profissionais do SUS e da rede pública de ensino.",
            status: "Em andamento",
            bg: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600",
            badge: "bg-blue-100 text-blue-700"
        },
        {
            title: "Observatório de TA",
            description: "Monitoramento e produção de dados sobre o ecossistema de Tecnologia Assistiva no Brasil.",
            status: "Em andamento",
            bg: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600",
            badge: "bg-blue-100 text-blue-700"
        },
        {
            title: "Lab de Inovação Aberta",
            description: "Espaço co-criativo para desenvolvimento de protótipos de baixo custo.",
            status: "Fase Piloto",
            bg: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600",
            badge: "bg-blue-100 text-blue-700"
        }
    ]

    return (
        <div className="flex flex-col bg-slate-100">
            <PageHeader
                title="Nossos Projetos"
                description="Conheça as iniciativas que estão transformando a realidade da acessibilidade no Brasil."
                variant="grid"
            />
            <div className="container py-12 md:py-24">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projetos.map((projeto, index) => (
                        <div key={index} className={`group relative flex flex-col space-y-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${projeto.bg}`}>
                            <div className="space-y-2">
                                <h3 className={`font-bold text-xl ${projeto.iconColor}`}>{projeto.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{projeto.description}</p>
                            </div>
                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-black/5">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${projeto.badge}`}>{projeto.status}</span>
                                <Link href="#" className={`inline-flex items-center text-sm font-bold hover:underline ${projeto.iconColor}`}>
                                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
