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

// Download App Section Component
const DownloadSection = () => (
  <section id="download" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-plus">
          Download The App
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-plus">
          Get started with GoVibe today and unlock the best spots and book unforgettable experiences. in your city.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button className="flex items-center gap-3 bg-black text-white px-6 py-1 rounded-lg font-semibold cursor-pointer ">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
            <div>
              <p className="text-xs font-plus">Download on the</p>
              <p className="text-lg font-bold font-plus">App Store</p>
            </div> */}
             <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Store%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-mzVnx5Nup7Y6MoevDioYCglyFN83fG.png"
              alt="Download on the App Store"
              style={{
                marginBottom: 15
              }}
            
              />
          </motion.button>
          <motion.button className="flex cursor-pointer items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold">
             <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20Play%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-5ip16nv7GXomrgrIDICT4vu5DL5slS.png"
              alt="Get it on Google Play"
              />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);


export default DownloadSection;

