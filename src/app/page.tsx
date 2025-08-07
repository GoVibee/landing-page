'use client';

import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Calendar, Star, Compass, BookOpen, Smile, ArrowRight, Download } from 'lucide-react';
import image from '../../assets/1.jpg';
import image1 from '../../assets/2.jpg';
import image2 from '../../assets/3.jpg';
import image3 from '../../assets/4.jpg';
import mobile1 from '../../assets/mobile1.png';
import mobile2 from '../../assets/mobile2.png';
import mobile3 from '../../assets/mobile3.png';
import expereince from '../../assets/experience.jpg';
import Image from 'next/image';

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
};

// Mobile Menu Variants
const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { x: '100%', transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

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
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus"
      >
        Download App
      </motion.button>
      <button className="md:hidden text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
);

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
            Download App
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

// Features Section Component
const features = [
  { icon: Compass, title: 'Restaurant Discovery', description: 'Explore top-rated restaurants with detailed reviews and menus.',image: image1 },
  { icon: MapPin, title: 'Club & Bar Finder', description: 'Find the hottest clubs and bars in your area with real-time availability.',image: image2 },
  { icon: Calendar, title: "Let's Party", description: 'Turn up the vibe and dive into unforgettable nights. From rooftop raves to underground beats, your next party starts here.”.',image: image3 },
  // { icon: Star, title: 'Live Recommendations', description: 'Get personalized recommendations based on your preferences and trending spots.',image: image },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-plus">
          Explore the Best of Your City
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-plus">
          GoVibe lets you discover and book the perfect places for dining, nightlife, and unforgettable moments—wherever your vibe takes you.
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
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="">
                <div className='w-full md:w-[300px] h-72'>
                  <Image 
                    src={feature.image}
                    className="w-full h-full object-cover rounded-3xl"
                    alt='feature'
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 mt-2 font-plus">{feature.title}</h3>
                <p className="text-gray-600 w-[300px] font-plus">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

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


export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ExperienceSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
