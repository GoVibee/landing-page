'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight} from 'lucide-react';
import mockup from '../../../assets/mobile1.png';


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


const TestimonialsSection = () => {
  return (
     <section className='flex flex-col items-center my-20  md:my-32'>
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-[90%] mx-auto bg-[#3B0A45] rounded-3xl">
           <div className='m-5'>
                   <h2  className="text-3xl md:text-4xl font-bold text-white mb-4 font-plus">
                     Download The App
                   </h2>
                   <p  className="text-md text-gray-300 max-w-2xl mx-auto mb-8 font-plus">
                     Get started with GoVibe today and unlock the best restaurants, explore menus, and book unforgettable dining experiences in your city.
                   </p>
                   <div  className="flex flex-col sm:flex-row items-center gap-6">
                     <button className="flex items-center gap-3 bg-black text-white px-6 py-1 rounded-lg font-semibold cursor-pointer ">
                        <img
                         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App%20Store%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-mzVnx5Nup7Y6MoevDioYCglyFN83fG.png"
                         alt="Download on the App Store"
                         style={{
                           marginBottom: 15
                         }}
                       
                         />
                     </button>
                     <button className="flex cursor-pointer items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold">
                        <img
                         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20Play%20%E8%8B%B1%E6%96%87%20%E9%BB%91%E8%89%B2-5ip16nv7GXomrgrIDICT4vu5DL5slS.png"
                         alt="Get it on Google Play"
                         />
                     </button>
                   </div>
                 </div>
          <div className="mb-5 md:mb-0 mx-auto md:mx-0 w-[60%] md:w-[100%] lg:w-[20%] p-4  rounded-3xl md:m-7">
            <Image
              src={mockup}
              className='w-full object-contain rounded-xl'
              priority
              alt="features"
            />
          </div>
            
          </div>
       </section>
  )
}

export default TestimonialsSection;

