// Order Model on mongodb

//This is model Schema of each Order Blueprint

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    item: [
        {
            menuitem: {
                //Here ObjectId use to fetch the details of item you seelct 
                typeof: mongoose.Schema.Types.ObjectId,
                //Without ref you only get id with ref you gett details with .populate()
                ref: "Menu",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }

        }
    ],
    totalPrice: {
        type: Number,
        required: true,

    },
    status: {
        type: String,
        enum: ['pending', 'confirm', 'completed'],
        default: 'pending',
    }
},
    {
        timestamps: true
    },
    // { collection: 'comments' } I ahve to give this collection name
)

//Order is the sructure of table and 'Order' name of table 

export const Order = mongoose.model('Order', orderSchema)