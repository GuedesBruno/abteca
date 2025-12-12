import { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
    title: "O que Fazemos - ABTECA",
    description: "Eixos de atuação da ABTECA",
}

const axes = [
    {
        title: "Política Pública",
        description: "Atuamos na incidência política para garantir que a Tecnologia Assistiva seja prioridade na agenda governamental. Participamos de conselhos, audiências públicas e grupos de trabalho."
    },
    {
        title: "Pesquisa e Inovação",
        description: "Fomentamos a produção científica e o desenvolvimento tecnológico nacional, conectando universidades, centros de pesquisa e setor produtivo."
    },
    {
        title: "Formação",
        description: "Oferecemos cursos, seminários e eventos para capacitar profissionais de saúde, educação e engenharia no uso e prescrição de TA."
    },
    {
        title: "Redes",
        description: "Articulamos redes de colaboração entre diferentes atores do ecossistema, promovendo a troca de conhecimentos e boas práticas."
    },
    {
        title: "Direitos",
        description: "Defendemos o acesso à Tecnologia Assistiva como um direito humano fundamental, monitorando o cumprimento da LBI (Lei Brasileira de Inclusão)."
    }
]

export default function OQueFazemosPage() {
    return (
        <div className="container py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-12 px-4 text-center">Nossos Eixos de Atuação</h1>

            <div className="grid gap-12">
                {axes.map((axis, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 items-start rounded-lg border p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{axis.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{axis.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
