import { City } from "src/cities/entities/city.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOPtions:DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10), 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [City],
    synchronize: false,
    migrations:['dist/db/migrations/*.js'], //deals with javascript //typescript is not in use now 
};
const dataSource = new DataSource(dataSourceOPtions);
export default dataSource;