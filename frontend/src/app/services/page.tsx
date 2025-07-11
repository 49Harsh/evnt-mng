'use client';

import Link from 'next/link';
import { useState } from 'react';
import EnquiryModal from '@/components/EnquiryModal';

export default function Services() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openEnquiryModal = (serviceType: string) => {
    setSelectedService(serviceType);
    setIsEnquiryModalOpen(true);
  };
  
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  const services = [
    {
      title: "Wedding Planning",
      description: "From intimate ceremonies to grand celebrations, we handle every detail of your special day.",
      features: ["Venue Selection", "Vendor Coordination", "Decor & Theme Design", "Timeline Planning"],
      icon: "👰",
      link: "/services/wedding",
      type: "wedding"
    },
    {
      title: "Corporate Events",
      description: "Professional event management for your business needs and company celebrations.",
      features: ["Conferences", "Team Building", "Product Launches", "Award Ceremonies"],
      icon: "💼",
      link: "/services/corporate",
      type: "corporate"
    },
    {
      title: "Social Gatherings",
      description: "Create memorable moments with perfectly planned social events.",
      features: ["Birthday Parties", "Anniversary Celebrations", "Holiday Parties", "Reunions"],
      icon: "🎉",
      link: "/services/social",
      type: "social"
    },
    {
      title: "Private Parties",
      description: "Exclusive event planning for your private celebrations and gatherings.",
      features: ["Dinner Parties", "Cocktail Events", "Garden Parties", "Theme Parties"],
      icon: "🎊",
      link: "/services/private",
      type: "private"
    },
    {
      title: "Cultural Events",
      description: "Celebrate traditions and cultural occasions with authentic touches.",
      features: ["Festival Celebrations", "Cultural Ceremonies", "Traditional Events", "Community Gatherings"],
      icon: "🎭",
      link: "/services/cultural",
      type: "cultural"
    },
    {
      title: "Concert & Shows",
      description: "Technical expertise for entertainment events and performances.",
      features: ["Live Concerts", "Fashion Shows", "Art Exhibitions", "Theater Productions"],
      icon: "🎵",
      link: "/services/concerts",
      type: "concerts"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive event planning and management solutions for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 p-8 rounded-xl backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mt-6 flex space-x-3">
                  <Link 
                    href={service.link} 
                    className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors duration-200 font-medium text-center"
                  >
                    Learn More
                  </Link>
                  <button 
                    onClick={() => openEnquiryModal(service.type)}
                    className="flex-1 py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {[
              {
                step: "1",
                title: "Query Generation",
                description: "Submit your event requirements and preferences."
              },
              {
                step: "2",
                title: "Consultation",
                description: "Discuss your vision and expectations with our team."
              },
              {
                step: "3",
                title: "Planning",
                description: "Detailed event planning and vendor coordination."
              },
              {
                step: "4",
                title: "Follow-Up",
                description: "Ongoing communication and updates before the event."
              },
              {
                step: "5",
                title: "Execution",
                description: "Flawless event execution and management."
              },
              {
                step: "6",
                title: "Evaluation",
                description: "Post-event feedback and evaluation."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#b6810c] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-[#b6810c]">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{process.title}</h3>
                <p className="text-black">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={closeEnquiryModal} 
        serviceType={selectedService}
      />
    </div>
  );
}
