import React from 'react'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'

function page() {
  return (
    <div className='bg-white  min-h-screen flex flex-col font-plus'>
      <Header />
     <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 mb-12 border-b pb-8">
            <p className="lead !text-xl !text-gray-800">Welcome to GoVibe!</p>
            <p>
              GoVibe (“we,” “our,” or “us”) operates a platform that connects people (“Users”) with restaurants, bars, clubs, and venues (“Hosts”) to discover great dining and nightlife experiences.
            </p>
            <p>
              This document explains how we handle your information (Privacy Policy) and sets the rules for using our services (Terms of Service). By signing up or using GoVibe or GoVibe Host, you agree to these terms.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            {/* Section 1 */}
            <h2 id="collection" className='font-bold text-xl'>1. Information We Collect</h2>
            <div>
              <h3> We collect information in two ways: </h3>
              <div>
                <h4 className="mt-3 font-bold">From Users (GoVibe App):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                    Account details (name, email, phone number, password)
                  </li>
                  <li className="text-gray-700">
                    Profile preferences (favorite cuisines, saved spots)
                  </li>
                  <li className="text-gray-700">
                    Booking information (reservations, orders, or event sign-ups)
                  </li>
                  <li className="text-gray-700">
                    Payment information (if you make reservations or pay through the app)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mt-3 font-bold">From Hosts (GoVibe Host Dashboard):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                    Business details (restaurant/venue name, address, menu, opening hours)
                  </li>
                  <li className="text-gray-700">
                    Contact details (owner/manager name, email, phone)
                  </li>
                  <li className="text-gray-700">
                    Uploaded content (photos, descriptions, promotions,videos)
                  </li>
                  <li className="text-gray-700">
                    Payment information (if you make reservations or pay through the app)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mt-3 font-bold">Automatically Collected Data (both Users & Hosts):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                    Device info, IP address, browser type, OS.
                  </li>
                  <li className="text-gray-700">
                    Usage data (features used, pages visited, clicks).
                  </li>
                  <li className="text-gray-700">
                   Cookies and tracking data.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <h2 id="usage" className="mt-10 font-bold text-xl">2. How We Use Information We Collect</h2>
            <div>
                <h4 className="mt-3 font-bold">We use your information to:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                    Provide, operate, and improve GoVibe and GoVibe Host.
                  </li>
                  <li className="text-gray-700">
                    Enable Users to discover and book experiences.
                  </li>
                  <li className="text-gray-700">
                    Allow Hosts to manage their business profiles and accept reservations.
                  </li>
                  <li className="text-gray-700">
                   Process payments securely.
                  </li>
                  <li className="text-gray-700">
                    Send important updates, promotional offers, and service notices.
                  </li>
                  <li className="text-gray-700">
                    Ensure platform security and prevent fraud
                  </li>
                </ul>
              </div>
            {/* Section 3 */}
            <h2 id="sharing">3. Information We Share</h2>
            <p>
              We do not share personal information with companies, organizations, and individuals outside of GoVibe unless one of the following circumstances applies:
            </p>
            <h3>With Your Consent</h3>
            <p>
              We will share personal information with companies, organizations, or individuals outside of GoVibe when we have your consent to do so.
            </p>
            <h3>For External Processing</h3>
            <p>
              We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.
            </p>

            {/* Section 4 */}
            <h2 id="rights">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your information. To exercise these rights, please contact us at privacy@govibe.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page