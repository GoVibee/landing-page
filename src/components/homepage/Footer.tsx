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


// Footer Component
const Footer = () => (
  <footer className="bg-gray-100 border-t">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-500">&copy; 2025 GoVibe. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* <a href="#" className="text-gray-500 hover:text-[#3B0A45]">About</a> */}
          <a href="#" className="text-gray-500 hover:text-[#3B0A45]">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-[#3B0A45]">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
