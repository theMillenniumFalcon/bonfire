import "reflect-metadata"
require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { buildSchema } from 'type-graphql'
import session from 'express-session'
import cors from "cors"
import { COOKIE, __prod__ } from "./constants/constants"
import { TestResolver } from "./resolvers/test"
import { dataSource } from "./utils/dataSource"

const PORT = process.env.PORT || 4000

const main = async () => {

    let connection = await dataSource.initialize()

    await connection.runMigrations()

    const app = express()

    app.use(session({
        name: COOKIE,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: 'lax',
            secure: __prod__
        },
        saveUninitialized: false,
        secret: "asdfghjklqwertyuiopasdfghjkl",
        resave: false,
    }))

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))

    app.get('/', (_, res) => {
        res.send("Server is working fine!")
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TestResolver],
            validate: false
        }),
        // * context is an object that is accessible to all the resolvers
        context: ({ req, res }) => ({ req, res }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    })

    apolloServer.start().then((_) => {
        apolloServer.applyMiddleware({ app, cors: { origin: false } })
        const server = app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
        process.on('unhandledRejection', (err, _) => {
            console.log(`Logged Error: ${err}`)
            server.close(() => process.exit(1))
        })
    })
}
main().catch((error) => {
    console.error(error)
})