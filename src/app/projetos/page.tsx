import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Nossos Projetos - ABTECA",
    description: "Conheça os projetos e programas desenvolvidos pela ABTECA."
};

const projects = [
    {
        id: 1,
        title: "Programa Nacional de Formação",
        description: "Capacitação em larga escala para profissionais de saúde e educação no uso de tecnologias assistivas. Oferecemos cursos presenciais e EAD com foco na aplicação prática de recursos de TA.",
        category: "Educação",
        status: "Em andamento"
    },
    {
        id: 2,
        title: "Observatório de Tecnologia Assistiva",
        description: "Monitoramento e análise de dados sobre o ecossistema de TA no Brasil, gerando inteligência para políticas públicas. Mapeamos fabricantes, pesquisadores e necessidades da população.",
        category: "Pesquisa",
        status: "Em andamento"
    },
    {
        id: 3,
        title: "Apoio a Políticas Públicas",
        description: "Consultoria técnica para governos na elaboração de leis e diretrizes de acessibilidade. Atuamos na revisão de marcos regulatórios e na defesa dos direitos das pessoas com deficiência.",
        category: "Advocacy",
        status: "Contínuo"
    },
    {
        id: 4,
        title: "Incentivo à Inovação",
        description: "Fomento a startups e grupos de pesquisa que desenvolvem novos dispositivos de inclusão. Realizamos hackathons e conectamos inovadores a investidores sociais.",
        category: "Inovação",
        status: "Edital Aberto"
    },
    {
        id: 5,
        title: "Comunicação e Difusão",
        description: "Disseminação de conhecimento técnico e conscientização da sociedade sobre direitos e recursos. Produzimos manuais, podcasts e vídeos acessíveis.",
        category: "Comunicação",
        status: "Contínuo"
    },
];

export default function ProjetosPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <Badge className="mb-4" variant="secondary">Impacto Social</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                        Nossos Projetos
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        Desenvolvemos iniciativas que conectam tecnologia e pessoas, buscando soluções escaláveis para os desafios da inclusão.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline" className="text-primary border-primary/20">{project.category}</Badge>
                                    <Badge className={project.status === "Edital Aberto" ? "bg-green-600" : "bg-slate-500"}>
                                        {project.status}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="pt-4 border-t bg-slate-50/50">
                                <Button variant="ghost" className="w-full justify-between group hover:bg-transparent hover:text-primary px-0">
                                    Ver detalhes do projeto
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
