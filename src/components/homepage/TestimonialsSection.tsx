'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass,MapPin,Calendar } from 'lucide-react';
import mobile1 from '../../../assets/mobile1.png';
import mobile2 from '../../../assets/mobile2.png';
import mobile3 from '../../../assets/mobile3.png';

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

// Testimonials Section Component
const testimonials = [
  { name: 'Sophia K.', quote: 'GoVibe has completely transformed my nightlife! I’ve discovered so many hidden gems, and booking is a breeze.', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Ethan M.', quote: 'I love the live recommendations feature. It’s like having a personal nightlife guide in my pocket.', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Olivia J.', quote: 'The app is so easy to use, and I’ve never had a bad experience with any of the venues I’ve booked through GoVibe.', image: 'https://i.pravatar.cc/150?img=3' },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-purple-100">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 font-plus">
          User Friendly Mobile App
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 w-[80%] mx-auto">
        <motion.div variants={fadeIn} className="">
              <Image 
                src={mobile1}
                className="w-[450px] h-[450px] object-contain rounded-3xl"
                alt='feature'
                priority
              />  
              </motion.div>
               <motion.div variants={fadeIn} className="">
              <Image 
                src={mobile2}
                className="w-[450px] h-[450px] object-contain rounded-3xl"
                alt='feature'
                priority
              />
              </motion.div>
               <motion.div variants={fadeIn} className="">
              <Image 
                src={mobile3}
                className="w-[450px] h-[450px] object-contain rounded-3xl"
                alt='feature'
                priority
              />
                  
              </motion.div>
       
      </div>
        
      </motion.div>
     
    </div>
  </section>
);

export default TestimonialsSection;

