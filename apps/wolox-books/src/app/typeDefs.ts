// Construct a schema, using GraphQL schema language
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getUser(id: Int!): User
    getUsers: [User]!
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Boolean!
    updateUser(
      id: Int!
      firstName: String
      lastName: String
      email: String
      password: String
    ): Boolean!
    deleteUser(id: Int!): Boolean!
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;
