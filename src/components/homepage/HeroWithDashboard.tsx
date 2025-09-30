'use client'

import Image from 'next/image'; // For optimized image handling
import image1 from '../../../assets/dashboard1.png';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HeroWithDashboard() {
    const router = useRouter();
    
  return (
    <section className="relative bg-gradient-to-br from-[#F9EEED] to-[#D8D9E2] py-16 md:py-24 overflow-hidden font-plus">
      {/* Radial gradient background effect */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{
             background: 'radial-gradient(circle at 10% 20%, #f0f4f8, transparent 40%), radial-gradient(circle at 90% 80%, #e0e7ff, transparent 40%)'
           }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* "Contact" pill */}

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 max-w-3xl mx-auto">
          Transform Your Restaurant With Our Host Platform
        </h1>

        {/* Call to Action Button */}
        <button
            className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus mx-auto flex items-center gap-3"
            onClick={() => router.push('/pages/host')}
        >
            Get Started
            <div className="bg-white p-1 rounded-3xl">
                <ArrowUpRight color="#3B0A45" size={20}/>
            </div>
        </button>

        {/* Dashboard Mockup Image */}
        <div className="mt-16 relative w-full max-w-5xl mx-auto px-4">
          <Image
            src={image1}
            alt="AI Dashboard Mockup"
            width={1200} 
            height={750} 
            layout="responsive" 
            objectFit="contain" 
            className="rounded-xl shadow-2xl ring-1 ring-gray-200"
          />
        </div>
      </div>
    </section>
  );
}