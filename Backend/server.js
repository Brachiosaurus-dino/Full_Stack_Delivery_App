import express from 'express'
import dotenv from 'dotenv'
import { connect_mongo_db } from './Config/mongo.js'
import { connect_mysql_db,pool } from './Config/mysql.js'
dotenv.config()

const app = express()

const PORT=process.env.PORT

app.use(express.json())

await connect_mongo_db()
console.log('MONGO DATABASE CONNECTED.....')
await connect_mysql_db();
console.log('MYSQL DATABASE CONNECTED.....')

app.get("/",(req, res) => {
    res.send("<h1> HELLO THE SERVER IS RUNNING.....</h1>")
})

app.listen(PORT, () => {
    
    
    console.log(`Hello The Server Is Running On PORT Number:http://localhost:${PORT}`)
    console.log('MONGO DB , MYSQL , EXPRESS.JS  EVERTHING CONNECTED WOOHOOOO............')
})


