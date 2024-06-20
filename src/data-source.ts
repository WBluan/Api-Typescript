import { DataSource } from 'typeorm';
import { Usuario } from './entities/Usuario'; // Certifique-se de que o caminho está correto

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: false, // Em produção, geralmente é melhor desativar `synchronize`
    logging: true,
    entities: [Usuario], // Importando diretamente a entidade
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