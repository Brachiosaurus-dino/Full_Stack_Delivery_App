
// fetch_data.js
import mongoose from "mongoose";
import { connect_mongo_db } from "./mongo.js";

const get_data= async () => {
    await connect_mongo_db()

    const database=mongoose.connection.db // This is used to diect access of collection of data without use of model


    const collection = database.collection('comments')

    const data=await collection.find({}).toArray()

    console.log('Data From mongodb Collection : ')
    data.forEach(doc => {
        console.log({
            id:doc._id,
            name:doc.name,
            email:doc.email,
            movie:doc.movie_id,
            text:doc.text,
            date:doc.date
        })
    })

    // process.exit()
};

get_data()


// fetchComments.js
// import mongoose from 'mongoose';
// import { connect_mongo_db } from './mongo.js';

// const fetchComments = async () => {
//   await connect_mongo_db();

//   const db = mongoose.connection.db;
//   const collection = db.collection('comments'); // your collection

//   const comments = await collection.find({}).toArray();

//   console.log("Comments from sample_mflix.comments:");
//   comments.forEach(comment => {
//     console.log({
//       id: comment._id,
//       name: comment.name,
//       email: comment.email,
//       movie_id: comment.movie_id,
//       text: comment.text,
//       date: comment.date
//     });
//   });

//   process.exit();
// };

// fetchComments();