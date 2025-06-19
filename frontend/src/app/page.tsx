'use client';

import { type ReactElement, useState, useEffect } from 'react';
import Link from "next/link";

export default function Home(): ReactElement {
  const textData = [
    "Welcome to Milan Manch Celebration",
    "Crafting moments, Creating Memories - Your Event, Our Expertise!",
    "Memorable Events Start with us.",
    "Host Event that matters"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentText = textData[currentTextIndex];
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Text fully typed, wait 8 seconds then move to next
        timeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayText('');
          setCurrentTextIndex((prev) => (prev + 1) % textData.length);
        }, 8000);
      }
    } else {
      // Start typing the next text
      setTimeout(() => {
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isTyping, textData]);

  const services = [
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
  ];

  const features = [
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
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Typing Effect and Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="w-full h-full object-cover opacity-60"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/hero-vid.webm" type="video/webm" />
            {/* Fallback for browsers that don't support webm */}
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Typing Effect Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight min-h-[200px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            {/* Call to Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center backdrop-blur-sm"
              >
                Contact Us →
              </Link>
              
              <Link 
                href="/about"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm text-center"
              >
                Learn More
              </Link>
            </div> */}
          </div>
        </div>
        
        {/* Floating sparkle elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-500 opacity-60" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000 opacity-60" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1500 opacity-60" />
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-2000 opacity-60" />
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Premium</span> Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 border-gray-200 p-8 rounded-xl backdrop-blur-sm border hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Milan Manch</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 relative overflow-hidden transition-colors duration-200">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Ready to Create Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"> Memorable Event?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Let&apos;s craft moments and create memories with Milan Manch Celebration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us Now
            </Link>
            
            <Link 
              href="/portfolio"
              className="border-2 border-gray-200 text-gray-800 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
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