import db from "../../../lib/db";


export const booksQueryResolver = {
    books: async () => {
        try {
            return await db.book.findMany({
                include: {
                    prices: true,
                    user: true
                }
            })
        } catch (e) {
            console.log('e', e)
        }
    },
    book: async (_: any,args:  {id: number}) => {
        try {
            return db.book.findFirst({
                where: {id: Number(args.id)},
                include: {
                    user: true
                }
            });
        } catch (e) {
            console.log('e', e)

        }
    }
}