export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About EventMaster</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in creating extraordinary events that leave lasting impressions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, EventMaster has grown from a small team of passionate event planners
                to one of the most trusted names in event management. Our journey began with a simple
                mission: to turn dreams into unforgettable experiences.
              </p>
              <p className="text-gray-600">
                Today, we pride ourselves on our attention to detail, creative solutions, and
                unwavering commitment to excellence. Every event we manage is a testament to our
                dedication to perfection and client satisfaction.
              </p>
            </div>
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for an image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Team Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional event experiences that exceed expectations, create lasting
                memories, and bring people together in meaningful ways.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative event management company, setting new standards
                of excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "🙋‍♀️"
              },
              {
                name: "Mike Chen",
                role: "Creative Director",
                image: "👨‍💼"
              },
              {
                name: "Emily Parker",
                role: "Event Coordinator",
                image: "👩‍💼"
              },
              {
                name: "David Wilson",
                role: "Operations Manager",
                image: "👨‍💼"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
