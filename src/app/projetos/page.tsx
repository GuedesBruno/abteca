import { ArrowRight } from "lucide-react"
import { Metadata } from 'next'
import Link from "next/link"
import { PROJECTS } from "@/data/projects"

export const metadata: Metadata = {
    title: 'Projetos | ABTECA',
    description: 'Conheça os projetos em andamento da ABTECA.',
}

import { PageHeader } from "@/components/layout/PageHeader"

export default function Projetos() {
    return (
        <div className="flex flex-col bg-slate-100">
            <PageHeader
                title="Nossos Projetos"
                description="Conheça as iniciativas que estão transformando a realidade da acessibilidade no Brasil."
                variant="grid"
            />
            <div className="container py-6 md:py-12">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((projeto) => (
                        <div key={projeto.id} className={`group relative flex flex-col space-y-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${projeto.bgStyle || "bg-white border-slate-200"}`}>
                            <div className="space-y-2">
                                <h3 className={`font-bold text-xl ${projeto.iconColor || "text-slate-900"}`}>{projeto.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{projeto.description}</p>
                            </div>
                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-black/5">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${projeto.badgeStyle || "bg-slate-100 text-slate-700"}`}>{projeto.status}</span>
                                <Link
                                    href={projeto.externalLink || `/projeto-${projeto.id}`}
                                    target={projeto.externalLink ? "_blank" : undefined}
                                    rel={projeto.externalLink ? "noopener noreferrer" : undefined}
                                    className={`inline-flex items-center text-sm font-bold hover:underline ${projeto.iconColor || "text-slate-900"}`}
                                >
                                    {projeto.externalLink ? "Aceder" : "Saiba mais"} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
