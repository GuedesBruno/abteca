import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, FolderGit2 } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Associados</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground">+4 novos este mês</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Notícias Publicadas</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <p className="text-xs text-muted-foreground">+2 esta semana</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
                        <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Atalhos Rápidos</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Add quick action buttons here */}
                </div>
            </div>
        </div>
    )
}
