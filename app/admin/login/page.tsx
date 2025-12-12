import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { signIn } from "@/auth"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">ABTECA Admin</CardTitle>
                    <CardDescription>Entre com suas credenciais de administrador</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async (formData) => {
                            console.log("Login disabled in static mode")
                        }}
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input name="email" type="email" placeholder="admin@abteca.org.br" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input name="password" type="password" required />
                        </div>

                        <Button type="submit" className="w-full">Entrar</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
