import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Quem Somos - ABTECA",
    description: "Conheça a história e a missão da Associação Brasileira de Tecnologia Assistiva",
}

export default function QuemSomosPage() {
    return (
        <div className="container py-16 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 px-4 border-l-4 border-secondary">Quem Somos</h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed px-4">
                <p>
                    A <strong className="text-foreground">Associação Brasileira de Tecnologia Assistiva (ABTECA)</strong> é uma entidade civil
                    sem fins lucrativos, que reúne profissionais, pesquisadores, empresas e instituições dedicadas
                    ao avanço da Tecnologia Assistiva no Brasil.
                </p>

                <p>
                    Fundada com o propósito de articular diferentes atores do ecossistema de inclusão, a ABTECA
                    trabalha incansavelmente para que a tecnologia seja um vetor de autonomia para pessoas com
                    deficiência e mobilidade reduzida.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Nossa Missão</h2>
                <p>
                    Promover o desenvolvimento, a pesquisa e a difusão da Tecnologia Assistiva, influenciando
                    políticas públicas e fortalecendo a indústria nacional para garantir o direito à acessibilidade.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Nossa Visão</h2>
                <p>
                    Ser referência nacional e internacional na promoção da Tecnologia Assistiva como ferramenta
                    indispensável para a cidadania plena.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Nossos Valores</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ética e Transparência</li>
                    <li>Compromisso com a Inclusão</li>
                    <li>Inovação Social</li>
                    <li>Colaboração em Rede</li>
                    <li>Defesa de Direitos</li>
                </ul>
            </div>
        </div>
    )
}
