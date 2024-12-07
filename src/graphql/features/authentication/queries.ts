import {User} from "@prisma/client";

export const authQueries = {
    me: async (parent: any, args: any, context: any) => {
        if (!context.user) {
            throw new Error('You must be logged in');
        }

        return context.user;
    }
}