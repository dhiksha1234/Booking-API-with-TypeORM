import "reflect-metadata"
import { DataSource } from "typeorm"
import { Trains } from "./entity/Trains"
import { Passengers } from "./entity/Passengers"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dhiksha",
    password: "Helloworld@123",
    database: "Database",
    synchronize: true,
    logging: false,
    entities: [Trains,Passengers],
    migrations: [],
    subscribers: [],
})
