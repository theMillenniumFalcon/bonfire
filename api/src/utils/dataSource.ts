import { DataSource } from 'typeorm'
import { User } from "../entities/User"
import path from "path"

export let dataSource = new DataSource({
    type: "postgres",
    username: "postgres",
    password: "postgres",
    database: "hideout",
    logging: true,
    synchronize: false,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User]
})