"use client";
import React, { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
    const { items, cartCount } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10.00;
    const total = subtotal + shipping;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            alert("Payment Successful! (This is a dummy checkout)");
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Left Column: Order Summary */}
                <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
                    <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                        {items.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            items.map((item, idx) => (
                                <div key={`${item.id}-${idx}`} className="flex gap-4 border-b border-gray-100 pb-4">
                                    <div className="bg-gray-100 rounded-md h-20 w-20 flex items-center justify-center flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="object-contain max-h-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                        <p className="text-sm text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
                                        <p className="text-sm font-medium mt-1">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Payment Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-black text-white p-2 rounded-md">
                            <Lock size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Secure Payment</h2>
                    </div>

                    <form onSubmit={handlePayment} className="space-y-6">
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <Input type="email" placeholder="user@example.com" required className="h-12 bg-gray-50" />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">Card Information</label>
                            <div className="rounded-md border border-gray-300 overflow-hidden">
                                <div className="flex items-center px-3 bg-white border-b border-gray-200">
                                    <CreditCard className="text-gray-400" size={20} />
                                    <input
                                        className="w-full p-3 outline-none text-gray-700"
                                        placeholder="Card number"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white">
                                    <input
                                        className="w-full p-3 outline-none text-gray-700"
                                        placeholder="MM / YY"
                                        required
                                    />
                                    <input
                                        className="w-full p-3 outline-none text-gray-700"
                                        placeholder="CVC"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">Name on card</label>
                            <Input type="text" placeholder="John Doe" required className="h-12 bg-gray-50" />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 bg-premium-black hover:bg-gray-800 text-white text-lg font-bold shadow-lg mt-4"
                            disabled={isProcessing || items.length === 0}
                        >
                            {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                        </Button>

                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                            <Lock size={12} /> Encrypted and Secure
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
}
