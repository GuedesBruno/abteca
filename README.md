# Portal ABTECA

Site institucional da Associação Brasileira de Tecnologia Assistiva (ABTECA).

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React, TailwindCSS, Shadcn/ui
- **Backend:** Next.js Server Actions
- **Banco de Dados:** PostgreSQL (via Prisma ORM)
- **Autenticação:** NextAuth.js (v5)

## 🛠️ Configuração Inicial

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd ABTECA
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/abteca_db?schema=public"
   NEXTAUTH_SECRET="sua-chave-secreta-aqui"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Prepare o banco de dados:**
   ```bash
   npx prisma generate
   npx prisma db push
   # Para criar o usuário admin inicial:
   npm run prisma:seed
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 🏗️ Estrutura do Projeto

- `app/`: Páginas e rotas (App Router).
- `app/(admin)/`: Rotas protegidas do painel.
- `components/`: Componentes React reutilizáveis.
- `lib/`: Utilitários e configurações (Prisma, Auth).
- `prisma/`: Schema do banco de dados e seeds.

## 📝 Admin

Acesse `/admin` para gerenciar conteúdo.
Usuário padrão (após seed): `admin@abteca.org.br` / `admin123`

## 🤝 Contribuição

Projeto interno da Antigravity para ABTECA.
