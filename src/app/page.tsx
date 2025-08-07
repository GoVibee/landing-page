'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Calendar, Star, Compass, BookOpen, Smile, ArrowRight, Download } from 'lucide-react';

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gray-800">
        <span className="text-purple-600">Go</span>Vibe
      </motion.div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
        <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
        <a href="#download" className="text-gray-600 hover:text-purple-600 transition-colors">Download App</a>
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors"
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
      <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80" alt="Nightlife" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Find Your Vibe Tonight
        </motion.h1>
        <motion.p variants={fadeIn} className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Discover the best restaurants, bars, clubs, and events in your city. Book a spot, skip the wait, and vibe your night away.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-purple-700 transition-transform"
          >
            Download App
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white/30 transition-transform"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Features Section Component
const features = [
  { icon: Compass, title: 'Restaurant Discovery', description: 'Explore top-rated restaurants with detailed reviews and menus.' },
  { icon: MapPin, title: 'Club & Bar Finder', description: 'Find the hottest clubs and bars in your area with real-time availability.' },
  { icon: Calendar, title: 'Event Booking', description: 'Book tickets for exclusive events and parties directly through the app.' },
  { icon: Star, title: 'Live Recommendations', description: 'Get personalized recommendations based on your preferences and trending spots.' },
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
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore the Best of Your City
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          GoVibe helps you discover and book the best nightlife experiences.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
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
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
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
              <div className="w-8 h-8 bg-purple-600 rounded-full shadow-md flex items-center justify-center text-white font-bold">{index + 1}</div>
            </div>
            <div className="w-full md:w-5/12 bg-gray-50 rounded-2xl p-6 shadow">
              <div className="flex items-center gap-4 mb-3">
                 <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <step.icon size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
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
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          User Testimonials
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-purple-200" />
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          </motion.div>
        ))}
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
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Download The App
        </motion.h2>
        <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Get started with GoVibe today and unlock the best nightlife experiences in your city.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
            <div>
              <p className="text-xs">Download on the</p>
              <p className="text-lg font-bold">App Store</p>
            </div>
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 11.45l2.22-2.34A2.22 2.22 0 0 1 9.78 8.5h4.44a2.22 2.22 0 0 1 1.56.61L18 11.45V21H6Z"/><path d="M12 3v5.5"/><path d="m10 3-2 2.5"/><path d="m14 3 2 2.5"/></svg>
            <div>
              <p className="text-xs">GET IT ON</p>
              <p className="text-lg font-bold">Google Play</p>
            </div>
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
          <a href="#" className="text-gray-500 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-500 hover:text-purple-600">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-purple-600">Terms</a>
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
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
