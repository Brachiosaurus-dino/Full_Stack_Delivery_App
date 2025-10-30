import express from 'express'

// import { deleteItem, updateItem, getItembyId , createnewItem, getItems } from './Controller/Menu_Controller.js'
import { menu_router } from './Routes/Menu_Routes.js'
import dotenv from 'dotenv'
import { order_routes } from './Routes/Order_Routes.js'
import cors from 'cors'
import { connect_mongo_db } from './Config/mongo.js'
import { Connection } from './Config/mysql.js'
import { AddOrder, delete_Order, getorder, getorderbyID, updateorder } from './Controller/Order_controller.js'
import error_Handler from './Middelware/Error_Handler.js'
// import { Validation_Of_Orders } from './Middelware/Validate_Request.js'
dotenv.config()

const app = express()
app.use(cors())
const PORT = process.env.PORT || 5900

app.use(express.json())

app.get('/message',(req,res) => {
    console.log("The backend Connected to Frontend Successfully:")
    res.json({message:"The Backend is Connected to Frontend Successfully....."})
})

app.get("/", (req, res) => {
    res.send("<h1> HELLO THE SERVER IS RUNNING.....</h1>")
})

// Routes For Menu
app.use('/menu' , menu_router)
// Routes For Order
app.use('/order', order_routes)
app.use(error_Handler)

await connect_mongo_db();
console.log('MONGO DATABASE CONNECTED FROM SERVER FILE.....');
await Connection();
console.log('MYSQL DATABASE CONNECTED FROM SERVER FILE.....');



app.listen(PORT, () => {


    console.log(`Hello The Server Is Running On PORT Number:http://localhost:${PORT}`)
    console.log('MONGO DB , MYSQL , EXPRESS.JS  EVERTHING CONNECTED WOOHOOOO............')
})


