'use client'

import React, { useState } from 'react'; // Import useState
import Image1 from '../../../../../../assets/3.jpg';
import Image from 'next/image';

function Page() {

    const categories = [
        {name: 'Starters', id: 1},
        {name: 'Main Course', id: 2},
        {name: 'Desserts', id: 3},
        {name: 'Beverages', id: 4},
        {name: 'Salads', id: 5},
        {name: 'Soups', id: 6},
        {name: 'Sides', id: 7},
        {name: 'Specials', id: 8},
        {name: 'Grills', id: 9},
        {name: 'Pastas', id: 10}
    ];

    const [activeCategory, setActiveCategory] = useState(1); // State to track the active category

    return (
        <div className='mx-auto w-[90%] mt-5'>
            <div>
                <h1 className='text-center text-xl text-gray-800 font-semibold'>CoCo Vanilla - East legon</h1>
            </div>
            <div className='mt-5'>
                <div>
                    <Image 
                        src={Image1}
                        alt='restaurant-image'
                        className='w-full h-full rounded-lg' // Added rounded-lg for better aesthetics
                        priority
                    />
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-md text-gray-800 font-semibold mb-3'>Categories</h3>
                {/* --- MODIFIED CONTAINER --- */}
                <div className='flex gap-3 items-center overflow-x-auto whitespace-nowrap py-2 scrollbar-hide'>
                    {
                        categories.map((cat: any) => (
                            <button 
                                key={cat.id} 
                                onClick={() => setActiveCategory(cat.id)}
                                // Conditionally apply styles for the active category
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeCategory === cat.id 
                                    ? 'bg-gray-800 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page;