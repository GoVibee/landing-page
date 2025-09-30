'use client';

import React,{useState} from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/homepage/Header';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import {HowItWorksSection} from '@/components/homepage/HowItWorksSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import ExperienceSection from '@/components/homepage/ExperienceSection';
import DownloadSection from '@/components/homepage/DownloadSection';
import Footer from '@/components/homepage/Footer';
import { HeroWithDashboard } from '@/components/homepage/HeroWithDashboard';


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


export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <HeroWithDashboard />
        <TestimonialsSection />
        {/* <ExperienceSection />
        <DownloadSection /> */}
      </main>
      <Footer />
    </div>
  );
}
