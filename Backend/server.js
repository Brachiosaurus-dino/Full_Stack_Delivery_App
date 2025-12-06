import express from 'express'
import { menu_router } from './Routes/Menu_Routes.js'
import dotenv from 'dotenv'
// import { order_routes } from './Routes/Order_Routes.js'
import cors from 'cors'
import { connect_mongo_db } from './Config/mongo.js'
import { Connection } from './Config/mysql.js'
import error_Handler from './Middelware/Error_Handler.js'
import Stripe from 'stripe'
import { auth_router } from './Routes/auth_Routes.js'
import crypto from "crypto";  
import smsRoute from './Routes/Sms_Routes.js'




process.env.JWT_SECRET = crypto.randomBytes(32).toString("hex");

dotenv.config()
const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use('/api',smsRoute)

const PORT = process.env.PORT || 5900

// new keyword is used so that everytime it creates new stripe  
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


app.get('/message', (req, res) => {
    console.log("The backend Connected to Frontend Successfully:")
    res.json({ message: "The Backend is Connected to Frontend Successfully....." })
})
app.get("/", (req, res) => {
    res.send("<h1> HELLO THE SERVER IS RUNNING.....</h1>")
})



app.post('/create-checkout-session', async (req, res) => {
    try {
        const {total , cart} = req.body;
        console.log("Total recieevd items ", total , cart);

        if (!total || total <= 0) {
            return res.status(400).json({ error: "Invalid total amount" });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card' ],
            mode: 'payment',
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        product_data:{name:"Total of Food"},
                        unit_amount:Math.round(total*100),
                    },
                    quantity:1
                }
            ],
        success_url: `http://localhost:5173/success?user=${encodeURIComponent(total)}&food=${encodeURIComponent(JSON.stringify(cart))}`,

            cancel_url: 'http://localhost:5173/cancel',
        }); // <-- only one closing parenthesis

        console.log("Stripe session created:", session.url);
        res.json({ url: session.url });

    } catch (error) {
        console.error("Stripe full error object:", error);
        res.status(500).json({ error: error.message });
    }
});



// app.use('/auth', auth_router)

app.use('/menu', menu_router)
// app.use('/order', order_routes)
app.use('/auth', auth_router)
app.use(error_Handler)




const startServer = async () => {

    await connect_mongo_db();
    console.log('MONGO DATABASE CONNECTED FROM SERVER FILE.....');

    await Connection();
    console.log('MYSQL DATABASE CONNECTED FROM SERVER FILE.....');

    app.listen(PORT, () => {
        console.log(`Hello The Server Is Running On PORT Number:http://localhost:${PORT}`)
        console.log('MONGO DB , MYSQL , EXPRESS.JS  EVERTHING CONNECTED WOOHOOOO............')
    })

}

startServer()
