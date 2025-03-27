import dotenv from "dotenv"
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("Error starting the server :: index.js :: ",error)
    })
})
.catch((error)=>{
    console.log("Error connecting to the database :: index.js :: ",error);
    process.exit(1)
})