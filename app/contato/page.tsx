"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm, ValidationError } from "@formspree/react"
import { toast } from "sonner"
import { useEffect } from "react"

export default function ContatoPage() {
    // Uses the ID from environment variable or fallback
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "mqargjle")

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        }
        if (state.errors) {
            toast.error("Ocorreu um erro ao enviar. Tente novamente.")
        }
    }, [state.succeeded, state.errors])

    return (
        <div className="container py-16 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl font-bold text-primary mb-6">Fale Conosco</h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Tem dúvidas, sugestões ou quer saber mais sobre nossos projetos?
                        Entre em contato preenchendo o formulário ou através de nossos canais.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">E-mail</h3>
                                <p className="text-muted-foreground">abteca1@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Telefone</h3>
                                <p className="text-muted-foreground">(11) 93213-7106</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Endereço</h3>
                                <p className="text-muted-foreground">
                                    R. das Camélias, 37 - sala 203<br />
                                    Mirandópolis, São Paulo - SP<br />
                                    CEP 04048-060
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                    {state.succeeded ? (
                        <div className="text-center py-12">
                            <div className="mb-4 text-primary font-bold text-xl">Obrigado pelo contato!</div>
                            <p className="text-muted-foreground">Sua mensagem foi entregue à nossa equipe.</p>
                            <Button variant="outline" className="mt-6" onClick={() => window.location.reload()}>
                                Enviar outra mensagem
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input id="name" name="name" placeholder="Seu nome" required />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Assunto</Label>
                                <Input id="subject" name="subject" placeholder="Do que se trata?" required />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea id="message" name="message" placeholder="Escreva sua mensagem aqui..." className="min-h-[150px]" required />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
                            </div>
                            <Button type="submit" className="w-full text-lg" disabled={state.submitting}>
                                {state.submitting ? "Enviando..." : "Enviar Mensagem"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
