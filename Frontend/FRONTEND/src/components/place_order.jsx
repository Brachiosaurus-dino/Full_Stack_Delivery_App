import React, { useState } from "react";
import { useOrder } from "../Context";
import QRCode from "qrcode";


export default function Checkout() {
    const { cart } = useOrder();

    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
    const delivery = 2.99;
    const tax = 4.32;
    const total = subtotal + delivery + tax;

    const [qrCode, setQrCode] = useState(null);

    const [form, setForm] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert("Order placed!");
    // };


    const handleCard = async () => {
        const res = await fetch('https://full-stack-delivery-app.onrender.com/create-checkout-session', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total ,cart }),
        })
        // HEre we are getting a url from the server 
        const data = await res.json();
        // here we open the url on sam etab and if usess _blank we opn the url on new tab
        window.open(data.url, "_self");
    }


    const handleQrcode = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:4500/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ total ,cart}),
            });

            const data = await res.json();

            if (data) {
                // generate QR code for Stripe session URL
                const qr = await QRCode.toDataURL(data.url);
                setQrCode(qr); // set QR code image
            } else {
                console.error("No URL returned from Stripe:", data);
            }
        } catch (err) {
            console.error("Payment failed:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

                {/* LEFT SIDE – ORDER SUMMARY */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Your Order</h2>

                    {cart.length === 0 ? (
                        <p>No items in cart.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-3">
                                <div className="flex gap-4 items-center">
                                    <img src={item.image} className="w-14 h-14 rounded" />
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                                    </div>
                                </div>

                                <p className="font-semibold">
                                    ${(item.price * item.qty).toFixed(2)}
                                </p>
                            </div>
                        ))
                    )}

                    {/* Total Section */}
                    <div className="mt-6 text-sm space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span>${delivery.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

              
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

                    <form className="space-y-4">

                        <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded" value={form.name} onChange={handleChange} required />

                        <input type="text" name="address" placeholder="Address" className="w-full border p-2 rounded" value={form.address} onChange={handleChange} required />

                        <input type="text" name="phone" placeholder="Phone" className="w-full border p-2 rounded" value={form.phone} onChange={handleChange} required />

                        <button onClick={handleCard} type="button" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 hover:cursor-pointer">
                            Pay with card
                        </button>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h2 className="text-xl font-semibold mb-4">Payment</h2>
                            {!qrCode ? (
                                <button onClick={handleQrcode} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                    Pay With scanner
                                </button>
                                )
                                :
                                (

                                    <div className="text-center">
                                        <p className="mb-4 font-semibold">Scan to pay:</p>
                                        <img src={qrCode} alt="Scan to pay" className="mx-auto" />
                                    </div>
                                )}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
