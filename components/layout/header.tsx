import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
    const routes = [
        { href: "/", label: "Home" },
        { href: "/quem-somos", label: "Quem Somos" },
        { href: "/o-que-fazemos", label: "O que Fazemos" },
        { href: "/projetos", label: "Projetos" },
        { href: "/associados", label: "Associados" },
        { href: "/noticias", label: "Notícias" },
        { href: "/contato", label: "Contato" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Logo ABTECA" width={200} height={60} className="h-14 w-auto object-contain" />
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link href="/associe-se">Associe-se</Link>
                    </Button>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-bold text-primary">ABTECA</span>
                        </Link>
                        <nav className="flex flex-col gap-4 mt-8">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className="text-lg font-medium hover:text-primary"
                                >
                                    {route.label}
                                </Link>
                            ))}
                            <Button asChild className="mt-4 w-full">
                                <Link href="/associe-se">Associe-se</Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
