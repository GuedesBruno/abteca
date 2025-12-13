"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { PageHeader } from "@/components/layout/PageHeader"

import { Send } from "lucide-react"

export default function ContatoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <PageHeader
                title="Fale Conosco"
                description="Entre em contato conosco para dúvidas, sugestões ou parcerias."
            />
            <div className="container py-12 md:py-24">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="space-y-8">
                        <Card className="border-t-4 border-t-primary shadow-md">
                            <CardHeader>
                                <CardTitle className="text-2xl">Nossos Canais</CardTitle>
                                <CardDescription>Estamos prontos para atender você.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Endereço</p>
                                        <p className="text-muted-foreground">R. das Camélias, 37 - sala 203<br />Mirandópolis, São Paulo - SP, 04048-060</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Telefone</p>
                                        <p className="text-muted-foreground">(11) 93213-7106</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">E-mail</p>
                                        <p className="text-muted-foreground">abteca1@gmail.com</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <Card className="shadow-lg">
                            <CardHeader className="bg-primary/5 border-b">
                                <CardTitle className="flex items-center gap-2">
                                    <Send className="h-5 w-5 text-primary" />
                                    Envie uma Mensagem
                                </CardTitle>
                                <CardDescription>Preencha o formulário abaixo e retornaremos em breve.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <form className="space-y-4" action="https://formspree.io/f/xpwvkgka" method="POST">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                        <Input id="name" name="name" placeholder="Seu nome" className="bg-slate-50" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                                        <Input id="email" name="email" type="email" placeholder="seu@email.com" className="bg-slate-50" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                                        <Textarea id="message" name="message" placeholder="Como podemos ajudar?" className="min-h-[150px] bg-slate-50" required />
                                    </div>
                                    <Button className="w-full text-lg h-12" type="submit">Enviar Mensagem</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
