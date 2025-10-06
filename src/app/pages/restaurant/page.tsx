"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, UploadCloud, PlusCircle, Trash2 } from 'lucide-react';
import Image1 from '../../../../assets/hero-3.jpg';

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
  // --- State Management ---
  const [operatingDays, setOperatingDays] = useState<any>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const [menu, setMenu] = useState([
    { id: 1, name: 'Appetizers', items: [{ id: 1, name: '', price: '', description: '' }] }
  ]);

  const handleCategoryImageUpload = (e: any, categoryId: any) => {
    const file = e.target.files[0];
    if (file) {
      setMenu(prev => prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, categoryImage: file }
          : cat
      ));
    }
  };
  
  // --- Handler Functions for Dynamic Menu ---
  const handleDayToggle = (day: any) => {
    setOperatingDays((prev: any) => ({ ...prev, [day]: !prev[day] }));
  };

  const addMenuCategory = () => {
    setMenu(prev => [...prev, { id: Date.now(), name: '', items: [{ id: Date.now(), name: '', price: '', description: '' }] }]);
  };
  
  const removeMenuCategory = (categoryId: any) => {
    setMenu(prev => prev.filter(cat => cat.id !== categoryId));
  };
  
  const addMenuItem = (categoryId: any) => {
    setMenu(prev => prev.map(cat => 
      cat.id === categoryId 
        ? { ...cat, items: [...cat.items, { id: Date.now(), name: '', price: '', description: '' }] }
        : cat
    ));
  };

  const removeMenuItem = (categoryId: any, itemId: any) => {
    setMenu(prev => prev.map(cat =>
      cat.id === categoryId
        ? { ...cat, items: cat.items.filter(item => item.id !== itemId) }
        : cat
    ));
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

          <form className="space-y-8">
            <InputField label="Restaurant Name" id="restaurantName" placeholder="e.g., The Golden Spoon" />
            <InputField label="Location" id="location" placeholder="e.g., 123 Main Street, Accra" />
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

            {/* Dynamic Menu Builder */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Menu Builder</label>
                <div className="space-y-6">
                    {menu.map((category, catIndex) => (
                        <div key={category.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                            <div className="flex items-center justify-between mb-4">
                                <input type="text" placeholder={`Category ${catIndex + 1} (e.g., Appetizers)`} className="w-full text-lg font-semibold border-b border-gray-300 focus:outline-none focus:border-gray-800" />
                                <button type="button" onClick={() => removeMenuCategory(category.id)} className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"><Trash2 size={18} /></button>
                            </div>
                            <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                  <div key={item.id}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                                        <input type="text" placeholder={`Item ${itemIndex + 1} Name`} className="md:col-span-5 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                        <input type="text" placeholder="Price" className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                       
                                        <button type="button" onClick={() => removeMenuItem(category.id, item.id)} className="md:col-span-1 flex justify-center items-center text-red-500 hover:text-red-700 cursor-pointer"><Trash2 size={16} /></button>
                                    </div>
                                    <div className='mt-5'>
                                       <TextAreaField label="Description(Optional)" id="description" placeholder="A juicy burger with melted cheese and crispy fries" />
                                    </div>
                                  </div>
                                ))}
                                <button type="button" onClick={() => addMenuItem(category.id)} className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 font-medium">
                                    <PlusCircle size={16} /> Add Menu Item
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addMenuCategory} className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-700 hover:text-green-700 transition">
                       <PlusCircle size={18} /> Add Category
                    </button>
                </div>
            </div>

            <button type="submit" className="cursor-pointer w-full bg-[#3B0A45] text-white font-semibold py-3 rounded-lg  transition-colors">
              Submit Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}