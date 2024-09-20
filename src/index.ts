// noinspection TypeScriptValidateTypes,TypeScriptUnresolvedReference,JSAnnotator

import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'

import {ApolloServer} from "@apollo/server";
import {readFileSync} from "node:fs";
import gql from "graphql-tag";
import {buildSubgraphSchema} from '@apollo/subgraph'
import {expressMiddleware} from "@apollo/server/express4";
import resolvers from "./graphql/resolvers";
import * as path from "node:path";
import mergedTypeDefs from "./graphql/typeDefs";


const PORT = process.env.PORT ?? 4000
const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

// Case1
// const schemaFiles = [
//     path.join(__dirname, 'graphql/schemas', 'user.graphql'),
//     path.join(__dirname, 'graphql/schemas', 'schema.graphql')
// ];

// Read and concatenate all schema files
// const typeDefs = gql(
//     schemaFiles.map(file => readFileSync(file, { encoding: 'utf-8' })).join('\n')
// );

// const server = new ApolloServer({
//     schema: buildSubgraphSchema({ typeDefs, resolvers }),
// });


// Case 2
const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: resolvers
});

const startServer = async () => {

    await server.start();

    
    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server),
    );
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });

};

startServer().catch(error => {
    console.error('Error starting the server:', error);
});


function loggingMiddleware(req:Request, res:Response, next: NextFunction) {
    console.log("ip:", req.ip)

    // check token and .....
    next()
}


