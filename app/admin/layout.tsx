// import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const session = await auth()
    const session = { user: { email: "admin@static.local" } } // Mock session


    return (
        <div className="flex h-screen w-full flex-col md:flex-row">
            <aside className="w-full bg-slate-100 p-6 md:w-64 border-r dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-primary">ABTECA Admin</h2>
                    <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                </div>
                <nav className="flex flex-col gap-2">
                    <a href="/admin" className="p-2 hover:bg-slate-200 rounded font-medium">Dashboard</a>
                    <a href="/admin/noticias" className="p-2 hover:bg-slate-200 rounded font-medium">Notícias</a>
                    <a href="/admin/projetos" className="p-2 hover:bg-slate-200 rounded font-medium">Projetos</a>
                    <a href="/admin/associados" className="p-2 hover:bg-slate-200 rounded font-medium">Associados</a>
                    <div className="mt-8">
                        <button className="w-full text-left p-2 hover:bg-red-100 text-red-600 rounded">Sair</button>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
