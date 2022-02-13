import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input UserInput {
    email: String!
    password: String!
  }

  type User {
    email: String!
    firstname: String
  }

  type Query {
    hello: User
  }

  type Mutation {
    addUser(data: UserInput!): Boolean
  }
`;
