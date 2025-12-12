import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, GraduationCap } from "lucide-react";

const highlights = [
    {
        title: "Inclusão Social",
        description: "Promovemos a autonomia e independência de pessoas com deficiência através da tecnologia.",
        icon: Users,
        color: "text-blue-600",
    },
    {
        title: "Inovação Tecnológica",
        description: "Fomentamos a pesquisa e o desenvolvimento de novos dispositivos e softwares acessíveis.",
        icon: Lightbulb,
        color: "text-yellow-500",
    },
    {
        title: "Educação e Formação",
        description: "Capacitamos profissionais e usuários para o uso efetivo de tecnologias assistivas.",
        icon: GraduationCap,
        color: "text-green-600",
    },
];

export function Highlights() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <Card key={item.title} className="border-none shadow-xl bg-card hover:bg-slate-50 transition-colors duration-300">
                            <CardHeader className="space-y-4">
                                <div className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center ${item.color}`}>
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
