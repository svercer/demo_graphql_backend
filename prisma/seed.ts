import {PrismaClient} from "@prisma/client";

const prisma  = new PrismaClient()

const main = async () => {
    await prisma.user.createMany({
        data: [
            {
                email: 'alex.mason@it-labs.com',
                name: 'Alex Mason'
            },
            {
                email: 'linda.kane@it-labs.com',
                name: 'Linda Kane'
            },
            {
                email: 'brad.foster@it-labs.com',
                name: 'Brad Foster'
            },
            {
                email: 'sophia.bennett@it-labs.com',
                name: 'Sophia Bennett'
            },
            {
                email: 'ryan.brooks@it-labs.com',
                name: 'Ryan Brooks'
            },
            {
                email: 'emily.hudson@it-labs.com',
                name: 'Emily Hudson'
            },
            {
                email: 'jake.anderson@it-labs.com',
                name: 'Jake Anderson'
            },
            {
                email: 'olivia.hart@it-labs.com',
                name: 'Olivia Hart'
            },
            {
                email: 'michael.davis@it-labs.com',
                name: 'Michael Davis'
            },
            {
                email: 'mia.evans@it-labs.com',
                name: 'Mia Evans'
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