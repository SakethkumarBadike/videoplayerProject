//require("dotenv").config({path:'./env'});  //no code consistency 
import dotenv from "dotenv"; 
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
    path:"./env"
})
connectDB().then(()=>{
const port=process.env.PORT || 8000;
app.listen(port)
console.log(`server is running at port: ${port}`);
}
).catch((error)=>{
    console.log("MONGODB connection failed : ", error)
})