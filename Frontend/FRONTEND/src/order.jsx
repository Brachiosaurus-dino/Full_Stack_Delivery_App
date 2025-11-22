import React from "react";
import { useOrder } from "./Context";

function CartPage() {
    const { cart, updateQty, removeFromCart } = useOrder();

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-semibold">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                            >
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={item.image}
                                        className="w-16 h-16 rounded"
                                        alt={item.name}
                                    />
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.restaurant}</p>

                                        <div className="flex items-center gap-4 mt-2">
                                            <button
                                                className="border px-2 rounded"
                                                onClick={() => updateQty(item.id, -1)}
                                            >
                                                -
                                            </button>

                                            <span>{item.qty}</span>

                                            <button
                                                className="border px-2 rounded"
                                                onClick={() => updateQty(item.id, +1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                                    <button
                                        className="text-red-500 text-sm"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Right Side Summary */}
                <div className="bg-white p-6 rounded-xl shadow h-fit">
                    <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>
                                $
                                {cart
                                    .reduce((total, i) => total + i.price * i.qty, 0)
                                    .toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span>$2.99</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>$4.32</span>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>
                            $
                            {(
                                cart.reduce((total, i) => total + i.price * i.qty, 0) +
                                2.99 +
                                4.32
                            ).toFixed(2)}
                        </span>
                    </div>

                    <button className="bg-orange-500 w-full py-2 rounded text-white mt-4">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;