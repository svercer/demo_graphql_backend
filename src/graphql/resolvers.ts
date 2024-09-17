import { userMutations } from "./features/users/mutations";
import { userQueries } from "./features/users/queries";
import {userBooksMutations} from "./features/users/books/mutations";

export const resolvers = {
    Record: {
        id: (parent: any) => parent.id ?? parent._id,
    },
    Query: {
        ...userQueries
    },
    Mutation: {
        ...userMutations,
        ...userBooksMutations
    },

};

export default resolvers;
