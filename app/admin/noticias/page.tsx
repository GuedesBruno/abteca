import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash } from "lucide-react"
// import { prisma } from "@/lib/prisma"

export default async function AdminNewsPage() {
    // Fetch real data
    // const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } })
    const news = [
        { id: "1", title: "Exemplo de Notícia", createdAt: new Date() },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gerenciar Notícias</h1>
                <Button asChild>
                    <Link href="/admin/noticias/new"><Plus className="mr-2 h-4 w-4" /> Nova Notícia</Link>
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Título</TableHead>
                            <TableHead>Data</TableHead>
                            <TableHead className="w-[100px]">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {news.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell>{item.createdAt.toLocaleDateString('pt-BR')}</TableCell>
                                <TableCell className="flex space-x-2">
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={`/admin/noticias/${item.id}`}><Edit className="h-4 w-4" /></Link>
                                    </Button>
                                    <form>
                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
