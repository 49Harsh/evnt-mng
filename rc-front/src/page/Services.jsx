import React from "react";
export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-600">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Planning",
                description: "From intimate ceremonies to grand celebrations, we handle every detail of your special day.",
                features: ["Venue Selection", "Vendor Coordination", "Decor & Theme Design", "Timeline Planning"],
                icon: "👰"
              },
              {
                title: "Corporate Events",
                description: "Professional event management for your business needs and company celebrations.",
                features: ["Conferences", "Team Building", "Product Launches", "Award Ceremonies"],
                icon: "💼"
              },
              {
                title: "Social Gatherings",
                description: "Create memorable moments with perfectly planned social events.",
                features: ["Birthday Parties", "Anniversary Celebrations", "Holiday Parties", "Reunions"],
                icon: "🎉"
              },
              {
                title: "Private Parties",
                description: "Exclusive event planning for your private celebrations and gatherings.",
                features: ["Dinner Parties", "Cocktail Events", "Garden Parties", "Theme Parties"],
                icon: "🎊"
              },
              {
                title: "Cultural Events",
                description: "Celebrate traditions and cultural occasions with authentic touches.",
                features: ["Festival Celebrations", "Cultural Ceremonies", "Traditional Events", "Community Gatherings"],
                icon: "🎭"
              },
              {
                title: "Concert & Shows",
                description: "Technical expertise for entertainment events and performances.",
                features: ["Live Concerts", "Fashion Shows", "Art Exhibitions", "Theater Productions"],
                icon: "🎵"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Initial meeting to discuss your vision and requirements"
              },
              {
                step: "2",
                title: "Planning",
                description: "Detailed event planning and vendor coordination"
              },
              {
                step: "3",
                title: "Execution",
                description: "Flawless event execution and management"
              },
              {
                step: "4",
                title: "Follow-up",
                description: "Post-event evaluation and feedback collection"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
