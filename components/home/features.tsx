import { CheckCircle2, Lightbulb, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        title: "Pesquisa e Inovação",
        description: "Fomento ao desenvolvimento de novas tecnologias e soluções assistivas nacionais.",
        icon: Lightbulb,
    },
    {
        title: "Políticas Públicas",
        description: "Atuação direta na formulação e monitoramento de políticas para pessoas com deficiência.",
        icon: Users,
    },
    {
        title: "Formação em TA",
        description: "Programas de capacitação e certificação para profissionais e pesquisadores.",
        icon: CheckCircle2,
    },
]

export function Features() {
    return (
        <section className="container py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-lg bg-card/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader>
                            <feature.icon className="h-12 w-12 text-primary mb-4" />
                            <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
