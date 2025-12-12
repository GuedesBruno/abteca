import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Quem Somos - ABTECA",
    description: "Conheça nossa história, missão e os valores que guiam a ABTECA."
};

export default function QuemSomosPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Page Header */}
            <section className="bg-slate-100 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <Badge className="mb-4 bg-primary text-white hover:bg-primary/90">Institucional</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                        Quem Somos
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        Há mais de uma década liderando a transformação social através da tecnologia assistiva no Brasil.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-16 space-y-24">

                {/* Mission, Vision, Values */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-t-4 border-t-blue-600 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-800">Missão</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Promover a inclusão social e a autonomia de pessoas com deficiência por meio do desenvolvimento, difusão e democratização da tecnologia assistiva.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-t-4 border-t-yellow-500 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-yellow-700">Visão</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Ser reconhecida nacional e internacionalmente como referência em inovação e fomento de políticas públicas para acessibilidade.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-t-4 border-t-green-600 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-green-700">Valores</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-600" /> Ética e Transparência</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-600" /> Inovação Social</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-600" /> Cooperativismo</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-600" /> Respeito à Diversidade</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* History */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Nossa História</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                A ABTECA foi fundada em 2010 por um grupo de pesquisadores, engenheiros e ativistas sociais que identificaram a necessidade de unificar esforços para o avanço da tecnologia assistiva no país.
                            </p>
                            <p>
                                Iniciando suas atividades com pequenos projetos de adaptação de mobiliário escolar, a associação rapidamente expandiu seu escopo para incluir desenvolvimento de software, robótica e advocacy.
                            </p>
                            <p>
                                Hoje, contamos com parcerias em mais de 20 estados brasileiros e colaborações internacionais, impactando diretamente a vida de milhares de pessoas anualmente.
                            </p>
                        </div>
                        <Button variant="outline" className="mt-4" asChild>
                            <Link href="/projetos">Ver nossa linha do tempo de projetos <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <div className="flex-1 relative h-[400px] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                        <div className="text-slate-400 font-bold text-lg">[Foto Histórica da Fundação - Placeholder]</div>
                    </div>
                </section>

                {/* Structure */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Estrutura Organizacional</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { role: "Presidência", name: "Dra. Maria Silva" },
                            { role: "Diretoria Científica", name: "Prof. João Santos" },
                            { role: "Diretoria Administrativa", name: "Carla Oliveira" },
                            { role: "Conselho Fiscal", name: "Roberto Souza" }
                        ].map((member) => (
                            <Card key={member.role} className="text-center shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 flex items-center justify-center text-slate-400">
                                        Foto
                                    </div>
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <p className="text-sm text-primary font-medium">{member.role}</p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
