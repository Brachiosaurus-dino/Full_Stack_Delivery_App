// Connection of server and database
// mongo.js

import { Order } from '../Models/Order_Model.js'
import { Menu } from '../Models/Menu_Item_Model.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connect_mongo_db=async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Mongo_DB server connected from MONGO_DB file")
        // When i have the data i will run this file

        const orders=await Order.find().limit(8)  
        console.log('ALREADY PLACED ORDER',orders)
        const menu=await Menu.find().limit(8)  
        
        console.log('Menu Items',menu)

        
    }catch(error){
        console.error("Mongo_db not connected",error.messsage)
        process.exit(1)
    }
    
}

