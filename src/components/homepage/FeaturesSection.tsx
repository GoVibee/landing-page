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
  { icon: Compass, title: 'Restaurant Discovery', description: 'Explore top-rated restaurants with detailed reviews and menus.',image: image1 },
  { icon: MapPin, title: 'Club & Bar Finder', description: 'Find the hottest clubs and bars in your area with real-time availability.',image: image2 },
  { icon: Calendar, title: "Let's Party", description: 'Turn up the vibe and dive into unforgettable nights. From rooftop raves to underground beats, your next party starts here.”.',image: image3 },
  // { icon: Star, title: 'Live Recommendations', description: 'Get personalized recommendations based on your preferences and trending spots.',image: image },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-plus">
          Explore the Best of Your City
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-plus">
          GoVibe lets you discover and book the perfect places for dining, nightlife, and unforgettable moments—wherever your vibe takes you.
        </motion.p>
      </motion.div>
      <div className=''>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className='flex flex-col items-center'
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="">
                <div className='w-full md:w-[300px] h-72'>
                  <Image 
                    src={feature.image}
                    className="w-full h-full object-cover rounded-3xl"
                    alt='feature'
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 mt-2 font-plus">{feature.title}</h3>
                <p className="text-gray-600 w-[300px] font-plus">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturesSection