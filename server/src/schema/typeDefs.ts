const typeDefs = `

input BookInput {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type Book {
    authors: [String]
    description: String!
    bookId: ID!
    title: String!
    image: String
    link: String
}

type Auth {
  token: ID!
  user: User

}

  type Query {
    me: User
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBooks(authors:  [String!], description: String!, bookId: ID!, image: String!, link: String!, title: String!): User
    removeBook(bookId: ID!): User
}
`