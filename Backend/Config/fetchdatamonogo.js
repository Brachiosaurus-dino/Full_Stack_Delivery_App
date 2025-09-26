

import mongoose from "mongoose";
import { connect_mongo_db } from "./mongo.js";

const get_data= async () => {
    await connect_mongo_db()

    const database=mongoose.connection.db // This is used to diect access of collection of data without use of model


    const collection = database.collection('comments') // Here the databse give data from collection --> smaple_fix.comments ('comments') this is name of data

    const data=await collection.find({}).toArray() // Here we wait and use find({}) to get all data witout filtering and then convert o array 
 
    console.log('Data From mongodb Collection : ')
    data.forEach(doc => {    // here we print on each data and show using conosole.log
        console.log({
            id:doc._id,
            name:doc.name,
            email:doc.email,
            movie:doc.movie_id,
            text:doc.text,
            date:doc.date
        })
    })

    process.exit()  // This si basically to exit after showing all data
};

get_data()


