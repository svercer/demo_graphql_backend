import db from "../../../lib/db";


export const booksQueryResolver = {
    books: async () => {
        try {
            return await db.book.findMany()
        } catch (e) {
            console.log('e', e)
        }
    },
    book: async (_: any,args:  {id: number}) => {
        try {
            return db.book.findFirst({
                where: {id: Number(args.id)},

            });
        } catch (e) {
            console.log('e', e)

        }
    }
}