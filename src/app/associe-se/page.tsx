"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Insira um e-mail válido.",
    }),
    type: z.string().min(1, "Selecione o tipo de associado."),
    message: z.string().optional(),
});

export default function AssocieSePage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Enviando...",
            description: "Processando sua solicitação.",
        })
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center space-y-4 animate-in zoom-in-50 duration-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Solicitação Enviada!</h2>
                    <p className="text-muted-foreground">
                        Obrigado pelo seu interesse em se associar à ABTECA. Nossa equipe analisará seus dados e entrará em contato em breve pelo e-mail fornecido.
                    </p>
                    <Button onClick={() => window.location.href = '/'} className="w-full mt-4">
                        Voltar para Home
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <section className="bg-primary py-16 md:py-24 text-center">
                <div className="container px-4 md:px-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Associe-se à ABTECA</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Preencha o formulário abaixo para iniciar seu processo de associação. Juntos somos mais fortes na construção de um país mais acessível.
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 mt-[-3rem]">
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome Completo / Razão Social</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite seu nome ou da sua empresa" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail Corporativo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="seu@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tipo de Associado</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="individual">Pessoa Física - Profissional</SelectItem>
                                                    <SelectItem value="student">Pessoa Física - Estudante</SelectItem>
                                                    <SelectItem value="company_small">Empresa (Pequeno Porte)</SelectItem>
                                                    <SelectItem value="company_large">Empresa (Médio/Grande Porte)</SelectItem>
                                                    <SelectItem value="ngo">ONG / Instituição Sem Fins Lucrativos</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mensagem (Opcional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Conte-nos um pouco sobre sua atuação na área de tecnologia assistiva"
                                                className="resize-none min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Breve descrição de seus interesses ou atividades.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full text-lg h-12">Enviar Solicitação</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
