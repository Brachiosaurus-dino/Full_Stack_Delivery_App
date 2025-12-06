import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/send/sms', async (req, res) => {
    try {
        const { total, cart } = req.body;

        if (!total || !cart || cart.length === 0) {
            return res.status(400).json({ error: "Total & items required" });
        }

        let message = 'New Order Placed!\n';

        cart.forEach((i, index) => {
            message += `${index + 1}. ${i.name} x${i.qty}\n`;
        });

        const response = await axios.post(
            "https://www.fast2sms.com/dev/bulkV2",
            {
                message,
                language: 'english',
                route: 'q',
                numbers: process.env.MOBILE_NUMBER,
            },
            {
                headers: {
                    authorization: process.env.FAST_API_KEY,
                     "Content-Type": "application/json"    
                },
            }
        );

        res.json({ success: true, data: response.data });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "SMS sending failed" });
    }
});

export default router;