export const bookTypeDefs = `#graphql
    type Price {
        id: ID!
        amount: String
        bookId: Book
    }
    
    type Book {
        id: ID!
        name: String!
        prices: [Price]
    }
    
    type UsersResponse {
        data: [User!]
        meta: MetaData
    }
    
    scalar Date
    
    type MetaData {
        totalItems: Int
        currentPage: Int
        pageSize: Int
    }
    
    enum Episode {
        NEWHOPE
        EMPIRE
        JEDI
    }
    
    input UpdateUserInput {
        email: String
        name: String
    }
    
    union Response = SuccessResponse | ErrorResponse
    
    type SuccessResponse {
        success: Boolean!
        message: String!
    }
    
    type ErrorResponse {
        error: String!
        message: String!
    }
    
    type DefaultResponse {
        success: Boolean
        message: String
    }
    
    
    type Mutation {
        updateUser(id: ID!, name: String, email:String): User
        deleteUser(id: ID!): DefaultResponse
        createUser(email: String!, name: String!): User
        updateBook(id: ID!, name: String, price: String!): Book
        deleteBook(id: ID!): DefaultResponse
        createBook(name: String!, userId: ID!, price: String!): Book
    }
    
    type Query {
        users(pageSize: String, page: Int): UsersResponse
        user(id: ID!): User
        books: [Book!]
    }
`