import { DataSource } from 'typeorm';
import { Usuario } from './entities/Usuario'; 

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: false, 
    logging: true,
    entities: [Usuario], 
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

export default AppDataSource;