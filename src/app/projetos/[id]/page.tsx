import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Define the project data
type ProjectData = {
    title: string;
    description: string;
    category: string;
    status: string;
    image: string;
    content: {
        intro: string;
        details: string;
        objectives: string[];
    };
    platformUrl?: string;
};

const projects: Record<string, ProjectData> = {
    "programa-nacional-formacao": {
        title: "Programa Nacional de Formação",
        description: "Educação",
        category: "Educação",
        status: "Em andamento",
        image: "/images/project-1.jpg",
        content: {
            intro: "O Programa Nacional de Formação é uma iniciativa abrangente focada em capacitar profissionais do SUS e da rede pública de ensino para identificar, prescrever e acompanhar o uso de Tecnologias Assistivas.",
            details: "Através de cursos presenciais e EAD, o programa já certificou milhares de profissionais em todo o país, garantindo que o conhecimento chegue onde é mais necessário.",
            objectives: [
                "Capacitar equipes multidisciplinares",
                "Padronizar protocolos de atendimento",
                "Melhorar a qualidade de vida dos usuários finais"
            ]
        }
    },
    "observatorio-tecnologia-assistiva": {
        title: "Observatório de Tecnologia Assistiva",
        description: "Pesquisa",
        category: "Pesquisa",
        status: "Em andamento",
        image: "/images/project-2.jpg",
        content: {
            intro: "O Observatório de Tecnologia Assistiva é uma plataforma de inteligência que monitora o desenvolvimento, a produção e a distribuição de Tecnologia Assistiva no Brasil através do banco de dados ALAT (Assistive Latin America Technology).",
            details: "A ALAT é uma plataforma colaborativa que reúne informações sobre produtos de tecnologia assistiva disponíveis no mercado brasileiro e latino-americano. Através dela, profissionais da saúde, educação e usuários finais podem pesquisar, comparar e conhecer as soluções disponíveis para diferentes necessidades.",
            objectives: [
                "Mapear e catalogar produtos de TA disponíveis no mercado",
                "Facilitar a busca e comparação de soluções assistivas",
                "Conectar fabricantes, distribuidores e usuários finais",
                "Gerar dados e relatórios sobre o ecossistema de TA no Brasil"
            ]
        },
        platformUrl: "https://alat.net.br"
    },
    "lab-inovacao-aberta": {
        title: "Lab de Inovação Aberta",
        description: "Inovação",
        category: "Inovação",
        status: "Em andamento",
        image: "/images/project-3.jpg",
        content: {
            intro: "O Lab de Inovação Aberta é um espaço colaborativo onde empresas, pesquisadores e usuários finais co-criam soluções inovadoras em Tecnologia Assistiva.",
            details: "Utilizando metodologias ágeis e design centrado no usuário, desenvolvemos protótipos e testamos novas tecnologias que atendam às reais necessidades das pessoas com deficiência.",
            objectives: [
                "Fomentar a inovação colaborativa",
                "Desenvolver soluções centradas no usuário",
                "Acelerar a chegada de novas TAs ao mercado"
            ]
        }
    }
};

type ProjectId = keyof typeof projects;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = projects[id as ProjectId];

    if (!project) {
        return {
            title: 'Projeto não encontrado | ABTECA',
        };
    }

    return {
        title: `${project.title} | ABTECA`,
        description: project.content.intro,
    };
}

export default async function ProjetoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects[id as ProjectId];

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <PageHeader
                title={project.title}
                description={project.category}
                variant="dots"
            />

            <div className="container py-12">
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors" asChild>
                    <Link href="/projetos">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Projetos
                    </Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
                            <p>{project.content.intro}</p>
                            <p>{project.content.details}</p>
                            <h3>Objetivos Principais:</h3>
                            <ul>
                                {project.content.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <div className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
                                Status: {project.status}
                            </div>
                        </div>

                        {project.platformUrl && (
                            <div className="pt-6">
                                <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                    <Link href={project.platformUrl} target="_blank" rel="noopener noreferrer">
                                        Acessar Plataforma ALAT
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <p className="text-sm text-slate-600 mt-3">
                                    Cadastre seus produtos de tecnologia assistiva e ajude a expandir o maior banco de dados de TA da América Latina.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate static params for the three projects
export function generateStaticParams() {
    return [
        { id: 'programa-nacional-formacao' },
        { id: 'observatorio-tecnologia-assistiva' },
        { id: 'lab-inovacao-aberta' },
    ];
}
