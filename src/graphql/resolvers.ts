import { userMutationsResolvers } from "./features/users/mutations";
import { userQueriesResolvers } from "./features/users/queries";
import {userBooksMutationsResolvers} from "./features/users/books/mutations";
import {booksQueryResolver} from "./features/books/queries";

export const resolvers = {
    Query: {
        ...userQueriesResolvers,
        ...booksQueryResolver
    },
    Mutation: {
        ...userMutationsResolvers,
        ...userBooksMutationsResolvers
    },

};

export default resolvers;
