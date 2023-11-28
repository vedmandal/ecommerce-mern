import express from "express"
import dotenv from "dotenv"
import connectdatabase from "./config/Database.js";
import AuthRoute from "./Routes/AuthRoutes.js"
import cors from "cors"
import CategoryRoute from "./Routes/CategoryRoute.js"
import ProductRoute from "./Routes/ProductRoute.js"
import path from "path"
import { fileURLToPath } from "url"



const app=express();

dotenv.config();
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'./client/build')))


app.use("/api/v1/auth",AuthRoute);
app.use("/api/v1/category",CategoryRoute);
app.use("/api/v1/product",ProductRoute);
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
connectdatabase();













app.listen(process.env.PORT,()=>{
    console.log(`server is working on on port ${process.env.PORT}`)
})






