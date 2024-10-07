import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Type definitions (GraphQL schema)
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Sample data
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers (functions that fetch the data for each query type)
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
