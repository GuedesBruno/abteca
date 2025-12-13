import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "ABTECA - Associação Brasileira de Tecnologia Assistiva",
    template: "%s | ABTECA"
  },
  description: "Promovendo inclusão através da tecnologia e inovação. A ABTECA conecta profissionais, empresas e usuários para desenvolver soluções de tecnologia assistiva no Brasil.",
  keywords: ["Tecnologia Assistiva", "Inclusão", "Acessibilidade", "ABTECA", "Deficiência", "Inovação Social", "Brasil"],
  authors: [{ name: "ABTECA" }],
  metadataBase: new URL("https://abteca.org.br"),
  openGraph: {
    title: "ABTECA - Inclusão e Tecnologia",
    description: "Associação Brasileira de Tecnologia Assistiva - Construindo um futuro mais acessível.",
    url: "https://abteca.org.br",
    siteName: "ABTECA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABTECA - Inclusão e Tecnologia",
    description: "Conheça a Associação Brasileira de Tecnologia Assistiva.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
