'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import image from '../../../assets/1.jpg';

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

// Hero Section Component
const HeroSection = () => (
  <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 text-white overflow-hidden">
    <div className="absolute inset-0">
      <Image src={image} alt="Nightlife" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold font-plus leading-tight mb-4">
          Find Your Vibe Tonight
        </motion.h1>
        <motion.p variants={fadeIn} className="text-lg font-plus md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Discover the best restaurants, bars, clubs, and events in your city. Book a spot, skip the wait, and vibe your night away.
        </motion.p>
        <motion.div variants={fadeIn} className="flex  flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3B0A45] text-white  cursor-pointer px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#3B0A45] transition-transform font-plus"
          >
            <a href='#download'> Download App</a>
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white/30 transition-transform"
          >
            Learn More
          </motion.button> */}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection