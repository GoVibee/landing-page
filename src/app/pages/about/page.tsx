'use client';

import  Header  from '../../../components/about/Header';
import { Hero } from '../../../components/about/Hero';
import { Features } from '../../../components/about/Features';
import  Footer  from '../../../components/homepage/Footer';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import review from '../../../../assets/review.png';

export default function HomePage() {
  return (
    <div className="bg-gray-50/50">
      <Header />
      <main>
        <Hero />
        
        {/* Our Vision Section */}
        <section className="py-20 bg-white font-plus">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              At GoVibe, we envision a world where dining and nightlife experiences are seamless, personalized, and enriched by technology. We strive to connect guests and venues in a modern, contactless way, enhancing every interaction from discovery to payment.
            </p>
          </div>
        </section>

        <Features />
          <section className='flex flex-col items-center my-20  md:my-32'>
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[90%] mx-auto bg-[#3B0A45] rounded-3xl">
           <div className='pl-5 pt-5 md:py-5 lg:py-0'>
            <h3 className="text-white text-3xl font-plus font-bold">Ready to transform your business?</h3>
            <p className="text-md font-plus md:text-sm max-w-xl mx-auto mb-8 text-white mt-3">Digitize your menu, streamline orders, and boost revenue with GoVibe Host.</p>
            <button
                className="bg-[#ffffff] cursor-pointer text-[#3B0A45] px-6 py-2 rounded-full font-semibold shadow-lg  transition-colors font-plus flex items-center gap-3"
              >
                Get Started
                <div className="bg-[#3B0A45] p-1 rounded-3xl">
                  <ArrowUpRight color="white" size={20}/>
                </div>
              </button> 
          </div>
          <div className="w-full md:w-[100%] lg:w-[50%] p-4 bg-purple-100 rounded-3xl m-7">
            <Image
              src={review}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
            
          </div>
       </section>
        {/* <Story /> */}
      </main>
      <Footer />
    </div>
  );
}