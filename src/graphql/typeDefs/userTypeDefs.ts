// noinspection GraphQLTypeRedefinition
export const userTypeDefs = `#graphql
interface Character {
    appearsIn: String
    charName: String
    assignedAt: String!
}

type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    books: [Book!]
}

type Query {
    users(pageSize: String, page: Int): UsersResponse
    user(id: ID!): User
    userBooks: [Book!]
}

`