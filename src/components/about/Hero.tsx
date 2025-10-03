'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import image1 from '../../../assets/hero1.jpg';

export function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white font-plus mt-32">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl mx-4 my-2"
        style={{ backgroundImage:  `url(${image1.src})`}}
      >
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About GoVibe</h1>
        <p className="text-lg md:text-lg font-semibold mb-8">
          GoVibe is a smart dining and nightlife companion that helps users discover restaurants and place orders seamlessly.
        </p>
         <button
                        className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus mx-auto flex items-center gap-3"
                      >
                        Get Started
                        <div className="bg-white p-1 rounded-3xl">
                          <ArrowUpRight color="#3B0A45" size={20}/>
                        </div>
                      </button> 
      </div>
    </section>
  );
}