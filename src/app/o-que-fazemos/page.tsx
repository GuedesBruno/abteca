import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, School, Scale, Rocket, Share2 } from "lucide-react";

export const metadata = {
    title: "O Que Fazemos - ABTECA",
    description: "Conheça nossos eixos de atuação: Pesquisa, Educação, Apoio a Políticas, Inovação e Difusão."
};

const axes = [
    {
        title: "Pesquisa e Desenvolvimento",
        description: "Realizamos estudos técnicos e mapeamento de demandas para estimular a criação de novas soluções em tecnologia assistiva.",
        icon: Microscope,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        title: "Educação e Formação",
        description: "Oferecemos cursos, workshops e materiais didáticos para capacitar profissionais, familiares e usuários.",
        icon: School,
        color: "text-yellow-600",
        bg: "bg-yellow-100",
    },
    {
        title: "Apoio a Políticas Públicas",
        description: "Atuamos junto aos órgãos governamentais para a construção de uma legislação inclusiva e fomento ao setor.",
        icon: Scale,
        color: "text-red-600",
        bg: "bg-red-100",
    },
    {
        title: "Incentivo à Inovação",
        description: "Apoiamos startups e inventores independentes através de mentorias e articulação com investidores.",
        icon: Rocket,
        color: "text-purple-600",
        bg: "bg-purple-100",
    },
    {
        title: "Comunicação e Difusão",
        description: "Disseminamos conhecimento sobre tecnologia assistiva para combater o preconceito e informar sobre direitos.",
        icon: Share2,
        color: "text-green-600",
        bg: "bg-green-100",
    },
];

export default function OQueFazemosPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <section className="bg-background border-b py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Badge variant="outline" className="mb-4">Nossa Atuação</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                        Como Transformamos Vidas
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Nossa atuação é estruturada em cinco pilares fundamentais que cobrem desde a concepção da tecnologia até sua efetiva utilização pela sociedade.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {axes.map((axis) => (
                        <Card key={axis.title} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <div className={`h-2 w-full ${axis.bg.replace('bg-', 'bg-gradient-to-r from-transparent via-')}`.replace('100', '400') + ' to-transparent opacity-50'} />
                            <CardHeader className="space-y-4">
                                <div className={`w-16 h-16 rounded-2xl ${axis.bg} flex items-center justify-center ${axis.color} transition-transform group-hover:scale-110`}>
                                    <axis.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {axis.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {axis.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
