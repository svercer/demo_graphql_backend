export const authTypeDefs = `#graphql






type ErrorResponse {
    error: String
    message: String
}
type AuthPayload {
    token: String
    user: User
}

union AuthResponse = AuthPayload | ErrorResponse

type Mutation {
    login(email: String!, password: String!): AuthPayload
    register(email: String!, password: String!, name: String!): AuthPayload
}
type Query {
    me: User
}
`