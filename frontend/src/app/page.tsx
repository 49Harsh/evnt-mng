import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Creating Unforgettable Events
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                description: "Turn your dream wedding into reality with our expert planning and execution",
                icon: "👰"
              },
              {
                title: "Corporate Events",
                description: "Professional event management for conferences, seminars, and team building",
                icon: "💼"
              },
              {
                title: "Social Gatherings",
                description: "Make your special occasions memorable with our creative touch",
                icon: "🎉"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventMaster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Over 10 years of event planning excellence"
              },
              {
                title: "Custom Solutions",
                description: "Tailored events that match your vision and budget"
              },
              {
                title: "Full Service",
                description: "End-to-end event management and coordination"
              },
              {
                title: "24/7 Support",
                description: "Always available to assist you throughout the process"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Next Event?</h2>
          <p className="text-xl mb-8">Let's create something amazing together</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
