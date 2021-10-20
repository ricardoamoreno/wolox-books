import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs } from './app/typeDefs';
import { resolvers } from './app/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();
