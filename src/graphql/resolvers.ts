import { userMutations } from "./features/users/mutations";
import { userQueries } from "./features/users/queries";

export const resolvers = {
    Record: {
        id: (parent: any) => parent.id ?? parent._id,
    },
    Query: {
        ...userQueries
    },
    Mutation: {
        ...userMutations
    },
};

export default resolvers;
