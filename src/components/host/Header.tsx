'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const handleLinkClick = (targetId: string) => {
 
}

const Header = () => {
  const router = useRouter();

 return (
   <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gray-800"
        >
          <span className="text-[#3B0A45]">Go</span>
          <span className="font-plus">Vibe</span>
        </motion.div>
      </button>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => {
            router.push('/pages/signin')
          }}
          className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus cursor-pointer font-bold"
        >
          Login
        </button>
        <button
          onClick={() => {
            router.push('/pages/signup')
          }}
          className="text-gray-600 hover:text-[#3B0A45] transition-colors font-plus cursor-pointer font-bold"
        >
          Get Started
        </button>
      </nav>

      {/* CTA Button */}
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleLinkClick('download')}
        className="hidden md:block bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus"
      >
        Download App
      </motion.button> */}
      <div 
        className='w-20'
      />

      {/* Mobile menu button */}
      <button className="md:hidden text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </header>
 );
}

export default Header
