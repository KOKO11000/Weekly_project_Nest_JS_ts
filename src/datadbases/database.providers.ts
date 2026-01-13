import { ModelCtor, Sequelize } from "sequelize-typescript";
import { UserDto } from "src/users/users.dto";



export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: "12345678",
                database:"users"
            })
            sequelize.addModels([UserDto as unknown as ModelCtor | string])
            return sequelize
        }
    }
]