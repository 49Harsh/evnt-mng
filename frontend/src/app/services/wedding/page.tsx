'use client';

import Link from 'next/link';
import { useState } from 'react';
import EnquiryModal from '@/components/EnquiryModal';

export default function WeddingServices() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Wedding Planning Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Creating unforgettable wedding experiences tailored to your unique style and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#b6810c]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services" className="text-gray-500 hover:text-[#b6810c]">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#b6810c]">Wedding Planning</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Weddings We Specialize In</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Our expert team specializes in crafting personalized wedding experiences that reflect your unique love story. 
              From traditional ceremonies to themed celebrations, we offer comprehensive planning services for all types of weddings.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Types Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Traditional Wedding */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Traditional Wedding</h3>
                <p className="text-gray-600 mb-6">Cultural rituals and ceremonies passed down generations.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cultural ceremony coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Traditional attire assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Religious venue selection</span>
                  </li>
                </ul>
                <button 
                  onClick={openEnquiryModal}
                  className="w-full py-3 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>

            {/* Same Day Wedding */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Same Day Wedding</h3>
                <p className="text-gray-600 mb-6">Quick and efficient wedding, all wrapped up in one day.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Streamlined planning process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ceremony and reception coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>On-the-day management</span>
                  </li>
                </ul>
                <button 
                  onClick={openEnquiryModal}
                  className="w-full py-3 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>

            {/* Destination Wedding */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Destination Wedding</h3>
                <p className="text-gray-600 mb-6">A special celebration at a beautiful location away from home.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Venue selection worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Travel and accommodation arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Local vendor coordination</span>
                  </li>
                </ul>
                <button 
                  onClick={openEnquiryModal}
                  className="w-full py-3 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>

            {/* Themed Wedding */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Themed Wedding</h3>
                <p className="text-gray-600 mb-6">Weddings with a creative theme like vintage, royal, or beach.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom theme design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Themed decoration and styling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unique entertainment options</span>
                  </li>
                </ul>
                <button 
                  onClick={openEnquiryModal}
                  className="w-full py-3 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to plan your perfect wedding?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our wedding planning specialists today to start discussing your special day
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={openEnquiryModal}
              className="py-3 px-8 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
            >
              Submit Enquiry
            </button>
            <Link href="/services" className="py-3 px-8 bg-white border border-gray-300 hover:border-[#b6810c] text-gray-800 rounded-md transition-colors duration-200 font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={closeEnquiryModal} 
        serviceType="wedding"
      />
    </div>
  );
} 