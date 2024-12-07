import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

const main = async () => {
    const hashedPassword = await bcrypt.hash("123456", 10);
    await prisma.user.createMany({
        data: [
            {
                email: 'alex.mason@it-labs.com',
                name: 'Alex Mason',
                password: hashedPassword,
            },
            {
                email: 'linda.kane@it-labs.com',
                name: 'Linda Kane',
                password: hashedPassword,
            },
            {
                email: 'brad.foster@it-labs.com',
                name: 'Brad Foster',
                password: hashedPassword,
            },
            {
                email: 'sophia.bennett@it-labs.com',
                name: 'Sophia Bennett',
                password: hashedPassword,
            },
            {
                email: 'ryan.brooks@it-labs.com',
                name: 'Ryan Brooks',
                password: hashedPassword,
            },
            {
                email: 'emily.hudson@it-labs.com',
                name: 'Emily Hudson',
                password: hashedPassword,
            },
            {
                email: 'jake.anderson@it-labs.com',
                name: 'Jake Anderson',
                password: hashedPassword,
            },
            {
                email: 'olivia.hart@it-labs.com',
                name: 'Olivia Hart',
                password: hashedPassword,
            },
            {
                email: 'michael.davis@it-labs.com',
                name: 'Michael Davis',
                password: hashedPassword,
            },
            {
                email: 'mia.evans@it-labs.com',
                name: 'Mia Evans',
                password: hashedPassword,
            }
        ]
    })
}

main().then(() => {
    prisma.$disconnect()
}).catch(async (e: any) => {
    console.log('e', e)
    prisma.$disconnect()
    process.exit(1)
})