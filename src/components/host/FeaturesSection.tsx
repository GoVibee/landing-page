'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass,MapPin,Calendar } from 'lucide-react';
import image1 from '../../../assets/2.jpg';
import image2 from '../../../assets/3.jpg';
import image3 from '../../../assets/3.jpg';

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}


// Features Section Component
const features = [
  { id:1,icon: Compass, title: 'Restaurant Discovery', description: 'Explore top-rated restaurants with detailed reviews and menus.',image: image1},
  { id:2,icon: MapPin, title: 'Club & Bar Finder', description: 'Find the hottest clubs and bars in your area with real-time availability.',image: image2},
  { id:3,icon: Calendar, title: "Let's Party", description: 'Turn up the vibe and dive into unforgettable nights. From rooftop raves to underground beats, your next party starts here.”.',image: image3},
  // { icon: Star, title: 'Live Recommendations', description: 'Get personalized recommendations based on your preferences and trending spots.',image: image },
];

const FeaturesSection = () => (
  <section id="features" className="">
    <div className="container mx-auto px-6">
      <div className=''>
        <div
          className='flex flex-col items-center'
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.id == 2 ? "bg-[#3B0A45] text-white" : "bg-gray-50"} p-10 relative rounded-4xl`}
              >
                <h3 className={`${feature.id == 2 ? 'text-white' : 'text-gray-800'} text-xl font-bold  mb-1 mt-2 font-plus`}>
                  {feature.title}
                </h3>
                <p className={`${feature.id == 2 ? 'text-white' : 'text-gray-600' } w-[300px] font-plus`}>{feature.description}</p>
                <div className="absolute bottom-1">
                  <p>Explore</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection