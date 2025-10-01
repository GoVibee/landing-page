'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Compass,MapPin,Calendar } from 'lucide-react';
import expereince from '../../../assets/experience.jpg';
import { useRouter } from 'next/navigation';


// Footer Component
const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-100">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-500">&copy; 2025 GoVibe. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* <a href="#" className="text-gray-500 hover:text-[#3B0A45]">About</a> */}
          <Link href="/pages/about" className="text-gray-500 hover:text-[#3B0A45]">About</Link>
          <Link href="/pages/privacy" className="text-gray-500 hover:text-[#3B0A45]">Privacy</Link>
          <Link href="/pages/privacy" className="text-gray-500 hover:text-[#3B0A45]">Terms</Link>
          <Link href="/pages/contact" className="text-gray-500 hover:text-[#3B0A45]">Contact Us</Link>
          
        </div>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
