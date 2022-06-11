import "reflect-metadata"
require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { buildSchema } from 'type-graphql'
import { TestResolver } from "./resolvers/test"
import { UserResolver } from "./resolvers/user"
import { createConnection } from 'typeorm'
import Redis from 'ioredis'
import session from 'express-session'
import connnectRedis from 'connect-redis'
import { User } from "./entities/User"
import { Room } from "./entities/Room"
import path from "path"
import cors from "cors"
import { COOKIE, __prod__ } from "./constants/constants"

const PORT = process.env.PORT || 4000

const main = async () => {

    const connection = await createConnection({
        type: "postgres",
        username: "postgres",
        password: "postgres",
        database: "bonfire",
        logging: true,
        synchronize: false,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [User, Room]
    })

    await connection.runMigrations()

    const app = express()

    const RedisStore = connnectRedis(session)
    const redis = new Redis({
        port: 6379,
        host: '127.0.0.1',
        connectTimeout: 10000,
        lazyConnect: true
    })

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))

    app.use(session({
        name: COOKIE,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: 'lax', // * csrf
            secure: __prod__ // * cookie only works in https
        },
        saveUninitialized: false,
        secret: "asdfghjklqwertyuiopasdfghjkl",
        resave: false,
    }))

    app.get('/', (_, res) => {
        res.send("Server is working fine!")
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TestResolver, UserResolver],
            validate: false
        }),
        // * context is an object that is accessible to all the resolvers
        context: ({ req, res }) => ({ req, res, redis }),
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