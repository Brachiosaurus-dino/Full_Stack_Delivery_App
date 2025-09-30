// Menu Model on MongoDB

//This is model Schema of Menu item Blueprint

import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trime: true
        },
        description: {
            type: String,
            required: true,
            trime: true
        },
        price: {
            type: Number,
            required: true,
            trime: true,
            min: 0
        },
        category: {
            type: String,
            enum: ['starter', 'main', 'desert', 'drink'],
            default: 'main',
        },
        available: {
            type: Boolean,
            default: true
        },
        ingredients: {
            type: [String], //Store multiple onion , tomato , peas , cheese
            default: [],
        }


    },
    {
        timestamps: true
    }


)

//Menu is the sructure of table and 'Menu' name of table 

export const Menu = mongoose.menuSchema('Menu', menuSchema)

