import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {typeDefs} from './schema.js';
import {resolvers} from './resolvers.js';

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`server at: http://localhost:4000${server.graphqlPath}`)
  );
}
startServer();
