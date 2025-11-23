import React, { useState } from "react";
import { useOrder } from "../Context";

export default function Checkout() {
    const { cart } = useOrder();

    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
    const delivery = 2.99;
    const tax = 4.32;
    const total = subtotal + delivery + tax;

    const [form, setForm] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed!");
    };


    const handlePayment = async () =>{
        const res = await fetch('http://localhost:5900/create-checkout-session',{
            method:"POST",
            headers:{"Content-Type": "application/json" },
            body : JSON.stringify({
                items:cart.map(items=>({
                    name:items.name,
                    price: items.price,
                    quantity: items.quantity
                }))
            })
        })
        const data = await res.json();
        window.location.href = data.url;
    }

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

                {/* RIGHT SIDE – FORM */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full border p-2 rounded"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="w-full border p-2 rounded"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="w-full border p-2 rounded"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />

                        <button
                            onClick={handlePayment}
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
