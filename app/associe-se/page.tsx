"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm, ValidationError } from "@formspree/react"
import { toast } from "sonner"
import { useEffect } from "react"

export default function AssocieSePage() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "mqargjle")

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Solicitação enviada com sucesso! Analisaremos seus dados em breve.")
        }
        if (state.errors) {
            toast.error("Erro ao enviar. Verifique os dados e tente novamente.")
        }
    }, [state.succeeded, state.errors])

    return (
        <div className="container py-16 max-w-3xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">Ficha de Associação</h1>
                <p className="text-muted-foreground">
                    Preencha o formulário abaixo para solicitar sua filiação à ABTECA.
                    Seu cadastro será analisado pela nossa diretoria.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Dados do Solicitante</CardTitle>
                    <CardDescription>Todos os campos são obrigatórios.</CardDescription>
                </CardHeader>
                <CardContent>
                    {state.succeeded ? (
                        <div className="text-center py-8">
                            <h3 className="text-xl font-bold text-green-600 mb-2">Solicitação Recebida!</h3>
                            <p className="text-muted-foreground">
                                Obrigado pelo interesse em se associar.<br />
                                Entraremos em contato pelo e-mail informado.
                            </p>
                            <Button variant="outline" className="mt-6" onClick={() => window.location.reload()}>
                                Nova Solicitação
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Hidden field to identify the form origin in Formspree */}
                            <input type="hidden" name="_subject" value="Nova Solicitação de Associação (Site ABTECA)" />

                            <div className="space-y-3">
                                <Label>Tipo de Pessoa</Label>
                                <RadioGroup defaultValue="PF" name="type" className="flex flex-row gap-4">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="PF" id="pf" />
                                        <Label htmlFor="pf">Pessoa Física</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="PJ" id="pj" />
                                        <Label htmlFor="pj">Pessoa Jurídica</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Completo / Razão Social</Label>
                                <Input id="name" name="name" placeholder="Digite seu nome ou da empresa" required />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                                    <Input id="phone" name="phone" placeholder="(00) 00000-0000" />
                                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="document">CPF / CNPJ</Label>
                                <Input id="document" name="document" placeholder="Digite apenas números" required />
                                <ValidationError prefix="Document" field="document" errors={state.errors} className="text-red-500 text-sm" />
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="font-semibold mb-4">Taxa de Associação</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    A anuidade da ABTECA contribui para a manutenção de nossas atividades.
                                    Após o cadastro, entraremos em contato com as instruções de pagamento.
                                </p>
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                                {state.submitting ? "Enviando..." : "Enviar Solicitação"}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
