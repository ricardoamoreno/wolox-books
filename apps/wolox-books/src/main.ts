import { ApolloServer } from 'apollo-server-lambda';
import { connection } from './dbconfig/typeorm';

import { typeDefs } from './app/typeDefs';
import { resolvers } from './app/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    await connection();
  },
});

export const graphqlHandler = server.createHandler();
