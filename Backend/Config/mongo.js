// Connection of server and database
// mongo.js

import { Order } from '../Models/Order_Model.js'
import { Menu } from '../Models/Menu_Item_Model.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

export const connect_mongo_db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Mongo_DB server connected from MONGO_DB file")


        const restaurentSchema=new mongoose.Schema({},{strict:false})
        const Restaurent=mongoose.model('restaurent',restaurentSchema)


        const file=JSON.parse(fs.readFileSync('./mongo_data/food_delivery_30x30_loremflickr.json'))

        await Restaurent.insertMany(file)
        console.log("File imported Successfully.........")
        // When i have the data i will run this file

        const items = await Restaurent.find().limit(1)
        console.dir(items,{depth:null , colors:true})
        // const menu = await Menu.find().limit(8)

        // console.log('Menu Items', menu)


    } catch (error) {
        console.error("Mongo_db not connected", error.messsage)
        process.exit(1)
    }

}

