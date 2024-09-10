import db from "../../../lib/db";
import {GraphQLResolveInfo} from "graphql/type";

export const userQueries = {
    users: async (parent: any, args: {
        pageSize: string,
        page: number
    }, contextValue: any, info: GraphQLResolveInfo) => {
        const skip = (args.page - 1) * Number(args.pageSize)

        const users = db.user.findMany({
            include: {
                books: true,
            },
            skip: skip,
            take: Number(args.pageSize ?? 50)
        })


        const totalItems = await db.user.count()

        return {
            data: users,
            meta: {
                totalItems: totalItems,
                currentPage: Number(args.page),
                pageSize: Number(args.pageSize)
            }
        }
    },
    user: async (_: any, args: { id: number }) => {
        return db.user.findFirst({
            where: {id: Number(args.id)},
            include: {
                books: true,
            },
        });
    },
}