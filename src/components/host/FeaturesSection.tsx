'use client'

import React from 'react';
import { ShoppingCart, BookOpen, BarChart3, ChevronRight } from 'lucide-react';
import image1 from '../../../assets/2.jpg';
import image2 from '../../../assets/3.jpg';
import image3 from '../../../assets/3.jpg';

const features = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Smart Menu Management',
    description:
      'Update your menu anytime with photos, prices, and descriptions. Customers see changes instantly, no printing required',
    image: image1,
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'Instant Orders',
    description:
      'Receive customer orders directly from their phones without waiters, reducing delays and errors.',
    image: image2,
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Get insights on top-selling dishes, busiest hours, and revenue trends to make smarter decisions.',
    image: image3,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const isSecond = feature.id === 2;

              return (
                <div
                  key={index}
                  className={`
                    group p-10 relative rounded-4xl transition-all duration-300 shadow-2xl
                    ${isSecond ? 'bg-[#3B0A45] text-white' : 'bg-gray-100 text-gray-800'}
                    ${isSecond
                      ? 'hover:bg-gray-100 hover:text-gray-800'
                      : 'hover:bg-[#3B0A45] hover:text-white'}
                  `}
                >
                  <feature.icon
                    className={`
                      w-10 h-10 mb-4 transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-[#3B0A45]' : 'text-[#3B0A45] group-hover:text-white'}
                    `}
                  />

                  <h3
                    className={`
                      text-xl font-bold mb-1 mt-2 font-plus transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-gray-800' : 'text-gray-800 group-hover:text-white'}
                    `}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`
                      text-[15px] py-3 font-plus opacity-80 transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-gray-600' : 'text-gray-600 group-hover:text-white'}
                    `}
                  >
                    {feature.description}
                  </p>

                  <div className="absolute bottom-4 flex gap-2 items-center cursor-pointer">
                    <p
                      className={`
                        transition-colors duration-300
                        font-semibold
                        ${isSecond ? 'text-white group-hover:text-gray-800' : 'text-gray-800 group-hover:text-white'}
                      `}
                    >
                      Explore
                    </p>
                    <ChevronRight
                      className={`
                        transition-colors duration-300
                        ${isSecond ? 'text-white group-hover:text-[#3B0A45]' : 'text-[#3B0A45] group-hover:text-white'}
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
