'use client';

import React,{useState} from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/host/Header';
import mobile from '../../../../assets/mobile1.png';
import Image from 'next/image';
import dashboard from '../../../../assets/dashboard1.png';
import Footer from '@/components/homepage/Footer';
import FeaturesSection from '@/components/host/FeaturesSection';
import { colors } from '@/constants/colors';



export default function page() {
  return (
    <div className="bg-white">
      <Header />
      <main className=''>
        <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-6 text-center relative">
            <div>
              <h1 className={`text-2xl text-gray-900 md:text-6xl font-bold font-plus leading-tight mb-4 w-[80%] mx-auto`}>
                Your Venue. Your Menu. Your Customers. All in One Place.
              </h1>
              <p  className="text-md font-plus md:text-lg max-w-xl mx-auto mb-8 text-gray-600">
                From menus to orders, GoVibe Host gives you the tools to serve customers better.
              </p>
              <button
                className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus mx-auto"
              >
                Get Started
              </button> 
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-10 ">
          <div  className='flex items-center'>
            {/* <div className='bg-purple-100 w-[500px] pt-20 rounded-2xl'>
              <Image 
                  src={mobile}
                  className="w-[450px] h-[450px] object-contain rounded-3xl"
                  alt='feature'
                  priority
                />
            </div> */}
            <div className=' w-[80%] p-5 bg-purple-100 mx-auto rounded-4xl'>
                <Image 
                    src={dashboard}
                    className="w-full object-contain rounded-4xl"
                    alt='feature'
                    priority
                  />
              </div>
          </div>
        </section>
       <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-6 text-center relative">
            <div>
              <h1 className={`text-xl text-gray-900 md:text-5xl font-bold font-plus leading-tight mb-4 w-[80%] mx-auto`}>
                Our features unlocking potential
              </h1>
              <p  className="text-md font-plus md:text-lg max-w-xl mx-auto mb-8 text-gray-600">
                Empowering you with tools that unlock your full potential
              </p>
              <button
                className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-2xl hover:bg-[#3B0A45] transition-colors font-plus mx-auto"
              >
                Get Started
              </button> 
            </div>
          </div>
        </section>
        <FeaturesSection />
        
      </main>
      {/* <Footer /> */}
    </div>
  );
}
