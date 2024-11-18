import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const MONGO_URI = "mongodb+srv://sachinpathak0042:6QQkDemX20VcWXTj@cluster0.poids.mongodb.net/";


const databaseConnection = () => { 
    mongoose.connect(MONGO_URI).then(()=>{ 
        console.log("Connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
}
export default databaseConnection;