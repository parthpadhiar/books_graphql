import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs/user";
import { resolvers } from "./resolvers/user";
import { context } from "./context";

const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const app = express();

(async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/test",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log("Connected to db");
    }
  );
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    playground: true,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app, path: "/hello-world" });

  app.listen(3000, () => {
    console.log(`Server started at `);
  });
})();
