"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../../components/ui/Badge';
import FilterDropdown from '../../../components/ui/FilterDropdown';
import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard,Logs, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X,UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';


const bookingsData = [
  { customer: 'Sophia Carter', venue: 'The Urban Bistro', venueDetails: '' },
  { customer: 'Ethan Bennett', venue: 'The Cozy Corner', venueDetails: 'Cafe' },
  { customer: 'Olivia Hayes', venue: 'The Night Owl Lounge', venueDetails: ''},
  { customer: 'Liam Foster', venue: 'The Seaside Grill', venueDetails: ''},
  { customer: 'Ava Morgan', venue: 'The City Lights Bar', venueDetails: ''},
];

// --- Booking Detail Modal Component ---
const BookingDetailModal = ({ booking, onClose }: any) => {
    if (!booking) return null;

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
                className="bg-white rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Booking Details</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Customer:</span>
                        <span className="text-gray-800">{booking.customer}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Venue:</span>
                        <span className="text-gray-800">{booking.venue}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Date & Time:</span>
                        <span className="text-gray-800">{booking.date} at {booking.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">Status:</span>
                        <Badge status={booking.status} />
                    </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                    <button onClick={onClose} className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                        Close
                    </button>
                    <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors">
                        Decline
                    </button>
                    <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                        Confirm
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const CancelDetailModal = ({ onClose }: any) => {

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
                className="bg-white rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Confirm </h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600 items-center">Are you sure you want to delete booking</span>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                    <button onClick={onClose} className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                        Close
                    </button>
                    <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                        Confirm
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex font-plus items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [deletebooking, setDeleteBooking] = useState<any>(false);
   const router = useRouter();
  
    const sidebarNavItems = [
                  { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'},
                  { icon: Calendar, text: 'Orders',route: '/pages/orders'},
                  { icon: Logs, text: 'Menu',route: '/pages/menus',active: true },
                  { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
                  { icon: Users, text: 'Staff',route: '/pages/staff'},
                  { icon: Settings, text: 'Settings',route: '/pages/settings'},
                ];

  return (
    <div className="lg:flex min-h-screen bg-[#F2F0F5] w-full">
     <aside className={`fixed inset-y-0 left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
             <div className="p-6 flex items-center space-x-2 border-b">
               <div className="text-2xl font-bold text-gray-800">
                 <span className="text-[#3B0A45]">Go</span>Vibe
               </div>
             </div>
             <nav className="flex-1 p-4 space-y-2">
               {sidebarNavItems.map(item => (
                 <SidebarLink key={item.text} icon={item.icon} text={item.text} active={item.active} route={item.route} />
               ))}
             </nav>
           </aside>
           
           {/* Backdrop for mobile sidebar */}
           {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className="flex-1 flex flex-col">
         <header className="flex justify-between items-center mb-8 w-[90%] mx-auto mt-5">
                      <div className="flex items-center space-x-4">
                                     <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600">
                                         {isSidebarOpen ? <X/> : <Menu />}
                                     </button>
                                  </div>
                       {/* <div className="w-40"/> */}
                     <div className="flex items-center gap-6">
                       <button className="relative">
                         <Bell size={24} className="text-gray-500" />
                         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                           3
                         </span>
                       </button>
                       <div onClick={() => {
                                       router.push('/pages/settings')
                                      }} className='cursor-pointer'>
                                       <UserRound size={20} color='#000'/>
                                      </div>
                     </div>
                   </header>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div >
          {/* Header Section */}
          <div  className="flex flex-col font-plus md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900"> Menu </h1>
            {/* <button className="bg-violet-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-violet-700 transition-colors self-start md:self-auto">
              New Booking
            </button> */}
            <div className="w-40"/>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full pl-12 text-black pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 font-plus">
                <FilterDropdown label="Category" />
                {/* <FilterDropdown label="Date" />
                <FilterDropdown label="Status" /> */}
              </div>
            </div>
          </div>

          {/* Bookings Table Section */}
          <div className="bg-white rounded-lg overflow-hidden font-plus">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                {/* Desktop Table Header */}
                <thead className="border-b border-gray-200 hidden md:table-header-group">
                  <tr>
                    <th className="px-6 py-6 text-[20px] font-semibold text-gray-800"> Menu category</th>
                    <th className="px-6 py-6 text-[20px] font-semibold text-gray-800"> Total Menus</th>
                    <th className="px-6 py-6 text-[20px] font-semibold text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-plus">
                  {bookingsData.map((booking, index) => (
                    // On mobile, each row is a card. On desktop, it's a standard table row.
                    <tr key={index} className="block md:table-row p-4 md:p-0 border-b border-[#E3DBE5] last:border-none">
                      {/* Mobile Label + Data */}
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold md:hidden mr-2">Customer:</span>
                        <span className="font-normal text-sm ">{booking.customer}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold  text-gray-800 md:hidden mr-2">Venue:</span>
                        <div>
                          <div className="text-gray-800 text-sm">{booking.venue}</div>
                          {booking.venueDetails && <div className="text-xs text-gray-500">{booking.venueDetails}</div>}
                        </div>
                      </td>
                     
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Actions:</span>
                         <button onClick={() => setSelectedBooking(booking)} className="text-violet-800 cursor-pointer">
                                View
                            </button>
                        <span className="text-black mx-1"> | </span>
                        <button onClick={() => setDeleteBooking(true)} className="text-red-700 cursor-pointer">
                                <h3>Delete</h3>
                            </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      </div>
       <AnimatePresence>
        {selectedBooking && (
            <BookingDetailModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} />
        )}
      </AnimatePresence>
       <AnimatePresence>
        {deletebooking && (
            <CancelDetailModal  onClose={() => setDeleteBooking(false)} />
        )}
      </AnimatePresence>
    </div>
    
  );
}
