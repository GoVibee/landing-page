'use client';

import React, { useState,useRef,useEffect } from 'react';
import Image from 'next/image';
import { Calendar, LayoutDashboard, Settings, Users,CornerDownRight, Bell, Menu, X,Logs,MessageSquare ,UploadCloud,UserRound,ChevronDown,Check,Clock } from 'lucide-react';
import Image1 from '../../../../assets/go.png';
import { useRouter } from 'next/navigation';
import {storage} from '../../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { useRestaurant } from '@/hooks/useRestaurant';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import {useAuth} from '@/hooks/useAuth';


// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex font-plus items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

// --- Reusable Components ---
const FormInput = ({ label, placeholder, type = 'text', className = '',options, value,
  onChange, }: any) => (
    <div className={className}>
        <label className="block font-plus text-sm font-medium text-gray-700 mb-2">{label}</label>
         {options ? (
      <select
        className="w-full text-black bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
        value={value} // ✅ controlled
        onChange={(e) => onChange(e.target.value)} // ✅ pass up
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt: any) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value} // ✅ controlled
        onChange={(e) => onChange(e.target.value)} // ✅ pass up
        className="w-full text-black bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
      />
    )}
    </div>
);

// --- NEW: Time Input Component ---
const CustomTimePicker = ({ label, value, onChange }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hour, setHour] = useState('09');
    const [minute, setMinute] = useState('00');
    const [period, setPeriod] = useState('AM');
    const pickerRef = useRef<any>(null);

    useEffect(() => {
        onChange(`${hour}:${minute} ${period}`);
    }, [hour, minute, period]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    return (
        <div className="relative" ref={pickerRef}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-between"
            >
                <span className="text-gray-800">{value || 'Select time'}</span>
                <Clock className="w-5 h-5 text-gray-400" />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex space-x-2">
                    {/* Hours */}
                    <div className="h-48 overflow-y-auto flex-1">
                        {hours.map(h => (
                            <div key={h} onClick={() => setHour(h)} className={`px-2 text-black  py-1 rounded cursor-pointer text-center ${hour === h ? 'bg-pink-100 text-[#3B0A45]' : 'hover:bg-gray-100'}`}>{h}</div>
                        ))}
                    </div>
                    {/* Minutes */}
                    <div className="h-48 overflow-y-auto flex-1">
                        {minutes.map(m => (
                            <div key={m} onClick={() => setMinute(m)} className={`px-2 py-1 text-black rounded cursor-pointer text-center ${minute === m ? 'bg-pink-100 text-[#3B0A45]' : 'hover:bg-gray-100'}`}>{m}</div>
                        ))}
                    </div>
                    {/* AM/PM */}
                    <div className="flex flex-col space-y-1">
                        <div onClick={() => setPeriod('AM')} className={`px-3 py-1 text-black  rounded cursor-pointer ${period === 'AM' ? 'bg-pink-100 text-[3B0A45]' : 'hover:bg-gray-100'}`}>AM</div>
                        <div onClick={() => setPeriod('PM')} className={`px-3 text-black  py-1 rounded cursor-pointer ${period === 'PM' ? 'bg-pink-100 text-[#3B0A45]' : 'hover:bg-gray-100 text-black '}`}>PM</div>
                    </div>
                </div>
            )}
        </div>
    );
};


const FormTextarea = ({ label, placeholder, rows = 3,value, onChange }: any) => (
    <div>
        <label className="block font-plus text-sm font-medium text-gray-700 mb-2">{label}</label>
        <textarea 
            placeholder={placeholder} 
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full text-black bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
        ></textarea>
    </div>
);

