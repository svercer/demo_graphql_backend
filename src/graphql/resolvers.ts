import { userMutationsResolvers } from "./features/users/mutations";
import { userQueriesResolvers } from "./features/users/queries";
import {userBooksMutationsResolvers} from "./features/users/books/mutations";

export const resolvers = {
    Query: {
        ...userQueriesResolvers
    },
    Mutation: {
        ...userMutationsResolvers,
        ...userBooksMutationsResolvers
    },

};

export default resolvers;
