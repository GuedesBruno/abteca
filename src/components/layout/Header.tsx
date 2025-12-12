"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "O que Fazemos", href: "/o-que-fazemos" },
    { name: "Projetos", href: "/projetos" },
    { name: "Associados", href: "/associados" },
    { name: "Notícias", href: "/noticias" },
    { name: "Contato", href: "/contato" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="ABTECA Logo" className="h-20 w-auto" />
                    {/* <span className="font-bold text-xl md:text-2xl text-primary tracking-tight">
                        ABTECA
                    </span> */}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary font-bold" : "text-foreground/80"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ModeToggle />
                    <Button asChild className="hidden lg:flex" size="sm">
                        <Link href="/associe-se">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Associe-se
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="pl-0 pr-0">
                        <div className="px-7">
                            <Link
                                href="/"
                                className="flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <img src="/logo.png" alt="ABTECA Logo" className="h-14 w-auto mr-2" />
                                {/* <div className="bg-primary w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-lg mr-2">
                                    A
                                </div>
                                <span className="font-bold text-xl text-primary">ABTECA</span> */}
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-4 mt-8 px-7">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-2 py-1 text-lg font-semibold transition-colors hover:text-primary",
                                        pathname === item.href ? "text-primary" : "text-foreground/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-4">
                                <div className="flex justify-start">
                                    <ModeToggle />
                                </div>
                                <Button asChild className="w-full justify-start" size="lg" onClick={() => setIsOpen(false)}>
                                    <Link href="/associe-se">
                                        <UserPlus className="mr-2 h-5 w-5" />
                                        Associe-se Agora
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