// --- NEW: MultiSelect Component ---
const MultiSelectInput = ({ label, placeholder, options, selectedOptions, setSelectedOptions }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (option: any) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item: any) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="relative">
                <button 
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 text-left flex items-center justify-between"
                >
                    <div className="flex flex-wrap gap-2">
                        {selectedOptions.length > 0 ? (
                            selectedOptions.map((option: any) => (
                                <span key={option} className="bg-pink-100 text-[#3B0A45] text-sm font-medium px-2 py-1 rounded-md flex items-center">
                                    {option}
                                    <div 
                                        onClick={(e) => { e.stopPropagation(); toggleOption(option); }}
                                        className="ml-2 text-[#3B0A45]"
                                    >
                                        <X size={14} className='cursor-pointer'/>
                                    </div>
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-400">{placeholder}</span>
                        )}
                    </div>
                    <ChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {options.map((option: any) => (
                            <div 
                                key={option} 
                                onClick={() => toggleOption(option)}
                                className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center"
                            >
                                <input 
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    readOnly
                                    className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 mr-3"
                                />
                                <span className="text-gray-800">{option}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


// --- Main Page Component ---
export default function CreateRestaurantPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState<string[]>([]);
    // const {UploadFiles} = useRestaurant();
    const [uploadloading,setUploadLoading] = useState(false);
    const [submitloading,setSubmitLoading] = useState(false);
    const {Logout} = useAuth();
    
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    // --- NEW: State for the entire menu structure ---
    const [form, setForm] = useState({
        name: "",
        description: "",
        location: "",
        contact: { phone: "", email: "" },
        cuisines: [] as string[],
        files: [] as string[]
    });

     const cuisineOptions = ["Restaurant"];

    const handleSubmit = (e: React.FormEvent) => {
        // setSubmitLoading(true);
        e.preventDefault();
        console.log(form)

        console.log("Final payload for backend:");
        // 👉 send `payload` to your NestJS backend
    };

    const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
        // setUploadLoading(true);
        // if (event.target.files) {
        //     const files = Array.from(event.target.files);
        //     setFile(files[0]); // keep first file for single upload
        //     // upload all files
        //     const data: any = await UploadFiles(files)
        //     if(data){
        //         setUploadLoading(false)
        //     }

        //     setForm((prev: any) => ({
        //     ...prev,
        //     files: [...(prev.files || []), ...data.urls] // append new urls
        //     }));
        // }
    };


   // --- NEW: State for Operating Hours ---
    const [operatingHours, setOperatingHours] = useState<any>({
        Monday: { checked: false, open: '', close: '' },
        Tuesday: { checked: false, open: '', close: '' },
        Wednesday: { checked: false, open: '', close: '' },
        Thursday: { checked: false, open: '', close: '' },
        Friday: { checked: false, open: '', close: '' },
        Saturday: { checked: false, open: '', close: '' },
        Sunday: { checked: false, open: '', close: '' },
    });

    // --- NEW: Handler for Toggling Day Checkbox ---
    const handleDayToggle = (day: any) => {
        setOperatingHours((prev: any) => ({
            ...prev,
            [day]: { ...prev[day], checked: !prev[day].checked }
        }));
    };

    // --- NEW: Handler for Time Input Change ---
    const handleTimeChange = (day: any, type: any, value: any) => {
        setOperatingHours((prev: any) => ({
            ...prev,
            [day]: { ...prev[day], [type]: value }
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
        <div className="lg:flex min-h-screen bg-gray-50 w-full font-plus">
            {/* --- Sidebar --- */}
       <aside className={`fixed top-0 h-screen inset-y-0 left-0 bg-white z-50 w-64 lg:w-56 xl:w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
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
         <div  className="mt-10 lg:mb-10 flex items-center space-x-3 px-8 w-64 lg:w-56 xl:w-64 mx-auto">
                                                <CornerDownRight size={24} className='text-red-700'/> 
                                                <button 
                                                  className='cursor-pointer text-red-700 font-medium'
                                                  onClick={() => {
                                                    Logout();
                                                    router.push('/pages/signup')
                                                  }}
                                                > Logout </button>
                                              </div>
        </aside>
      
      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
           

            {/* --- Main Content --- */}
            <div  className="flex-1 flex flex-col overflow-y-auto h-screen">
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
                <main className="p-6 lg:p-8 font-plus">
                    <div className="container mx-auto max-w-4xl font-plus">
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-plus">Restaurant Details</h1>

                        <div className="bg-white p-8 rounded-xl  space-y-8">
                            {/* Basic Information */}
                            <section>
                                <FormInput 
                                    label="Restaurant Name" 
                                    placeholder="Enter restaurant name" 
                                    value={form.name}
                                    onChange={(val: string) => setForm({ ...form, name: val })}
                                />
                                <div className="mt-6">
                                    <FormTextarea 
                                        label="Description" 
                                        placeholder="Enter a description for the restaurant"
                                        value={form.description}
                                        onChange={(val: string) => setForm({ ...form, description: val })} 
                                    />
                                </div>
                                <div className="mt-6">
                                    <FormInput 
                                        label="Location" 
                                        placeholder="Enter location address"
                                        value={form.location}
                                        onChange={(val: string) => setForm({ ...form, location: val })} 
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <FormInput 
                                        label="Phone Number" 
                                        placeholder="Enter phone number" 
                                        type="tel"
                                        value={form.contact.phone}
                                        onChange={(val: string) =>
                                        setForm({
                                            ...form,
                                            contact: {
                                            ...form.contact,
                                            phone: val,
                                            },
                                        })
                                        }
                                    />
                                    <FormInput 
                                        label="Email" 
                                        placeholder="Enter email address" 
                                        type="email"
                                        value={form.contact.phone}
                                        onChange={(val: string) =>
                                        setForm({
                                            ...form,
                                            contact: {
                                            ...form.contact,
                                            email: val,
                                            },
                                        })
                                        }
                                    />
                                </div>
                                <div className="mt-6">
                                <MultiSelectInput 
                                    label="Venue Type" 
                                    placeholder="Select one or more " 
                                    options={cuisineOptions}
                                    selectedOptions={form.cuisines}
                                    setSelectedOptions={(val: string[]) => setForm({ ...form, cuisines: val })}
                                />
                            </div>
                            </section>

                            <hr className="border-gray-200" />

                            {/* Operating Hours */}
                             <section>
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Operating Hours</h2>
                            <div className="space-y-4">
                                {Object.keys(operatingHours).map((day) => (
                                    <div key={day}>
                                        <div className="flex items-center">
                                            <button 
                                                type="button" 
                                                onClick={() => handleDayToggle(day)}
                                                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${operatingHours[day].checked ? 'bg-[#3B0A45] border-[#3B0A45]' : 'bg-white border-gray-300'}`}
                                            >
                                                {operatingHours[day].checked && <Check className="w-4 h-4 text-white" />}
                                            </button>
                                            <label className="ml-3 text-sm font-medium text-gray-800">{day}</label>
                                        </div>
                                        {operatingHours[day].checked && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 ml-9">
                                                <CustomTimePicker 
                                                    label="Start Time"
                                                    value={operatingHours[day].open}
                                                    onChange={(value: any) => handleTimeChange(day, 'open', value)}
                                                />
                                                <CustomTimePicker 
                                                    label="Closing Time"
                                                    value={operatingHours[day].close}
                                                    onChange={(value: any) => handleTimeChange(day, 'close', value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                            <hr className="border-gray-200" />

                            
                            {/* Photos */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Photos and Videos</h2>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600">
                                    Drag and drop or click to upload photos and videos of the restaurant
                                    </p>

                                    {/* Upload Button triggers file input */}
                                    <button
                                    type="button"
                                    className="mt-4 cursor-pointer bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-300 transition-colors"
                                    onClick={() => fileInputRef.current?.click()}
                                    >
                                    {uploadloading ? (
                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center",gap: 10 }}>
                                                    <span>Uploading</span>
                                                <Oval
                                                    visible={true}
                                                    height="25"
                                                    width="25"
                                                    color="#000"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                />
                                                </div>
                                            ) : 'Upload'}
                                    </button>

                                    {/* Hidden file input */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        multiple
                                        accept="image/*,video/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>

                                {/* Preview uploaded files */}
                                {form.files.length > 0 && (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    {form.files.map((url, idx) => (
                                        <div key={idx} className="relative group">
                                        {url.match(/\.(mp4|mov|avi|mkv)(\?.*)?$/i) ? (
                                            <video
                                            src={url}
                                            controls
                                            playsInline
                                            preload="metadata"
                                            className="rounded-lg w-full h-44 bg-gray-500"
                                            />
                                        ) : (
                                            <img
                                            src={url}
                                            alt="uploaded"
                                            className="rounded-lg w-full h-44 object-cover bg-gray-500"
                                            />
                                        )}
                                        <button
                                            type="button"
                                            onClick={() =>
                                            setForm((prev) => ({
                                                ...prev,
                                                files: prev.files.filter((f) => f !== url),
                                            }))
                                            }
                                            className="absolute top-2 cursor-pointer right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                        >
                                            <X size={14} />
                                        </button>
                                        </div>
                                    ))}
                                    </div>
                                )}
                            </section>
                        
                            <hr className="border-gray-200" />

                        </div>

                        {/* Action Button */}
                        <div className="mt-8 flex justify-end">
                            <button onSubmit={handleSubmit} className="bg-[#3B0A45] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold shadow-md">
                                 {submitloading ? (
                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center",gap: 10 }}>
                                                    <span>Uploading</span>
                                                    <Oval
                                                        visible={true}
                                                        height="25"
                                                        width="25"
                                                        color="#000"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                    />
                                                </div>
                                            ) : 'Update restaurant'}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}