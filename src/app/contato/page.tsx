"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome obrigatório" }),
    email: z.string().email({ message: "E-mail inválido" }),
    subject: z.string().min(5, { message: "Assunto obrigatório" }),
    message: z.string().min(10, { message: "Mensagem muito curta" }),
});

export default function ContatoPage() {
    const [sent, setSent] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Contact form:", values);
        setSent(true);
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <section className="bg-slate-100 py-16 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">Fale Conosco</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Dúvidas, sugestões ou parcerias? Estamos à disposição para atender você.
                </p>
            </section>

            <div className="container mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-8">Envie sua mensagem</h2>
                    {sent ? (
                        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                            Mensagem enviada com sucesso! Responderemos em breve.
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl><Input placeholder="Seu nome" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl><Input placeholder="seu@email.com" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Assunto</FormLabel>
                                            <FormControl><Input placeholder="Motivo do contato" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mensagem</FormLabel>
                                            <FormControl><Textarea className="min-h-[150px]" placeholder="Como podemos ajudar?" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
                            </form>
                        </Form>
                    )}
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
                    <div className="grid gap-6">
                        <Card>
                            <CardContent className="flex items-start p-6">
                                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Endereço</h3>
                                    <p className="text-muted-foreground">Av. Paulista, 1000, Conj 101<br />Bela Vista, São Paulo - SP<br />CEP: 01310-100</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-start p-6">
                                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">E-mail</h3>
                                    <p className="text-muted-foreground">contato@abteca.org.br<br />imprensa@abteca.org.br</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-start p-6">
                                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Telefone</h3>
                                    <p className="text-muted-foreground">(11) 99999-9999<br />Seg-Sex, 9h às 18h</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-slate-200 h-64 rounded-xl w-full flex items-center justify-center text-slate-500 font-medium">
                        [Google Maps Placeholder]
                    </div>
                </div>
            </div>
        </div>
    );
}
