const {ApolloServer, gql } = require('apollo-server');

//Definir recursos 
const typeDefs = gql`
    type Query {
        hello: String
    }
`;
//Definir retornos
const resolvers = {
    Query: {
        hello: ( ) => 'Hello world!'
    }
};
//servidor
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => console.log(`Server rodando ${url}`));