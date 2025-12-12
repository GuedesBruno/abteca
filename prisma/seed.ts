import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const passwordHash = await bcrypt.hash('admin123', 10)

    const user = await prisma.user.upsert({
        where: { email: 'admin@abteca.org.br' },
        update: {},
        create: {
            email: 'admin@abteca.org.br',
            name: 'Admin ABTECA',
            passwordHash,
            role: 'admin',
        },
    })

    console.log({ user })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
