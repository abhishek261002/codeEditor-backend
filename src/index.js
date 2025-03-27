import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config()
try {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`SERVER LISTENING ON PORT :: ${process.env.PORT}`)
    })
    app.get("/",(req,res)=>{
        res.send("api running")
    })
    app.get("/hello",(req,res)=>{
        res.send("hello ji")
    })
} catch (error) {
    console.log(error);
}