import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`);

const connectDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("connection established successfully");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { connectDB, sequelize }