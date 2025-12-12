import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, UserPlus } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Para Associados - ABTECA",
    description: "Junte-se a nós. Confira os benefícios de ser um associado ABTECA."
};

const benefits = [
    "Acesso exclusivo a pesquisas e relatórios de mercado",
    "Descontos em cursos, eventos e congressos da ABTECA",
    "Participação em grupos de trabalho temáticos",
    "Divulgação de seus produtos/serviços no portal",
    "Networking com especialistas e empresas do setor",
    "Apoio jurídico e técnico em tecnologia assistiva"
];

export default function AssociadosPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Seja um Associado ABTECA
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
                        Fortaleça o ecossistema de tecnologia assistiva no Brasil e tenha acesso a benefícios exclusivos para você ou sua empresa.
                    </p>
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 text-lg font-bold" asChild>
                        <Link href="/associe-se">
                            Quero me associar agora
                        </Link>
                    </Button>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-20">
                <div className="flex flex-col lg:flex-row gap-12 items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>

                    {/* Benefits List */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold text-primary">Por que se associar?</h2>
                        <div className="grid gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-4 mt-1 bg-green-100 p-1 rounded-full">
                                        <Check className="h-5 w-5 text-green-600" />
                                    </div>
                                    <p className="text-lg text-muted-foreground">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Membership Card */}
                    <div className="flex-1 w-full lg:max-w-md">
                        <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                                Mais Popular
                            </div>
                            <CardHeader className="bg-slate-50 border-b pb-8">
                                <CardTitle className="text-2xl font-bold text-primary">Associado Pleno</CardTitle>
                                <CardDescription className="text-base mt-2">Para profissionais e empresas</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8 text-center space-y-4">
                                <div>
                                    <span className="text-4xl font-extrabold text-foreground">R$ 150</span>
                                    <span className="text-muted-foreground">/ano</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Valor simbólico para manutenção das atividades da associação.
                                </p>
                            </CardContent>
                            <CardFooter className="pb-8 pt-4">
                                <Button className="w-full h-12 text-lg" asChild>
                                    <Link href="/associe-se">
                                        <UserPlus className="mr-2 h-5 w-5" />
                                        Preencher cadastro
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
