import db from '../../../../lib/db'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const userBooksMutations = {
    createBook: async (_: any, args: { name: string, userId: number }) => {
        return db.book.create({
            data: {
                name: args.name,
                userId: Number(args.userId)
            }
        })
    },

    updateBook: async (_: any, args: { id: number,  name: string }) => {
        return  db.book.update({
            data: {
                name: args.name,
            },
            where: { id: Number(args.id) }
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