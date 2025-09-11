'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass,MapPin,Calendar } from 'lucide-react';
import expereince from '../../../assets/experience.jpg';

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

// Experience Section Component
const ExperienceSection = () => (
  <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 text-white overflow-hidden mt-40">
    <div className="absolute inset-0">
      <Image src={expereince} alt="Nightlife" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold font-plus leading-tight mb-4">
          Experience The Best of Your City's nightlife
        </motion.h1>
        {/* <motion.p variants={fadeIn} className="text-lg font-plus md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Discover the best restaurants, bars, clubs, and events in your city. Book a spot, skip the wait, and vibe your night away.
        </motion.p> */}
        <motion.div variants={fadeIn} className="flex  flex-col sm:flex-row justify-center items-center gap-4">
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;