// Routing of menu

import express from "express"
import { createnewItem, deleteItem, getItembyId, getItems, updateItem } from "../Controller/Menu_Controller.js"

export const menu_router = express.Router()

menu_router.post('/add_item/', createnewItem)

menu_router.get('/get_items/:id', getItembyId)

menu_router.get('/get_items', getItems)

menu_router.put('/update_item/:id', updateItem)

menu_router.delete('/delete_item/:id', deleteItem)

