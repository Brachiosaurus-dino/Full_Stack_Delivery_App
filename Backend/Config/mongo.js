// Connection of server and database
// mongo.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connect_mongo_db=async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Mongo_DB server connected")
        

        
    }catch(error){
        console.error("Mongo_db not connected",error.messsage)
        process.exit(1)
    }
    
}

