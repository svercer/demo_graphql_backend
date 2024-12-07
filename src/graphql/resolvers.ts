import {userMutationsResolvers} from "./features/users/mutations";
import {userQueriesResolvers} from "./features/users/queries";
import {userBooksMutationsResolvers} from "./features/users/books/mutations";
import {booksQueryResolver} from "./features/books/queries";
import {authenticationMutations} from "./features/authentication/mutations";
import {authQueries} from "./features/authentication/queries";

export const resolvers = {
    Query: {
        ...userQueriesResolvers,
        ...booksQueryResolver,
        ...authQueries
    },
    Mutation: {
        ...userMutationsResolvers,
        ...userBooksMutationsResolvers,
        ...authenticationMutations,
    },
};

export default resolvers;
