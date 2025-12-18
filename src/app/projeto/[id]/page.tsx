import { PROJECTS } from "@/data/projects";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// This is crucial for static hosting output
export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
    const project = PROJECTS.find((p) => p.id === params.id);

    if (!project) {
        return {
            title: 'Projeto não encontrado',
        }
    }

    return {
        title: `${project.title} | ABTECA`,
        description: project.description,
    }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = PROJECTS.find((p) => p.id === params.id);

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
                            {/* We use dangerouslySetInnerHTML because fullDescription contains HTML tags from our data file */}
                            <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <div className={`px-4 py-2 rounded-lg text-sm font-semibold ${project.badgeStyle || "bg-blue-100 text-blue-800"}`}>
                                Status: {project.status}
                            </div>
                            {project.externalLink && (
                                <Button asChild>
                                    <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                        Acesse o site oficial
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                        {/* Placeholder image logic - in a real app check if image exists */}
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
