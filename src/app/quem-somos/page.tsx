import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { FileText, Target, Telescope, Heart } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: 'Quem Somos | ABTECA',
    description: 'Conheça a história e a missão da Associação Brasileira de Tecnologia Assistiva.',
}

export default function QuemSomos() {
    return (
        <div className="flex flex-col bg-slate-100">
            <PageHeader
                title="Quem Somos"
                description="Conheça a história e a missão da Associação Brasileira de Tecnologia Assistiva."
                variant="dots"
            />

            <div className="container py-12 md:py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa História</h2>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400">
                            Fundada em 2015, a ABTECA nasceu do sonho de tornar a tecnologia acessível para todos.
                            Desde então, trabalhamos incansavelmente para derrubar barreiras e construir pontes através da inovação.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="grid gap-4">
                            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-red-100 p-2 rounded-full min-w-12 h-12 flex items-center justify-center text-red-600">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Missão</h3>
                                        <p className="text-muted-foreground">Promover a inclusão social através do desenvolvimento e disseminação de tecnologias assistivas de alto impacto.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-full min-w-12 h-12 flex items-center justify-center text-blue-600">
                                        <Telescope className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Visão</h3>
                                        <p className="text-muted-foreground">Ser referência nacional em inovação tecnológica voltada para a acessibilidade, liderando a transformação social.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-yellow-100 p-2 rounded-full min-w-12 h-12 flex items-center justify-center text-yellow-600">
                                        <Heart className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Valores</h3>
                                        <p className="text-muted-foreground">Inclusão, Inovação, Transparência, Ética, Compromisso Social e Respeito à Diversidade.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-blue-900 py-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <div className="mx-auto bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                        <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-white">Conheça nosso Estatuto</h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        O Estatuto Social da ABTECA é o documento que rege nossa atuação, definindo nossos objetivos, estrutura organizacional e os direitos e deveres de nossos associados. Ele reflete nosso compromisso com a transparência e a governança ética.
                    </p>
                    <Button size="lg" variant="secondary" className="font-semibold shadow-lg hover:bg-white/90 transition-all active:scale-95" asChild>
                        <a href="/estatuto-abteca.pdf" target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-5 w-5" />
                            Baixar Estatuto (PDF)
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    )
}
