import { PageHeader } from "@/components/layout/PageHeader"
import { GraduationCap, Microscope, Landmark, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OQueFazemos() {
    const eixos = [
        {
            title: "Educação e Capacitação",
            description: "Promovemos cursos, workshops e treinamentos para profissionais da saúde, educação e familiares. Capacitamos facilitadores para multiplicar o conhecimento em TA.",
            icon: GraduationCap,
            color: "text-blue-600",
            bg: "bg-blue-100",
            border: "border-t-blue-500"
        },
        {
            title: "Pesquisa e Desenvolvimento",
            description: "Apoiamos e desenvolvemos projetos de inovação tecnológica que buscam soluções acessíveis. Fomentamos parcerias com universidades e centros de pesquisa.",
            icon: Microscope,
            color: "text-purple-600",
            bg: "bg-purple-100",
            border: "border-t-purple-500"
        },
        {
            title: "Políticas Públicas",
            description: "Atuamos junto aos órgãos governamentais na proposição e monitoramento de leis. Participamos ativamente de conselhos e fóruns de defesa de direitos.",
            icon: Landmark,
            color: "text-green-600",
            bg: "bg-green-100",
            border: "border-t-green-500"
        },
        {
            title: "Defesa de Direitos",
            description: "Trabalhamos para garantir que a tecnologia assistiva seja reconhecida como um direito fundamental. Oferecemos suporte jurídico e orientação para famílias.",
            icon: ShieldCheck,
            color: "text-orange-600",
            bg: "bg-orange-100",
            border: "border-t-orange-500"
        }
    ]

    return (
        <div className="flex flex-col bg-slate-100">
            <PageHeader
                title="O Que Fazemos"
                description="Conheça nossos eixos de atuação: Educação, Pesquisa e Políticas Públicas."
                variant="circles"
            />
            <div className="container py-6 md:py-12">
                <div className="grid gap-8 md:grid-cols-2">
                    {eixos.map((eixo, index) => (
                        <Card key={index} className={`border-t-4 ${eixo.border} hover:shadow-xl transition-all duration-300 group`}>
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                <div className={`${eixo.bg} p-3 rounded-xl ${eixo.color} group-hover:scale-110 transition-transform`}>
                                    <eixo.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-xl font-bold">{eixo.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mt-2">{eixo.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
