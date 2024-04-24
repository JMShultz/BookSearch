// Define Query and Mutations
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
  }
  
  input BookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    title: String!
  }
  
  
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput): User
    removeBook(bookId: ID!): User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
`;

module.exports = typeDefs;