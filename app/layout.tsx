import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
// import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ABTECA - Tecnologia Assistiva para Autonomia e Inclusão',
    description: 'Associação Brasileira de Tecnologia Assistiva',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased flex flex-col")}>
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                {/* <Toaster /> */}
            </body>
        </html>
    )
}
