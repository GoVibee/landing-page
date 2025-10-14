"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import FilterDropdown from '../../../components/ui/FilterDropdown';
import React, { useState,useEffect } from 'react';
import { Calendar, LayoutDashboard,Logs,ChevronDown, Settings, BarChart2, Users, Search, Bell, Menu, X,UserRound,MessageSquare, SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';



const SidebarLink = ({ icon: Icon, text,route }: any) => (
  <a href={route} className={`flex font-plus items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const router = useRouter();
  
    const sidebarNavItems = [
        { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'  },
        { icon: Calendar, text: 'Orders',route: '/pages/orders'},
        { icon: Logs, text: 'Menu',route: '/pages/menu'},
        { icon: MessageSquare, text: 'Reviews',route: '/pages/reviews'},
        // { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
        { icon: Users, text: 'Staff',route: '/pages/staff'},
        { icon: Settings, text: 'Settings',route: '/pages/settings'},
    ];

    const notifications = [
        {
            id: 1,
            title: 'Table 12 has ordered',
            description: 'beef pizza'
        },
        {
            id: 2,
            title: 'Table 12 has ordered',
            description: 'beef pizza'
        },
        {
            id: 3,
            title: 'Table 12 has ordered',
            description: 'beef pizza'
        }
    ]

  return (
    <div className="lg:flex min-h-screen bg-gray-100 w-full font-plus">
        <aside className={`fixed top-0 h-screen inset-y-0 left-0 bg-white shadow-sm z-50 w-64 lg:w-56 xl:w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
          <div className="p-6 flex items-center space-x-2 border-b border-gray-200">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-[#3B0A45]">Go</span>Vibe
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {sidebarNavItems.map(item => (
              <SidebarLink key={item.text} icon={item.icon} text={item.text}  route={item.route}/>
            ))}
          </nav>
        </aside>
           
           {/* Backdrop for mobile sidebar */}
           {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className="flex-1 flex flex-col overflow-y-auto h-screen">
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
        <div>
          {/* Header Section */}
          <div  className="flex flex-col font-plus md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Notifications </h1>
            <div className="w-40"/>
          </div>


          {/* Bookings Table Section */}
          <div className="overflow-hidden font-plus">
            <div className="overflow-x-auto">
                <h3 className='my-3 text-gray-500'>Today</h3>
                <div className=''>
                    {
                        notifications.map((n) => (
                            <div key={n.id} className='bg-white rounded-lg  mb-4 px-2 py-1'>
                                <div className='md:w-[90%] md:mx-auto flex items-center justify-between gap-4'>
                                    <div>
                                        <h3 className='font-medium'>{n.title}</h3>
                                        <h4 className='text-sm text-gray-600'>{n.description}</h4>
                                    </div>
                                    <div className='cursor-pointer text-[#3B0A45] font-semibold'> View </div>
                                </div>
                            </div>
                        ))
                    }
                
                </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
    
  );
}
