"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../../components/ui/Badge';
import React, { useState,useEffect } from 'react';
import { Home, Calendar, LayoutDashboard,Logs, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X,UserRound,MessageSquare,Plus,ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image1 from '../../../../assets/hero-3.jpg';
import Image from 'next/image';


const bookingsData = [
  { item: 'beef pizza',category: 'Pizza',price: '$100',description: 'meat , bread , flavour' }
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
                <div className="p-4 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Dish Overview</h2>
                        <button onClick={onClose} className="cursor-pointer text-gray-400 hover:text-gray-600">
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

const SidebarLink = ({ icon: Icon, text, active,route,onClick,setShowCategories }: any) => {
  useEffect(() => {
    setShowCategories(true);
  },[])

  return (
  <div 
  >
    <a href={route} className={`flex font-plus items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
      <Icon className="w-5 h-5" />
      <span className="flex-1">{text}</span>
    </a>
  </div>
  )
};

const MenuCategorySublink = ({ categories, activeCategory, onSelect }: any) => (
  <div className="flex flex-col ml-8 mt-2">
      <a
        key={categories.text}
        onClick={() => {
          onSelect(categories.text);
        }}
        href={categories.route}
        className={`text-left cursor-pointer px-3 py-2 rounded-lg mb-1 transition-colors ${
          activeCategory === categories.text
            ? 'bg-purple-200 text-[#3B0A45] font-semibold'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {categories.text}
      </a>
  </div>
);


export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [deletebooking, setDeleteBooking] = useState<any>(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const router = useRouter();

  const menuCategories = [{
    text: 'Categories',
    route: '/pages/menu/category'
  }];

  const categories = [
    {
      id: 1,
      name: 'Pizza',
      image: Image1
    },
    {
      id: 2,
      name: 'Pizza',
      image: Image1
    },
    {
      id: 3,
      name: 'Pizza',
      image: Image1
    }
  ]
  
    const sidebarNavItems = [
      { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'},
      { icon: Calendar, text: 'Orders',route: '/pages/orders'},
      {
        icon: Logs,
        text: 'Menu',
        route: '/pages/menu',
        active: true,
        hasSublink: true,
      },
      { icon: MessageSquare, text: 'Reviews',route: '/pages/reviews'},
      { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
      { icon: Users, text: 'Staff',route: '/pages/staff'},
      { icon: Settings, text: 'Settings',route: '/pages/settings'},
    ];

  return (
    <div className="lg:flex min-h-screen bg-gray-100 w-full">
     <aside className={`fixed inset-y-0 left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
             <div className="p-6 flex items-center space-x-2 border-b border-gray-300">
               <div className="text-2xl font-bold text-gray-800">
                 <span className="text-[#3B0A45]">Go</span>Vibe
               </div>
             </div>
             <nav className="flex-1 p-4 space-y-2">
              {sidebarNavItems.map(item => (
            <div key={item.text}>
              <SidebarLink
                icon={item.icon}
                text={item.text}
                active={item.active}
                route={item.route}
                onClick={item.hasSublink ? () => setShowCategories(!showCategories) : undefined}
                setShowCategories={setShowCategories}
              />
              {/* Show sublinks for Menu */}
              {item.hasSublink && showCategories && menuCategories.map((cat) => (
                (
                <MenuCategorySublink
                  categories={cat}
                  activeCategory={activeCategory}
                  onSelect={(cat: any) => setActiveCategory(cat)}
                  key={cat.text}
                />
              )
              ))}
            </div>
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <h1 className="text-3xl font-plus font-semibold mb-4 sm:mb-0"> Menu </h1>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6">
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className="relative md:w-1/2 lg:w-[40%]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="search menu..."
                  className="w-full md:w-full pl-12 text-black pr-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                />
              </div>
              <button className="bg-[#3B0A45] mt-5 md:mt-0 flex gap-3 font-plus cursor-pointer text-white px-5 py-2.5 rounded-lg font-medium shadow-md  transition-colors w-1/2 md:w-1/4 lg:w-[17%]">
                Add  Item
                <Plus />
              </button>
            </div>
          </div>
          {/* Category Content Section */}
          <div className='my-16'>
            <div className='flex items-center justify-between cursor-pointer'>
               <h3 className='text-xl font-medium'>Categories</h3>
               <div className='bg-white px-3 py-1 rounded-lg w-32 flex items-center justify-between'>
                <p className='text-[#3B0A45]'>View All</p>
                <div className='flex flex-col items-center justify-center bg-[#3B0A45] w-8 h-8 p-1 rounded-full'>
                  <ChevronRight size={15} color='#fff' className='cursor-pointer'/>
                </div>
               </div>
            </div>
            <div className='mt-3 flex gap-5'>
              {
                categories.map((cat) => (
                  <div className='bg-white py-3 rounded-3xl w-28 h-48' key={cat.id}>
                    <div className='flex flex-col'>
                      <div className='bg-purple-100 p-3 rounded-3xl w-20 mx-auto'>
                        <Image 
                          src={cat.image} 
                          alt={cat.name} 
                          className='w-14 h-14 object-cover rounded-lg mx-auto'
                          priority
                        />
                      </div>
                      <div>
                        <h3 className='text-center mt-3 font-medium text-gray-700'> {cat.name} </h3>
                      </div>
                      <div className='flex flex-col items-center justify-center mt-2 bg-[#3B0A45] w-10 h-10 p-1 rounded-full mx-auto'>
                        <ChevronRight size={20} color='#fff' className='cursor-pointer'/>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>

          {/* Bookings Table Section */}
          <div className="bg-white rounded-lg overflow-hidden font-plus">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                {/* Desktop Table Header */}
                <thead className="border-b border-gray-200 hidden md:table-header-group">
                  <tr>
                    <th className="px-6 py-6 text-[17px] font-semibold text-gray-800"> Item</th>
                    <th className="px-6 py-6 text-[17px] font-semibold text-gray-800"> Category</th>
                    <th className="px-6 py-6 text-[17px] font-semibold text-gray-800">Price</th>
                    <th className="px-6 py-6 text-[17px] font-semibold text-gray-800">Description</th>
                    <th className="px-6 py-6 text-[17px] font-semibold text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-plus">
                  {bookingsData.map((booking, index) => (
                    // On mobile, each row is a card. On desktop, it's a standard table row.
                    <tr key={index} className="block md:table-row p-4 md:p-0 border-b border-[#E3DBE5] last:border-none">
                      {/* Mobile Label + Data */}
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Item:</span>
                        <span className="font-normal text-sm ">{booking.item}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                         <span className="font-semibold text-gray-600 md:hidden mr-2">Category:</span>
                        <div>
                          <div className="text-gray-800 text-sm">{booking.category}</div>
                        </div>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Price:</span>
                        <span className="font-normal text-sm ">{booking.price}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Description:</span>
                        <span className="font-normal text-sm ">{booking.description}</span>
                      </td>
                     
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Actions:</span>
                         <button onClick={() => setSelectedBooking(booking)} className="text-[#3B0A45] cursor-pointer">
                                View
                            </button>
                        <span className="text-black mx-1"> | </span>
                        <button onClick={() => setDeleteBooking(true)} className="text-red-700 cursor-pointer">
                                <h3>Delete</h3>
                            </button>
                            <span className="text-black mx-1"> | </span>
                             <button onClick={() => setSelectedBooking(booking)} className="text-[#3B0A45] cursor-pointer">
                                Edit
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
