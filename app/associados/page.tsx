import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// ... inside component ...
<div className="flex items-center gap-3">
    <CardTitle className="text-2xl">Já sou associado</CardTitle>
    <Badge variant="secondary">Em Breve</Badge>
</div>
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Lock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Área do Associado - ABTECA",
    description: "Acesso restrito para associados ABTECA",
}

export default function AssociadosPage() {
    return (
        <div className="container py-16 max-w-5xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">Área do Associado</h1>
                <p className="text-muted-foreground text-lg">Acesse conteúdos exclusivos e gerencie sua inscrição.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="shadow-lg border-primary/20">
                    <CardHeader>
                        <div className="mb-4">
                            <Lock className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">Já sou associado</CardTitle>
                        <CardDescription>Faça login para acessar o portal administrativo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6 text-muted-foreground">
                            Acesse documentos, atas, editais exclusivos e participe das votações.
                        </p>
                        <Button size="lg" className="w-full" disabled>
                            Em Breve
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-slate-50 border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">Benefícios de se Associar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                            <p>Descontos em eventos e cursos parceiros.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                            <p>Acesso à rede de pesquisadores e empresas.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                            <p>Participação nos grupos de trabalho temáticos.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                            <p>Divulgação de seus projetos nos canais da ABTECA.</p>
                        </div>

                        <div className="pt-6">
                            <Button variant="outline" size="lg" className="w-full" asChild>
                                <Link href="/associe-se">Quero me Associar</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
