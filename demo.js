const gql = require("graphql-tag");
const {ApolloServer} = require('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: "bygaga63@yandex.ru",
        avatar: "http://yoda.png",
        friends: []
      };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(() => console.log("Server run 4000"));
