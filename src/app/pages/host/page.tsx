'use client';

import React,{useState} from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/host/Header';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import dashboard from '../../../../assets/dashboard1.png';
import FeaturesSection from '@/components/host/FeaturesSection';
import orders from '../../../../assets/orders.png';
import orderscreen from '../../../../assets/orderscreen.png';
import review from '../../../../assets/review.png';
import analytics from '../../../../assets/analytics1.png';
import { useRouter } from 'next/navigation';
import Footer from '../../../components/homepage/Footer';
import { colors } from '@/constants/colors';




export default function page() {
  const router = useRouter();

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
                className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus mx-auto flex items-center gap-3"
                onClick={() => router.push('/pages/signups')}
              >
                Get Started
                <div className="bg-white p-1 rounded-3xl">
                  <ArrowUpRight color="#3B0A45" size={20}/>
                </div>
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
            <div className='w-[80%] p-5 bg-purple-100 mx-auto rounded-4xl'>
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
                className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus mx-auto flex items-center gap-3"
                onClick={() => router.push('/pages/signup')}
              >
                Get Started
                <div className="bg-white p-1 rounded-3xl">
                  <ArrowUpRight color="#3B0A45" size={20}/>
                </div>
              </button> 
            </div>
          </div>
        </section>
        <FeaturesSection />
       <section className='flex flex-col items-center mt-32'>
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[80%] mx-auto">
          <div>
            <h3 className="text-gray-900 text-3xl font-plus font-bold">Order Management System</h3>
            <p className="text-md font-plus md:text-lg max-w-xl mx-auto mb-8 text-gray-500">Streamline orders from kitchen to customer without delays.</p>
          </div>
          <div className="w-full md:w-[100%] lg:w-[50%] p-5 bg-purple-100 rounded-3xl">
            <Image
              src={orders}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
        </div>
       </section>

       <section className='flex flex-col items-center mt-32'>
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[80%] mx-auto">
          <div className="w-full md:w-[100%] lg:w-[55%] bg-[#F6F5FA] rounded-3xl mb-10 md:mb-0">
            <Image
              src={orderscreen}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
          <div>
            <h3 className="text-gray-900 text-3xl font-plus font-bold">Scan & Explore</h3>
            <p className="text-md font-plus md:text-lg max-w-xl mx-auto mb-8 text-gray-500">Scan to explore menus, reviews, and details instantly in the GoVibe app.</p>
          </div>
        </div>
       </section>

       <section className='flex flex-col items-center mt-20  md:mt-32'>
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[80%] mx-auto">
          <div>
            <h3 className="text-gray-900 text-3xl font-plus font-bold">Customer Feedback</h3>
            <p className="text-md font-plus md:text-lg max-w-xl mx-auto mb-8 text-gray-500">Collect ratings and reviews to understand customer satisfaction and improve service</p>
           
          </div>
          <div className="w-full lg:w-[50%] p-4 bg-purple-100 rounded-3xl m-7">
            <Image
              src={review}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
            
          </div>
       </section>
       <section className='flex flex-col items-center my-20  md:my-32'>
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[90%] mx-auto bg-[#3B0A45] rounded-3xl">
           <div className='pl-5 pt-5 md:py-5 lg:py-0'>
            <h3 className="text-white text-3xl font-plus font-bold">Ready to transform your business?</h3>
            <p className="text-md font-plus md:text-sm max-w-xl mx-auto mb-8 text-white mt-3">Digitize your menu, streamline orders, and boost revenue with GoVibe Host.</p>
            <button
                className="bg-[#ffffff] cursor-pointer text-[#3B0A45] px-6 py-2 rounded-full font-semibold shadow-lg  transition-colors font-plus flex items-center gap-3"
                onClick={() => router.push('/pages/signup')}
              >
                Get Started
                <div className="bg-[#3B0A45] p-1 rounded-3xl">
                  <ArrowUpRight color="white" size={20}/>
                </div>
              </button> 
          </div>
          <div className="w-full md:w-[100%] lg:w-[50%] p-4 bg-purple-100 rounded-3xl m-7">
            <Image
              src={analytics}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
            
          </div>
       </section>
        
      </main>
      <Footer />
    </div>
  );
}
