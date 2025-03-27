import dotenv from "dotenv"
import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";
dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Error connecting to the database :: index.js :: ",err);
})