import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRESQL_URL,
    {
        dialect: "postgres",
        logging: false,
    }
)
const connectDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("connection established successfully");
        await sequelize.sync({alter: true});
        console.log("Database synced successfully")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}




export { connectDB, sequelize }