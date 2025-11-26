// Routing of menu

import express from "express"
import { createnewItem, deleteItem, getItembyId, getItems, updateItem } from "../Controller/Menu_Controller.js"
import { verify_admin, veryfy_user } from "../Middelware/auth_Middelware.js"
import { Validate_Menu_Item } from "../Middelware/Validate_Request.js"

export const menu_router = express.Router()

menu_router.post('/add_item/',verify_admin,Validate_Menu_Item,createnewItem)

menu_router.get('/get_items/:id',getItembyId )

menu_router.get('/get_items', getItems)

menu_router.put('/update_item/:id',verify_admin, updateItem)

menu_router.delete('/delete_item/:id', verify_admin,deleteItem)

