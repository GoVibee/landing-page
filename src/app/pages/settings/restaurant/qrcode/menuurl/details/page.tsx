'use client'

import React from 'react';
import { ArrowLeft, CreditCard,CircleArrowRight,Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Reusable input field component
const InputField = ({ id, label, placeholder, type = 'text' }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
        />
    </div>
);

function OrderDetailsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <div className='mx-auto w-[90%] max-w-2xl py-8'>
                <div className="flex items-center mb-8">
                    <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <h1 className='flex-grow text-center text-2xl text-gray-800 font-semibold'>
                        Confirm Your Details
                    </h1>
                    <div 
                        className='cursor-pointer'
                    >
                        <Trash2 size={24} className='text-red-800'/>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <form className="space-y-6">
                        <InputField id="name" label="Your Name" placeholder="Enter your full name" />
                        <InputField id="phone" label="Phone Number" placeholder="e.g., 024 123 4567" type="tel" />
                        <InputField id="email" label="Email Address" placeholder="Enter your email" type="email" />
                        <InputField id="tableNumber" label="Table Number" placeholder="Enter your table number" />

                        <div>
                            <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-2">Add a little note (Optional)</label>
                            <textarea
                                id="note"
                                rows={4}
                                placeholder="e.g., Allergic to peanuts, please no spicy food."
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45] resize-y"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#3B0A45] text-white font-semibold py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all transform cursor-pointer"
                            onClick={() => router.push('/pages/settings/restaurant/qrcode/menuurl/details/trackingpage')}
                        >
                            <CircleArrowRight size={20} />
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsPage;