"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // <-- IMPORT useRouter
import {Eye, EyeOff, User, LogIn} from 'lucide-react';
import Image1 from '../../../../assets/hero-3.jpg';
import { Oval } from 'react-loader-spinner';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-toastify';


export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading,setLoading] = useState(false);
  const {Login,SignUp} = useAuth();
  const router = useRouter(); // <-- INITIALIZE useRouter

  const [formdata,setFormdata] = useState({
    email: '',
    password: ''
  });


  // Function to handle form submission
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault(); 
    if (!isLoginView) {
      const data = await Login(formdata)
      if(data.manager){
        setLoading(false);
        setTimeout(() => {
          router.push('/pages/dashboard')
        },400)
      }else {
        toast.error(data.message)
        setLoading(false)
      }
    } else {
      const data = await SignUp(formdata)
      if(data.manager){
        setLoading(false);
        toast.success('Account created')
        setTimeout(() => {
          router.push('/pages/restaurant')
        },400)
      }else {
        toast.error(data.message)
        setLoading(false)
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-plus">
      <div className="w-full max-w-6xl flex  overflow-hidden">
        
        {/* Left Column: Testimonial */}
        <div className="hidden lg:block w-1/2 relative">
          {/* ... (testimonial content remains the same) */}
          <Image
            src={Image1}
            alt="Luxury villa"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 text-white">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <p className="text-lg mb-6">
                "GoVibe helps us reach a new generation of diners. The platform is intuitive, and managing our profile, menu, and bookings has never been easier."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Auth Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
           <div className="flex justify-end mb-6">
            <div className="flex items-center text-sm border border-gray-200 rounded-full p-1">
              <button
                onClick={() => setIsLoginView(false)}
                className={`px-4 py-1 rounded-full transition-colors ${!isLoginView ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-500'}`}
              >
                <LogIn size={16} className="inline mr-1" />
                Login
              </button>
              <button
                onClick={() => setIsLoginView(true)}
                className={`px-4 py-1 rounded-full transition-colors ${isLoginView ? 'bg-purple-100 text-[#3B0A45] font-semibold' : 'text-gray-500'}`}
              >
                <User size={16} className="inline mr-1" />
                Sign Up
              </button>
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLoginView ? 'Create your account' : 'Welcome Back!'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isLoginView ? 'Please enter your details to create an account.' : 'Please enter your details to sign in.'}
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}> {/* <-- ATTACH handleSubmit */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email address" 
                value={formdata.email}
                onChange={(e) => setFormdata({...formdata,email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]" 
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"  
                className="block text-sm font-medium text-gray-700 mb-1"
              >Password</label>
              <input 
                type={passwordVisible ? "text" : "password"} 
                id="password" 
                placeholder="Enter your password" 
                value={formdata.password}
                onChange={(e) => setFormdata({...formdata,password:e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]" 
                required 
              />
              <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-10 text-gray-500">
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button type="submit" className="w-full cursor-pointer bg-[#3B0A45] text-white font-semibold py-3 rounded-l transition-colors">
              {loading ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                            <Oval
                                                              visible={true}
                                                              height="30"
                                                              width="30"
                                                              color="#ffffff"
                                                              wrapperStyle={{}}
                                                              wrapperClass=""
                                                            />
                                                          </div> : isLoginView ? 'Continue': 'Sign in' }
              {/* {isLoginView ? 'Continue' : 'Sign in'} */}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            {isLoginView ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-gray-800 hover:underline ml-1">
              {isLoginView ? 'Sign in' : 'Sign up '}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}