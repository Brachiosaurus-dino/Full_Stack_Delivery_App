// ROuting for order.js

import express from 'express'
import { AddOrder, delete_Order, getorder, getorderbyID, updateorder } from '../Controller/Order_controller.js'
import { Validation_Of_Orders } from '../Middelware/Validate_Request.js'

export const order_routes = express.Router()

order_routes.post('/add_order', Validation_Of_Orders,AddOrder)

order_routes.get('/order_get',getorder)

order_routes.get('/order_get/:id',getorderbyID)

order_routes.put('/update_order/:id',updateorder)

order_routes.delete('/order_delete/:id',delete_Order)

