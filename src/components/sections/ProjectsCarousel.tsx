"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export function ProjectsCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section className="py-12 md:py-16 bg-primary overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Nossos Projetos</h2>
                        <p className="text-blue-100 text-lg">
                            Conheça as iniciativas que estão transformando o cenário da acessibilidade no Brasil.
                        </p>
                    </div>
                    <Button variant="secondary" asChild>
                        <Link href="/projetos" className="group">
                            Ver todos os projetos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {PROJECTS.slice(0, 3).map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                            }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white border-none">
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="secondary" className={`mb-2 ${project.badgeStyle || "bg-blue-100 text-primary hover:bg-blue-200"}`}>
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group" asChild>
                                        <Link
                                            href={project.externalLink || `/projeto-${project.id}`}
                                            target={project.externalLink ? "_blank" : undefined}
                                            rel={project.externalLink ? "noopener noreferrer" : undefined}
                                        >
                                            {project.externalLink ? "Aceder Observatório" : "Saiba mais"} <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
