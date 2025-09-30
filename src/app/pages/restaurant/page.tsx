'use client'

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState,useEffect,useRef } from 'react';
import { Clock,Check } from 'lucide-react';

// A simple SVG icon component for the logo
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-gray-800"
  >
    <path d="M12.001 2.003c-2.338 0-4.533 1.01-6.08 2.68l6.08 6.22 6.08-6.22C16.534 3.013 14.339 2.003 12.001 2.003zM3.73 6.133c-1.127 1.52-.443 3.68.785 5.86l7.486-7.66c-2.03.6-3.95 2.15-5.32 4.35- .79 1.26-1.46 2.5-1.95 3.45zM20.27 6.133c-1.37-2.2-3.29-3.75-5.32-4.35l7.486 7.66c1.228-2.18 1.912-4.34.785-5.86-.49-.95-1.16-2.19-1.95-3.45zM12.001 15.223l-7.408 7.58c5.49 1.41 10.93-1.01 14.816-7.58H12.001z" />
  </svg>
);

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



const page: NextPage = () => {
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

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


  return (
    <>
      <Head>
        <title>Sign up - Host Dashboard</title>
      </Head>

      <main className="flex min-h-screen w-full flex-col bg-slate-50 font-plus">
        {/* Header */}
        <header className="absolute top-0 left-0 w-full p-6 sm:p-8">
          <div className="flex items-center space-x-2">
            <LogoIcon />
            <h1 className="text-xl font-semibold text-gray-800">Host Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Create account
              </h2>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Restaurant name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    placeholder="restaurant name"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="description"
                    autoComplete="description"
                    required
                    placeholder="description"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    id="location"
                    name="location"
                    type="location"
                    autoComplete="location"
                    required
                    placeholder="location"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>
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


              {/* Sign In Button */}
              <div className='mt-10'>
                <button
                  type="submit"
                  className="w-full justify-center rounded-md border border-transparent bg-[#3B0A45] py-3 px-4 text-sm font-semibold text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:ring-offset-2 cursor-pointer"
                  onClick={() => router.push('/pages/signin')}
                >
                  Create account
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default page;