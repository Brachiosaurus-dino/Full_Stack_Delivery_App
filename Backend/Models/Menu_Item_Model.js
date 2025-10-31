// Menu Model on MongoDB

//This is model Schema of Menu item Blueprint

import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  item_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  veg: {
    type: Boolean,
    required: true
  },
  image_url: {
    type: String,
    trim: true
  }
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cuisine: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  delivery_time: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  image_url: {
    type: String,
    trim: true
  },
  menu: {
    type: [menuItemSchema],
    default: []
  }
}, { timestamps: true });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
