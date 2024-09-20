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
        books: [Book!]
    }
`