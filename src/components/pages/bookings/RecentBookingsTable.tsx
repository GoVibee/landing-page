'use client'

import React,{useState,useEffect} from 'react';
import { motion,AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';
import Badge from '@/components/ui/Badge';


const bookings = [
    { id: 1, customer: 'Clara Bennett', price: '$100', date: '2024-07-26', time: '7:00 PM', status: 'Confirmed' as const },
    { id: 2, customer: 'Owen Carter', price: '$150', date: '2024-07-26', time: '9:00 PM', status: 'Pending' as const },
    { id: 3, customer: 'Isabella Hayes', price: '$200', date: '2024-07-27', time: '10:00 AM', status: 'Confirmed' as const },
    { id: 4, customer: 'Noah Thompson', price: '$250', date: '2024-07-27', time: '11:00 PM', status: 'Cancelled' as const },
    { id: 5, customer: 'Ava Mitchell', price: '$300', date: '2024-07-28', time: '8:00 AM', status: 'Confirmed' as const },
];

const statusStyles: { [key: string]: string } = {
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700',
};

const ConfirmOrderModal = ({ booking, onClose, onUpdateStatus }: any) => {
    if (!booking) return null;

    // MODIFICATION: State to manage the selected status in the dropdown
    const [selectedStatus, setSelectedStatus] = useState(booking.status);

    // MODIFICATION: Sync state if the booking prop changes
    useEffect(() => {
        setSelectedStatus(booking.status);
    }, [booking]);
    
    const handleUpdate = () => {
        // Here you would call an API or a function to update the status
        console.log("Updating status to:", selectedStatus);
        // onUpdateStatus(booking.orderId, selectedStatus); // Example of a callback
        onClose(); // Close modal after update
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-2xl w-full max-w-sm" // Adjusted max-width for a compact look
            >
                <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Update Order Status</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                
                <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Order ID:</span>
                        <span className="text-gray-800 font-mono">{booking.id}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Customer:</span>
                        <span className="text-gray-800">{booking.customer}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Price:</span>
                        <span className="text-gray-800 font-mono">{booking.price}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Date:</span>
                        <span className="text-gray-800 font-mono">{booking.date}</span>
                    </div>

                    {/* MODIFICATION: Replaced static Badge with a dropdown */}
                    <div>
                        <label htmlFor="status-select" className="block text-sm font-semibold text-gray-600 mb-2">
                           Status
                        </label>
                        <select
                            id="status-select"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-white"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Declined">Declined</option>
                        </select>
                    </div>
                </div>

                {/* MODIFICATION: Updated footer with a single "Update" button */}
                <div className="p-6 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleUpdate}
                        disabled={selectedStatus === booking.status} // Disable button if status hasn't changed
                        className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Update Status
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default function RecentBookings() {
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [status,setStatus] = useState<any>(null);


    return (
        <div className="bg-white p-6 rounded-xl  font-plus">
           <div className='flex justify-between mb-2'>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
                <button className="text-sm text-[#3B0A45] px-2 font-semibold cursor-pointer rounded-md bg-purple-100">
                    View all
                </button>
           </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-sm text-gray-500 border-b border-[#E3DBE5]">
                            <th className="py-3 px-4 font-normal">Order Id</th>
                            <th className="py-3 px-4 font-normal">Customer</th>
                            <th className="py-3 px-4 font-normal">Price</th>
                            <th className="py-3 px-4 font-normal">Date</th>
                            <th className="py-3 px-4 font-normal">Time</th>
                            <th className="py-3 px-4 font-normal">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="border-b border-[#E3DBE5] last:border-none">
                                <td className="py-4 px-4 text-[14px] text-gray-700 font-medium">{booking.id}</td>
                                <td className="py-4 px-4 text-[14px] text-gray-600">{booking.customer}</td>
                                <td className="py-4 px-4 text-[14px] text-gray-600">{booking.price}</td>
                                <td className="py-4 px-4 text-[14px] text-gray-600">{booking.date}</td>
                                <td className="py-4 px-4 text-[14px] text-gray-600">{booking.time}</td>
                                <td 
                                    className="py-4 px-4 cursor-pointer"
                                    onClick={() => {
                                        setSelectedBooking(null);
                                        setStatus(booking);
                                    }}
                                >
                                    <span className="font-semibold text-gray-800 md:hidden mr-2">Status:</span>
                                    <Badge status={booking.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AnimatePresence>
                {status && (
                    <ConfirmOrderModal booking={status} onClose={() => setStatus(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}