import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// ✅ Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ GraphiQL UI (modern ESM-safe version)
app.get('/graphiql', (_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>GraphiQL</title>
        <link rel="stylesheet" href="https://unpkg.com/graphiql/graphiql.min.css" />
      </head>
      <body style="margin: 0;">
        <div id="graphiql" style="height: 100vh;"></div>
        <script
          crossorigin
          src="https://unpkg.com/react@18/umd/react.production.min.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/graphiql/graphiql.min.js"
        ></script>
        <script>
          const graphQLFetcher = graphQLParams =>
            fetch('/graphql', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(graphQLParams),
            })
              .then(response => response.json())
              .catch(() => response.text());

          ReactDOM.render(
            React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
            document.getElementById('graphiql'),
          );
        </script>
      </body>
    </html>
  `);
});


// ✅ GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }

  type Mutation {
    test(input: String): String
  }
`;

// ✅ Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
  },
  Mutation: {
    test: (_: any, { input }: { input: string }) => {
      console.log('📨 Received input:', input);
      return `You sent: ${input}`;
    },
  },
};

// ✅ Apollo server setup
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

// ✅ Apply Apollo middleware
app.use(
  '/graphql',
  expressMiddleware(server, {
    context: async () => ({})
  })
);

// ✅ Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 GraphQL endpoint: http://localhost:${PORT}/graphql`);
  console.log(`🧪 GraphiQL GUI:     http://localhost:${PORT}/graphiql`);
});
