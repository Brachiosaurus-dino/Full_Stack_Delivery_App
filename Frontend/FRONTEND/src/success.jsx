import { useLocation } from "react-router-dom";
import { useOrder } from "./Context";
import { useEffect } from "react";


import axios from "axios";


export default function Success() {


    const { clearCart } = useOrder()


    // Here useLocation gives us full current url which have all data then {search extract data afte '?' this symbol }
    const { search } = useLocation();
    // The extracted data converts to object looks like a dictionary key:value pair
    const params = new URLSearchParams(search);
    // Here we extract the user key 
    const user = params.get("user");
    //Here we extract the food key
    const food = params.get("food");
    // Yahan ye decodeURI componenet encoded value jo url mein this usko decode krat hai for huma redable 
    // bnaata hai likeek aaray ander objects with key:value apirs then json.parse unhein object bnaake deta hai then we us ethem
    const foodList = food ? JSON.parse(decodeURIComponent(food)) : [];


    const sendSMS = async () => {

        try {
            await axios.post("/api/send-sms", {
                total: user,
                cart: foodList,
            });
            console.log("SMS sent successfully!");

        }
        catch (err) {
            console.log("SMS sending failed:", err);
        }
    }

    useEffect(() => {
        clearCart();

        let alreadySent = false;

        if (!alreadySent && user && foodList.length > 0) {
            alreadySent = true;
            sendSMS();
        }

    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-20">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

                <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
                     Order Successful!
                </h1>

                <p className="text-center text-xl font-semibold mb-8">
                    You paid: <span className="text-green-700">${user}</span>
                </p>

                <h2 className="text-2xl font-bold mb-4">Your Items</h2>

                <div className="space-y-4">
                    {foodList.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border rounded-lg p-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.restaurant}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                                </div>
                            </div>

                            <p className="font-semibold text-lg">${item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="/"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
                    >
                        Go Back Home
                    </a>
                </div>

            </div>
        </div>
    );
}