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
            <h2 id="usage" className="mt-10 font-bold text-xl">2. How We Use Information</h2>
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
            <h2 id="sharing" className="mt-10 font-bold text-xl">3. Sharing of Information</h2>
            <div>
                <h4 className="mt-3 font-bold">We do not sell your personal data. We may share it only:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                   With other Users or Hosts (restaurant profiles, menus, booking confirmations).
                  </li>
                  <li className="text-gray-700">
                    With service providers (hosting, payment processors, analytics tools).
                  </li>
                  <li className="text-gray-700">
                    For legal compliance (if required by law, regulation, or legal process).
                  </li>
                  <li className="text-gray-700">
                   Process payments securely.
                  </li>
                  <li className="text-gray-700">
                   During a business transfer (merger, acquisition, restructuring).
                  </li>
                </ul>
              </div>

            {/* Section 4 */}
            <h2 id="rights" className="mt-10 font-bold text-xl">4. Data Security</h2>
            <div>
                <h4 className="mt-3 font-bold">We use encryption, access controls, and other safeguards to protect your information. Still, no system is 100% secure. Please protect your password and account details</h4>
                
            </div>

            {/* Your rights*/}
             <h2 id="usage" className="mt-10 font-bold text-xl">5. Your rights</h2>
            <div>
                <h4 className="mt-3 font-bold">You may have rights under applicable law to:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">
                    Access the personal information we hold about you.
                  </li>
                  <li className="text-gray-700">
                    Request corrections or deletion.
                  </li>
                  <li className="text-gray-700">
                    Restrict or object to processing.
                  </li>
                  <li className="text-gray-700">
                   Export your data (data portability)
                  </li>
                </ul>
                 <h4 className="mt-3 font-bold">Requests can be sent to [support@govibe.com].</h4>
              </div>

              {/* Retention of data*/}
              <h2 id="usage" className="mt-10 font-bold text-xl">6. Retention Of Data</h2>
              <div>
                <h4 className="mt-3 font-bold">We retain your data while your account is active. If you delete your account, some data may be kept for legal or business reasons.</h4>
              </div>

              {/* Children's Privacy*/}
              <h2 id="usage" className="mt-10 font-bold text-xl">7. Children's Privacy</h2>
              <div>
                <h4 className="mt-3 font-bold">GoVibe and GoVibe Host are not directed at individuals under 18. We do not knowingly collect data from minors.</h4>
              </div>

              {/*Changes To Policy */}
              <h2 id="usage" className="mt-10 font-bold text-xl">8. Changes To Policy</h2>
              <div>
                <h4 className="mt-3 font-bold">We may update this Privacy Policy at any time. Updates will be posted here with a new “Last Updated” date.</h4>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page