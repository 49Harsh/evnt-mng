'use client';

import { type ReactElement } from 'react';
import Link from "next/link";

export default function Home(): ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section fix - remove any direct Image component usage */}
      <section className="relative h-[90vh] flex items-center justify-center bg-white ">
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
    
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Sparkle & Shine{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    A Night of Glitz and Glamour
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Elevate Your Evening with an Unforgettable Experience
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Contact Us →
                </Link>
                
                <Link 
                  href="/about"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right side - Professional speaker scene */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[3/4] bg-gradient-to-b from-gray-700/20 to-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden relative">
                  {/* Simulated professional speaker */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-44 bg-gradient-to-t from-white/15 to-white/5 rounded-t-full"></div>
                  
                  {/* Simulated audience in background */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/8 to-transparent"></div>
                  
                  {/* Stage lighting effects */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-400/10 to-transparent"></div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-12 right-12 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-24 left-8 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-36 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute top-32 right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-2xl blur-xl -z-10"></div>
              </div>
              
              {/* Floating glamour elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-bounce delay-500 opacity-80"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section - Dark theme */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Premium</span> Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Glamorous Events",
                description: "Create spectacular evenings filled with elegance and sophistication",
                icon: "✨",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "VIP Experiences",
                description: "Exclusive high-end events tailored for distinguished guests",
                icon: "👑",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "Corporate Galas",
                description: "Professional networking events with a touch of luxury and style",
                icon: "🥂",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((service, index) => (
              <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl backdrop-blur-sm border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className={`mt-4 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark theme */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Sparkle & Shine</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Luxury Excellence",
                description: "Premium event experiences with attention to every detail",
                icon: "💎"
              },
              {
                title: "Glamorous Touch",
                description: "Adding sparkle and sophistication to every occasion",
                icon: "✨"
              },
              {
                title: "Elite Service",
                description: "White-glove treatment for all our distinguished clients",
                icon: "🌟"
              },
              {
                title: "Unforgettable Nights",
                description: "Creating magical memories that last a lifetime",
                icon: "🌙"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Glamorous theme */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Create Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"> Glamorous Event?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-300">Let&apos;s make your evening sparkle and shine with unforgettable glamour</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us Now
            </Link>
            
            <Link 
              href="/portfolio"
              className="border-2 border-white/20 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        
        {/* Floating sparkle elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-500 opacity-60" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000 opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1500 opacity-60" />
      </section>
    </div>
  );
}