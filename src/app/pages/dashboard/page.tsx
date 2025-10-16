"use client"; // This is required for Framer Motion and other client-side hooks

import { motion } from "framer-motion";
import React, { useState} from 'react';
import { Calendar, LayoutDashboard, Settings, BarChart2,Users, Bell, Menu, X,UserRound,CornerDownRight,Logs,MessageSquare,ShoppingBag,Utensils,DollarSign,ChevronDown,SlidersHorizontal } from 'lucide-react';
import StatCard from "../../../components/pages/dashboard/StatCard";
import RecentBookingsTable from "../../../components/pages/bookings/RecentBookingsTable";
import PopularVenuesTable from "../../../components/pages/venues/PopularVenuesTable";
import { useRouter } from "next/navigation";
import DashboardLayout from "./layout";
import { ChartContainer} from './../../../components/pages/dashboard/ChartContainer';
import {TotalOrdersChart} from '../../../components/pages/dashboard/TotalOrdersChart';
import {TotalRevenueChart} from '../../../components/pages/dashboard/TotalRevenueChart';




// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center font-plus space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);


export default function HomePage() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const router = useRouter();

    const sidebarNavItems = [
      { icon: LayoutDashboard, text: 'Dashboard', active: true,route: '/pages/dashboard'  },
      { icon: Calendar, text: 'Orders',route: '/pages/orders' },
      { icon: Logs, text: 'Menu',route: '/pages/menu'},
      { icon: MessageSquare, text: 'Reviews',route: '/pages/reviews'},
      // { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
      { icon: Users, text: 'Staff',route: '/pages/staff' },
      { icon: Settings, text: 'Settings',route: '/pages/settings'},
    ];
  return (
    <DashboardLayout>
      <div className="lg:flex min-h-screen bg-gray-100 w-full font-plus">
        <aside className={`fixed top-0 h-screen inset-y-0 left-0 bg-white shadow-sm z-50 w-64 lg:w-56 xl:w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
          <div className="p-6 flex items-center space-x-2 border-b border-gray-200">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-[#3B0A45]">Go</span>Vibe
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {sidebarNavItems.map(item => (
              <SidebarLink key={item.text} icon={item.icon} text={item.text} active={item.active} route={item.route}/>
            ))}
          </nav>
          <div  className="mb-20 flex items-center space-x-3 px-4 w-64 lg:w-56 xl:w-64 mx-auto">
            <CornerDownRight size={24} color="#000" className='text-red-700'/> 
            <button className='cursor-pointer text-red-700 font-medium'> Logout </button>
          </div>
        </aside>
        
        {/* Backdrop for mobile sidebar */}
        {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto h-screen">
          <header className="flex justify-between items-center mb-8">
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

          <div className="space-y-8">
            {/* Stat Cards Section */}
            <section
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <StatCard
                title="Total Menu"
                value="1,250"
                icon={<Utensils size={20} className="text-[#3B0A45]" />}
                iconBg="bg-purple-100"
              />
              <StatCard
                title="Total Orders"
                value="320"
                icon={<ShoppingBag size={20} className="text-[#3B0A45]" />}
                iconBg="bg-blue-100"
              />
              <StatCard
                title="Income"
                value="$15,000"
                icon={<DollarSign size={20} className="text-[#3B0A45]" />}
                iconBg="bg-green-100"
              />
              <StatCard
                title="Customers"
                value="850"
                icon={<Users size={20} className="text-[#3B0A45]" />}
                iconBg="bg-pink-100"
              />
            </section>

            {/* This motion.div will animate its children when they enter the viewport */}
           <div className="">
            <div className="max-w-7xl mx-auto">
              {/* Main container for the charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Total Revenue Chart */}
                <ChartContainer
                  title="Total Revenue"
                  button={
                    <button className="flex items-center gap-2 text-sm text-gray-800   font-semibold rounded-md px-3 py-1.5 bg-gray-100 cursor-pointer">
                      Filter <SlidersHorizontal size={14} />
                    </button>
                  }
                >
                  <TotalRevenueChart />
                </ChartContainer>

                {/* Total Orders Chart */}
                <ChartContainer
                  title="Total Orders"
                  button={
                    <button className="flex items-center gap-2 text-sm text-gray-800   font-semibold cursor-pointer rounded-md px-3 py-1.5 bg-gray-100">
                      Last 6 Months <ChevronDown size={16} />
                    </button>
                  }
                >
                  <TotalOrdersChart />
                </ChartContainer>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-1 gap-8">
              <div>
                <RecentBookingsTable />
              </div>
              {/* <div>
                <PopularVenuesTable />
              </div> */}
            </div>
          </div>
          
          <footer className="text-center text-sm text-gray-500 mt-10">
              © 2025 GoVibe. All rights reserved.
          </footer>
        </main>
      </div>
    </DashboardLayout>
  );
}
