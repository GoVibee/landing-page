'use client'

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// A simple SVG icon component for the logo
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-gray-800"
  >
    <path d="M12.001 2.003c-2.338 0-4.533 1.01-6.08 2.68l6.08 6.22 6.08-6.22C16.534 3.013 14.339 2.003 12.001 2.003zM3.73 6.133c-1.127 1.52-.443 3.68.785 5.86l7.486-7.66c-2.03.6-3.95 2.15-5.32 4.35- .79 1.26-1.46 2.5-1.95 3.45zM20.27 6.133c-1.37-2.2-3.29-3.75-5.32-4.35l7.486 7.66c1.228-2.18 1.912-4.34.785-5.86-.49-.95-1.16-2.19-1.95-3.45zM12.001 15.223l-7.408 7.58c5.49 1.41 10.93-1.01 14.816-7.58H12.001z" />
  </svg>
);


const page: NextPage = () => {
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  return (
    <>
      <Head>
        <title>Sign up - Host Dashboard</title>
      </Head>

      <main className="flex min-h-screen w-full flex-col bg-slate-50 font-plus">
        {/* Header */}
        <header className="absolute top-0 left-0 w-full p-6 sm:p-8">
          <div className="flex items-center space-x-2">
            <LogoIcon />
            <h1 className="text-xl font-semibold text-gray-800">Host Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Create account
              </h2>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Restaurant name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    placeholder="restaurant name"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="description"
                    autoComplete="description"
                    required
                    placeholder="description"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    id="location"
                    name="location"
                    type="location"
                    autoComplete="location"
                    required
                    placeholder="location"
                    className="w-full text-sm rounded-md border border-[#E5DBE3] p-3 text-gray-900 placeholder-gray-400 focus:border-[#3B0A45] focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  /> */}
                  {/* <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label> */}
                </div>
              </div>

              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  className="w-full justify-center rounded-md border border-transparent bg-[#3B0A45] py-3 px-4 text-sm font-semibold text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:ring-offset-2 cursor-pointer"
                  onClick={() => router.push('/pages/signin')}
                >
                  Create account
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default page;