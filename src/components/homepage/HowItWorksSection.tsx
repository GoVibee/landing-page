import React from 'react';
import { Smartphone, QrCode,BookOpen,MessageSquare } from 'lucide-react';
import Image from 'next/image'; // For optimized image handling
import mobile1 from '../../../assets/mobile1.png';
import { motion } from 'framer-motion';

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

export const HowItWorksSection = () => {
  const features = [
    {
      number: '01',
      icon: <QrCode size={32} className="text-black" />,
      title: 'Scan & Connect',
      description: 'Scan the restaurant’s QR code with GoVibe to instantly access its menu, details, and reviews.',
    },
    {
      number: '02',
      icon: <BookOpen size={32} className="text-black" />,
      title: 'Explore the Menu',
      description: 'Browse updated dishes with photos, prices, and descriptions — always accurate and fresh.',
    },
    {
      number: '03',
      icon: <Smartphone size={32} className="text-black" />,
      title: 'Place Your Order',
      description: 'Order directly from your phone in just a few taps, skipping the wait for staff.',
    },
    {
      number: '04',
      icon: <MessageSquare size={32} className="text-black" />,
      title: 'Enjoy & Share',
      description: 'Relax while your meal is prepared and share your dining experience with reviews in the app.',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden font-plus">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 font-plus">
          How It Works
        </motion.h2>
      </motion.div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8">
          {/* Left Feature Column */}
          <div className="flex flex-col space-y-12 lg:space-y-16 lg:w-1/3 text-center lg:text-left">
            <FeatureCard data={features[0]} align="right" />
            <FeatureCard data={features[2]} align="right" />
          </div>

          {/* Central Phone Mockup */}
          <div className="relative flex-shrink-0 w-80 h-[560px] lg:w-96 lg:h-[680px] z-10">
            {/* Blue background circle */}
            {/* <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] rounded-full bg-[#3B0A45] z-0 hidden lg:block"></div> */}
            <div className="absolute top-[25%]  w-[100%] h-[55%] rounded-full bg-[#3B0A45]  z-0 hidden lg:flex lg:flex-col lg:justify-center"></div>


            {/* Actual Phone frame */}
            <div className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-[100%] lg:h-[75%] lg:mt-28  pt-6 pb-2 px-3 flex flex-col items-center">
                <Image
                  src={mobile1}
                  alt="App Profile Screen"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          {/* Right Feature Column */}
          <div className="flex flex-col space-y-12 lg:space-y-16 lg:w-1/3 text-center lg:text-left">
            <FeatureCard data={features[1]} align="left" />
            <FeatureCard data={features[3]} align="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Feature Card Component
interface FeatureCardProps {
  data: {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  align: 'left' | 'right'; // For text alignment around the phone
}

function FeatureCard({ data, align }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
      <span className="text-5xl font-extrabold text-gray-200 mb-2">{data.number}</span>
      <div className="flex items-center gap-3 mb-3">
        {data.icon}
        <h3 className="text-xl font-bold text-black">{data.title}</h3>
      </div>
      <p className={`text-gray-600 max-w-xs ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
        {data.description}
      </p>
    </div>
  );
}