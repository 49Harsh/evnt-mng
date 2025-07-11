'use client';

import Link from 'next/link';
import { useState } from 'react';
import EnquiryModal from '@/components/EnquiryModal';

export default function CorporateServices() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Corporate Event Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional event management solutions for your business needs and company celebrations
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
            <span className="text-[#b6810c]">Corporate Events</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Corporate Event Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Our experienced team provides comprehensive event management services for businesses of all sizes. 
              From intimate team gatherings to large-scale conferences, we handle every aspect of your corporate event.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Event Types Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Conferences & Seminars */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Conferences & Seminars</h3>
                <p className="text-gray-600 mb-6">Professional organization of knowledge-sharing events.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Venue selection and setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Speaker coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Audiovisual equipment management</span>
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

            {/* Product Launches */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Product Launches</h3>
                <p className="text-gray-600 mb-6">Memorable events to introduce new products to the market.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creative concept development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Media and PR coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Product showcase design</span>
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

            {/* Team Building */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Team Building</h3>
                <p className="text-gray-600 mb-6">Engaging activities to strengthen team bonds and boost morale.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized activity planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Indoor and outdoor options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Facilitation by expert trainers</span>
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

            {/* Award Ceremonies */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Award Ceremonies</h3>
                <p className="text-gray-600 mb-6">Elegant events to recognize achievements and excellence.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Red carpet setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Award production and management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entertainment coordination</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your corporate events?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our corporate event specialists today to discuss your business needs
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
        serviceType="corporate"
      />
    </div>
  );
} 