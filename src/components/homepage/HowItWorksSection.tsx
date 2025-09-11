'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { Search,Smile,BookOpen } from 'lucide-react';

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

// How It Works Section Component
const steps = [
  { icon: Search, title: 'Search', description: 'Find the perfect spot for your night out.' },
  { icon: BookOpen, title: 'Book', description: 'Secure your reservation with ease.' },
  { icon: Smile, title: 'Enjoy', description: 'Experience the best of your city’s nightlife.' },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 font-plus">
          How It Works
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="relative"
      >
        <div className="absolute left-1/2 top-6 h-full w-0.5 bg-gray-200 hidden md:block" />
        {steps.map((step, index) => (
          <motion.div key={index} variants={fadeIn} className={`flex items-center w-full mb-8 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="hidden md:flex w-5/12" />
            <div className="hidden md:flex justify-center w-1/12">
              <div className="w-8 h-8 bg-[#3B0A45] rounded-full shadow-md flex items-center justify-center text-white font-bold">{index + 1}</div>
            </div>
            <div className="w-full md:w-5/12 bg-gray-50 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-3">
                 <div className="bg-purple-100 text-[#3B0A45] w-12 h-12 rounded-full flex items-center justify-center">
                    <step.icon size={24} />
                 </div>
                 <h3 className="text-2xl font-plu font-bold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600 font-plus">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;