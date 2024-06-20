import { DataSource } from "typeorm";
import { Usuario } from "./entities/Usuario";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: false, // Em produção, geralmente é melhor desativar `synchronize`
    logging: true,
    entities: [Usuario],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
});

export default AppDataSource;