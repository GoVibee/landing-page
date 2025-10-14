'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChefHat, Bell, UtensilsCrossed, ArrowLeft } from 'lucide-react';

const statuses = [
    { name: 'Order Placed', icon: Check, description: 'We have received your order.' },
    { name: 'Preparing', icon: ChefHat, description: 'The kitchen has started preparing your food.' },
    { name: 'Ready', icon: Bell, description: 'Your order is ready for pickup by the waiter.' },
    { name: 'Served', icon: UtensilsCrossed, description: 'Enjoy your meal!' },
];

function OrderStatusPage() {
    const router = useRouter();
    const [orderStatus, setOrderStatus] = useState(0); // 0: Placed, 1: Preparing, 2: Ready, 3: Served
    const [notificationPermission, setNotificationPermission] = useState('default');

    // Function to show a notification
    const showNotification = (title: string, body: string) => {
        if (notificationPermission === 'granted') {
            new Notification(title, { body });
        }
    };
    
    // Request notification permission on component mount
    useEffect(() => {
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                setNotificationPermission(permission);
            });
        }
    }, []);

    // Simulate order progress
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setOrderStatus(prevStatus => {
                if (prevStatus >= statuses.length - 1) {
                    clearInterval(progressInterval);
                    return prevStatus;
                }
                const nextStatus = prevStatus + 1;
                // Trigger notification on specific status changes
                if (nextStatus === 2) { // Ready
                    showNotification('Your Order is Ready! ✅', 'A waiter is on their way to serve you.');
                }
                if (nextStatus === 3) { // Served
                    showNotification('Food Served! 🍽️', 'Enjoy your meal at CoCo Vanilla.');
                }
                return nextStatus;
            });
        }, 7000); // Change status every 7 seconds

        return () => clearInterval(progressInterval); // Cleanup on component unmount
    }, [notificationPermission]); // Rerun if notification permission changes


    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <div className='mx-auto w-[90%] max-w-2xl py-8'>
                <div className="flex items-center mb-8">
                     <button onClick={() => router.push('/')} className="p-2 rounded-full hover:bg-gray-200">
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <h1 className='flex-grow text-center text-2xl text-gray-800 font-semibold'>
                        Order Tracking
                    </h1>
                    <div className="w-8"></div>
                </div>

                {/* --- Order Details Summary --- */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Your Order</h2>
                    <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between"><span>Grilled Chicken x 1</span> <span>$12.99</span></div>
                        <div className="flex justify-between"><span>Fresh Orange Juice x 2</span> <span>$6.00</span></div>
                        <div className="border-t pt-3 mt-3 flex justify-between font-bold text-gray-800">
                            <span>Total</span>
                            <span>$18.99</span>
                        </div>
                    </div>
                </div>

                {/*User data */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Info</h2>
                    <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between"><span>Name:</span> <span>John Doe</span></div>
                        <div className="flex justify-between"><span>Phone:</span> <span>024 123 4567</span></div>
                        <div className="flex justify-between"><span>Email:</span> <span>johndoe@example.com</span></div>
                        <div className="flex justify-between"><span>Table:</span> <span>5</span></div>
                    </div>
                </div>
            

                {/* --- Order Status Timeline --- */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                     <h2 className="text-lg font-bold text-gray-800 mb-6">Live Status</h2>
                     <div className="space-y-8">
                        {statuses.map((status, index) => {
                            const isCompleted = orderStatus > index;
                            const isCurrent = orderStatus === index;
                            
                            return (
                                <div key={status.name} className="flex">
                                    <div className="flex flex-col items-center mr-4">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                                            isCompleted ? 'bg-green-500 border-green-500 text-white' : 
                                            isCurrent ? 'border-green-500 text-green-500 animate-pulse' : 
                                            'border-gray-300 text-gray-400'
                                        }`}>
                                           <status.icon size={20} />
                                        </div>
                                        {index < statuses.length - 1 && (
                                            <div className={`w-0.5 h-full transition-all duration-300 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold ${isCurrent || isCompleted ? 'text-gray-800' : 'text-gray-500'}`}>{status.name}</h3>
                                        <p className="text-sm text-gray-500">{status.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                     </div>
                </div>

                 {notificationPermission === 'denied' && (
                    <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-sm text-center">
                        You have blocked notifications. Please enable them in your browser settings to receive live updates.
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderStatusPage;