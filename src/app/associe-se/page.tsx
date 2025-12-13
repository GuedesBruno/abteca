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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Insira um e-mail válido.",
    }),
    phone: z.string().min(14, "Telefone inválido"),
    documentType: z.enum(["cpf", "cnpj"]),
    document: z.string().min(11, "Documento inválido"), // Basic validation, implementation handles specific length
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
            phone: "",
            documentType: "cpf",
            document: "",
            message: "",
        },
    });

    const documentType = form.watch("documentType");

    // Clear document field when type changes
    useEffect(() => {
        form.setValue("document", "");
    }, [documentType, form]);

    const formatDocument = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        if (documentType === "cpf") {
            return numbers
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1");
        } else {
            return numbers
                .replace(/(\d{2})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1/$2")
                .replace(/(\d{4})(\d)/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1");
        }
    };

    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        return numbers
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})\d+?$/, "$1");
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatDocument(e.target.value);
        form.setValue("document", formatted);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        form.setValue("phone", formatted);
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("https://formspree.io/f/xpwvkgka", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                toast({
                    variant: "destructive",
                    title: "Erro no envio",
                    description: "Houve um problema ao enviar sua solicitação. Tente novamente.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Erro no envio",
                description: "Verifique sua conexão e tente novamente.",
            });
        }
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
        <div className="min-h-screen bg-slate-100 pb-20">
            <section className="bg-blue-gradient py-16 md:py-24 text-center">
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
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Celular</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="(00) 00000-0000"
                                                    {...field}
                                                    onChange={handlePhoneChange}
                                                    maxLength={15}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <FormField
                                    control={form.control}
                                    name="documentType"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Tipo de Documento</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-row space-x-4 h-10 items-center"
                                                >
                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="cpf" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            CPF
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="cnpj" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            CNPJ
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
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
                                name="document"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{documentType === 'cpf' ? 'CPF' : 'CNPJ'}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={documentType === 'cpf' ? '000.000.000-00' : '00.000.000/0000-00'}
                                                {...field}
                                                onChange={handleDocumentChange}
                                                maxLength={documentType === 'cpf' ? 14 : 18}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
