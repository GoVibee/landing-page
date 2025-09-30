'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone,BookOpen,BarChart3,QrCode} from 'lucide-react';


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
  {
    id: 1,
    icon: QrCode,
    title: 'Scan & Discover',
    description:
      'Simply scan a restaurant’s QR code to unlock its menu, details, and reviews instantly.'
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Digital Menus Made Easy',
    description:
      'Browse updated menus with photos, prices, and descriptions — always accurate, always fresh.'
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Order from Your Phone',
    description:
      'Skip the wait for staff. Place your order directly through the app in just a few taps.'
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50 mt-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-plus">
          Experience Dining the Smarter Way
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-plus">
          Smart dining made effortless, right from your phone
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
            {features.map((feature, index) => {
              const isSecond = feature.id === 2;

              return (
                <motion.div
                  key={index}
                  className={`
                    group p-10 relative rounded-4xl transition-all duration-300 shadow-2xl
                    ${isSecond ? 'bg-[#3B0A45] text-white' : 'bg-gray-100 text-gray-800'}
                    ${isSecond
                      ? 'hover:bg-gray-100 hover:text-gray-800'
                      : 'hover:bg-[#3B0A45] hover:text-white'}
                  `}
                  variants={fadeIn}
                >
                  <feature.icon
                    className={`
                      w-10 h-10 mb-4 transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-[#3B0A45]' : 'text-[#3B0A45] group-hover:text-white'}
                    `}
                  />

                  <h3
                    className={`
                      text-xl font-bold mb-1 mt-2 font-plus transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-gray-800' : 'text-gray-800 group-hover:text-white'}
                    `}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`
                      text-[15px] py-3 font-plus opacity-80 transition-colors duration-300
                      ${isSecond ? 'text-white group-hover:text-gray-600' : 'text-gray-600 group-hover:text-white'}
                    `}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturesSection