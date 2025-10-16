"use client";

import { useState } from 'react';
import Image from 'next/image';
import { UploadCloud} from 'lucide-react';
import Image1 from '../../../../assets/hero-3.jpg';
import { useRouter } from 'next/navigation';

// --- Reusable Form Field Components ---
const InputField = ({ label, id, placeholder, type = "text" }: any) => (
  <div className='font-plus'>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} id={id} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]" />
  </div>
);

const TextAreaField = ({ label, id, placeholder }: any) => (
  <div className='font-plus'>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea id={id} placeholder={placeholder} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45] resize-y" />
  </div>
);

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CreateRestaurantPage() {
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    router.push('/pages/dashboard');

  }

  // --- State Management ---
  const [operatingDays, setOperatingDays] = useState<any>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );


  // --- Handler Functions for Dynamic Menu ---
  const handleDayToggle = (day: any) => {
    setOperatingDays((prev: any) => ({ ...prev, [day]: !prev[day] }));
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-plus">
      <div className="w-full max-w-6xl flex  overflow-hidden">
        
        {/* Left Column: Testimonial (reused for consistency) */}
        <div className="hidden lg:block w-1/2 relative">
           <Image
            src={Image1}
            alt="Restaurant interior"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 text-white">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
               <p className="text-lg mb-6">"GoVibe helps us reach a new generation of diners. The platform is intuitive, and managing our profile, menu, and bookings has never been easier."</p>
            </div>
          </div>
        </div>

        {/* Right Column: Restaurant Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 overflow-y-auto" style={{maxHeight: '90vh'}}>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Set up your Restaurant</h1>
          <p className="text-gray-600 mb-8">Fill in the details to get your restaurant on the platform.</p>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <InputField label="Restaurant Name" id="restaurantName" placeholder="e.g., The Golden Spoon" />
            <InputField label="Location" id="location" placeholder="e.g., 123 Main Street, Accra" />
              <InputField label="Contact" id="contact" placeholder="e.g., 0540768798" />
            <TextAreaField label="Description" id="description" placeholder="Tell us about your restaurant's vibe, cuisine, and history." />
            
            {/* Operating Days & Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Operating Days & Hours</label>
              <div className="space-y-4">
                {daysOfWeek.map(day => (
                  <div key={day} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <label htmlFor={day} className="flex items-center cursor-pointer">
                        <input type="checkbox" id={day} checked={operatingDays[day]} onChange={() => handleDayToggle(day)} className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-700" />
                        <span className="ml-3 text-gray-800">{day}</span>
                      </label>
                      {operatingDays[day] && (
                        <div className="flex items-center gap-2">
                           <input type="time" defaultValue="09:00" className="w-28 text-sm p-1 border border-gray-300 rounded-md" />
                           <span>-</span>
                           <input type="time" defaultValue="22:00" className="w-28 text-sm p-1 border border-gray-300 rounded-md" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Upload Pictures & Videos</label>
               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 hover:text-gray-900">
                      <span>Upload files</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">PNG, JPG, GIF up to 10MB; MP4 up to 50MB</p>
                </div>
              </div>
            </div>
            <button type="submit" className="cursor-pointer w-full bg-[#3B0A45] text-white font-semibold py-3 rounded-lg  transition-colors">
              Create Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}