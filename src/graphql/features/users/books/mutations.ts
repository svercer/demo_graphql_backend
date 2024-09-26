import db from '../../../../lib/db'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {Book} from "@prisma/client";

export const userBooksMutationsResolvers = {
    createBook: async (_: any, args: { name: string, userId: number, price: string }) => {
        try {
            return await db.book.create({
                data: {
                    name: args.name,
                    userId: Number(args.userId),
                    prices: {
                        create: {
                            amount: args.price
                        }
                    }
                },
            })

            // await db.$transaction(async () => {
            //     const book = await db.book.create({
            //         data: {
            //             name: args.name,
            //             userId: Number(args.userId),
            //         },
            //     })
            //
            //     await db.price.create({
            //         data: {
            //             amount: args.price,
            //             bookId: book.id
            //         }
            //     })
            // })
            // return book

        } catch (e) {
            console.log('e', e)
        }
    },

    updateBook: async (_: any, args: { id: number,  name: string, price: string }) => {

        await db.$transaction(async () => {
            const book = await db.book.update({
                data: {
                    name: args.name,
                },
                where: { id: Number(args.id) },
            })

            await db.price.create({
                data: {
                    amount: args.price,
                    bookId: book.id
                }
            })
        })
    },

    deleteBook: async (_: any, args: { id: number }) => {
        try {
            await db.book.delete({
                where: { id: Number(args.id) }
            })
            return { message: "Book is Successfully deleted", success: true }
        } catch (error: any) {
            if (error instanceof PrismaClientKnownRequestError) {
                return { message: error?.meta?.cause, success: false }
            }
            return { message: "Something went wrong", success: false }
        }
    }
}