'use client'

import { ChevronDown } from 'lucide-react';

const bookings = [
    { id: 1, customer: 'Clara Bennett', price: '$100', date: '2024-07-26', time: '7:00 PM', status: 'Confirmed' },
    { id: 2, customer: 'Owen Carter', price: '$150', date: '2024-07-26', time: '9:00 PM', status: 'Pending' },
    { id: 3, customer: 'Isabella Hayes', price: '$200', date: '2024-07-27', time: '10:00 AM', status: 'Confirmed' },
    { id: 4, customer: 'Noah Thompson', price: '$250', date: '2024-07-27', time: '11:00 PM', status: 'Cancelled' },
    { id: 5, customer: 'Ava Mitchell', price: '$300', date: '2024-07-28', time: '8:00 AM', status: 'Confirmed' },
];

const statusStyles: { [key: string]: string } = {
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700',
};

export default function RecentBookings() {
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
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[booking.status]}`}>
                                        {booking.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}