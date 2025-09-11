'use client'

import React from 'react'
import { motion } from 'framer-motion';

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

// Header Component
const Header = () => (

  <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href='#'>
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gray-800">
          <span className="text-[#3B0A45]">Go</span><span className='font-plus'>Vibe</span>
        </motion.div>
      </a>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus">Home</a>
        <a href="#features" className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus">How It Works</a>
        <a href="#download" className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus">Download App</a>
        <a href="#download" className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus">Become a Host</a>
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus"
      >
         <a href='#download'> Download App</a>
      </motion.button>
      <button className="md:hidden text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;