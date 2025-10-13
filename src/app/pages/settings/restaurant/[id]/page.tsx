'use client'

import React, { useState, useMemo } from 'react';
import Image1 from '../../../../../../assets/3.jpg';
import Image from 'next/image';
import { Search, Plus, Minus, ShoppingCart } from 'lucide-react';
import {useRouter} from 'next/navigation';

// --- Sample Data ---
const categories = [
    { name: 'Starters', id: 1 },
    { name: 'Main Course', id: 2 },
    { name: 'Desserts', id: 3 },
    { name: 'Beverages', id: 4 },
    { name: 'Salads', id: 5 },
    { name: 'Soups', id: 6 },
    { name: 'Sides', id: 7 },
    { name: 'Specials', id: 8 },
    { name: 'Grills', id: 9 },
    { name: 'Pastas', id: 10 }
];

const allMenuItems = [
    { id: 101, categoryId: 1, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling.', price: 5.99 },
    { id: 102, categoryId: 1, name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 4.50 },
     { id: 101, categoryId: 1, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling.', price: 5.99 },
    { id: 102, categoryId: 1, name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 4.50 },
     { id: 101, categoryId: 1, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling.', price: 5.99 },
    { id: 102, categoryId: 1, name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 4.50 },
     { id: 101, categoryId: 1, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling.', price: 5.99 },
    { id: 102, categoryId: 1, name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 4.50 },
     { id: 101, categoryId: 1, name: 'Spring Rolls', description: 'Crispy rolls with a vegetable filling.', price: 5.99 },
    { id: 102, categoryId: 1, name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 4.50 },
    { id: 201, categoryId: 2, name: 'Grilled Chicken', description: 'Juicy grilled chicken served with a side of vegetables.', price: 12.99 },
    { id: 202, categoryId: 2, name: 'Beef Burger', description: 'Classic beef burger with lettuce, tomato, and cheese.', price: 10.50 },
    { id: 301, categoryId: 3, name: 'Chocolate Lava Cake', description: 'Warm cake with a gooey center.', price: 6.99 },
    { id: 401, categoryId: 4, name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice.', price: 3.00 },
    { id: 501, categoryId: 5, name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing and croutons.', price: 8.99 },
];

function Page() {
    const [activeCategory, setActiveCategory] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState<{ [key: number]: number }>({});
    const router = useRouter();

    const handleAddToOrder = (itemId: number) => {
        setOrder(prevOrder => ({ ...prevOrder, [itemId]: (prevOrder[itemId] || 0) + 1 }));
    };

    const handleRemoveFromOrder = (itemId: number) => {
        setOrder(prevOrder => {
            const newOrder = { ...prevOrder };
            if (newOrder[itemId] > 1) {
                newOrder[itemId] -= 1;
            } else {
                delete newOrder[itemId];
            }
            return newOrder;
        });
    };

    const totalItemsInOrder = Object.values(order).reduce((sum, quantity) => sum + quantity, 0);

    const filteredMenuItems = useMemo(() => {
        return allMenuItems
            .filter(item => item.categoryId === activeCategory)
            .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [activeCategory, searchTerm]);

    return (
        <div className='mx-auto w-[90%] mt-5 relative pb-24'>
            <div>
                <h1 className='text-center text-2xl text-gray-800 font-semibold'>CoCo Vanilla - East legon</h1>
            </div>
            <div className='mt-5'>
                <div>
                    <Image
                        src={Image1}
                        alt='restaurant-image'
                        className='w-full h-auto max-h-[400px] object-cover rounded-lg'
                        priority
                    />
                </div>
            </div>

            {/* --- START: STICKY HEADER --- */}
            <div className='sticky top-0 bg-white z-40 py-4'>
                <div className='mt-4'>
                    <h3 className='text-xl text-gray-800 font-semibold mb-3'>Categories</h3>
                    <div className='flex gap-3 items-center overflow-x-auto whitespace-nowrap py-2 scrollbar-hide'>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                                    activeCategory === cat.id
                                        ? 'bg-[#3B0A45] text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="relative mt-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search menu items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                    />
                </div>
            </div>
            {/* --- END: STICKY HEADER --- */}

            <div className='mt-8'>
                <h3 className='text-xl text-gray-800 font-semibold mb-3'>Menu Items</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredMenuItems.length > 0 ? (
                        filteredMenuItems.map(item => (
                            <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col'>
                                <div className="flex-grow">
                                    <h4 className='text-md font-semibold text-gray-800 mb-1'>{item.name}</h4>
                                    <p className='text-sm text-gray-600 mb-3'>{item.description}</p>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className='text-lg font-bold text-gray-900'>${item.price.toFixed(2)}</span>
                                    <div className="flex items-center gap-2">
                                        {order[item.id] > 0 && (
                                            <>
                                                <button onClick={() => handleRemoveFromOrder(item.id)} className="p-1.5 bg-[#3B0A45] rounded-full text-white">
                                                    <Minus size={16} />
                                                </button>
                                                <span className="font-semibold w-6 text-center">{order[item.id]}</span>
                                            </>
                                        )}
                                        <button onClick={() => handleAddToOrder(item.id)} className="p-1.5 bg-[#3B0A45] rounded-full text-white hover:bg-gray-700">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 md:col-span-2 lg:col-span-3">No menu items found for this category or search.</p>
                    )}
                </div>
            </div>

            {totalItemsInOrder > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                    <button 
                        className="w-full bg-[#3B0A45] text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3  transition-all transform cursor-pointer"
                        onClick={() => router.push('/pages/settings/restaurant/1/details')}
                    >
                        <ShoppingCart size={20} />
                        View Order ({totalItemsInOrder} {totalItemsInOrder > 1 ? 'items' : 'item'})
                    </button>
                </div>
            )}
        </div>
    )
}

export default Page;