import express from 'express'
import dotenv from 'dotenv'
import { connect_mongo_db } from './Config/mongo.js'
dotenv.config()

const app = express()

const PORT=process.env.PORT

app.use(express.json())

await connect_mongo_db()

app.get("/",(req, res) => {
    res.send("<h1> HELLO THE SERVER IS RUNNING.....</h1>")
})

app.listen(PORT, () => {
    
    console.log(`Hello The Server Is Running On PORT Number:http://localhost:${PORT}`)
})