'use client';

import React, { useState,useEffect } from 'react';
import { Home, Calendar, LayoutDashboard,UserRound, Settings, BarChart2, Beer, Coffee, Users, Bell, Menu, X, ChevronRight,Logs,MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Oval } from 'react-loader-spinner';
import { toast } from "react-toastify";


// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

const SettingsItem = ({ icon: Icon, title, description }: any) => (
    <a href="#" className="flex items-center p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <div className="bg-white p-3 rounded-lg border border-gray-200 mr-4">
            <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
    </a>
)

const FormInput = ({ label, placeholder, type = 'text',value,onChange }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          defaultValue={value || ''} 
          required 
          onChange={onChange}
          className="w-full bg-gray-100 border border-gray-200 text-black rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B0A45]" />
    </div>
);

// --- Main Dashboard Component ---
export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const [user,setUser] = useState<any>([])
  const [loading,setLoading] = useState(false);
  const [formdata,setFormdata]  = useState<any>({
    email: '',
    oldPassword: '',
    newPassword: ''
  })

//   const fetch = async() => {
//     const data = await GetUser();
//     setUser(data);
//     setFormdata({...formdata,email: data.email})
//   }

//   useEffect(() => {
//     fetch();
//   },[])

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    // const res:any = await UpdateAdmin(formdata);
    // if(res.user){
    //   setLoading(false);
    //   toast.success("Admin updated successfully!");
    // }
    // setLoading(false)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  console.log(e.target.value);
  setFormdata((prev: any) => ({
    ...prev,
    [name]: value,
  }));
};

    const sidebarNavItems = [
               { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'  },
               { icon: Calendar, text: 'Orders',route: '/pages/orders' },
               { icon: Logs, text: 'Menu',route: '/pages/menu'},
               { icon: MessageSquare, text: 'Reviews',route: '/pages/reviews'},
              //  { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
               { icon: Users, text: 'Staff',route: '/pages/staff' },
               { icon: Settings, text: 'Settings',route: '/pages/settings',active: true},
             ];

  return (
    <div className=" lg:flex min-h-screen bg-gray-50 w-full font-plus">
      {/* --- Sidebar --- */}
     <aside className={`fixed inset-y-0 left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
        <div className="p-6 flex items-center space-x-2 border-b border-gray-200">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-[#3B0A45]">Go</span>Vibe
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarNavItems.map(item => (
            <SidebarLink key={item.text} icon={item.icon} text={item.text} active={item.active}  route={item.route}/>
          ))}
        </nav>
      </aside>
      
      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col">
        {/* --- Top Header --- */}
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

        {/* --- Page Content --- */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

            <div className="max-w-4xl mx-auto space-y-10">
                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Profile </h2>
                <div className="grid md:grid-cols-2 gap-4">
                        <FormInput label="Email" placeholder="123@gmail.com" value={user.email}/>
                        {/* <FormInput label="Password" placeholder="*******" type="tel" />
                        <FormInput label="Phone Number" placeholder="(555) 123-4567" type="tel" /> */}
                    </div>
                    <h3 className='text-black'>Change pasword </h3>
                    <form  onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4 -mt-4">
                        <FormInput 
                          label="Old password" 
                          placeholder="*******" 
                          value={formdata.oldPassword}
                          onChange={handleChange}
                        />
                        <FormInput  
                          label="New password" 
                          placeholder="*******" 
                          value={formdata.newPassword}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-6">
                      <button className="w-full bg-[#3B0A45] cursor-pointer text-white font-semibold rounded-lg py-2.5  transition-colors">
                          {loading ? (
                                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <Oval
                                                  visible={true}
                                                  height="30"
                                                  width="30"
                                                  color="#ffffff"
                                                  wrapperStyle={{}}
                                                  wrapperClass=""
                                                />
                                              </div>
                                            ) : 'Save changes'}
                      </button>
                      </div>
                    </form>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}