export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About MilanManch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in creating extraordinary events that leave lasting impressions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MilanManch Celebration Pvt. Ltd. began with a heartfelt dream—to make every event not just beautiful, but truly unforgettable. From the very beginning, our goal has been simple: to offer a one-stop solution for everything you need to make your event perfect. Whether it's a wedding, corporate event, birthday, or cultural function, we take care of it all—so you can relax and enjoy your special moments.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey started small, with a few local events and a big vision. But word spread quickly. People loved the way we handled every detail with care, how we brought ideas to life with creativity, and how we treated every celebration like our own. What sets us apart is not just the services we offer, but the emotion and energy we bring to every event.
              </p>
              <p className="text-gray-600 mb-4">
                At MilanManch, we believe every client has a unique story—and every celebration should reflect that. We listen closely, understand your vision, and then work behind the scenes to make it real. From venue booking, decorations, catering, and sound to lights, logistics, and personalized themes—we handle everything under one roof.
              </p>
              <p className="text-gray-600 mb-4">
                Our team doesn’t work with a “one-size-fits-all” mindset. We take time to understand your needs, your style, and your expectations. Whether it’s a small, intimate gathering or a grand celebration, we make sure every detail is perfect. And the best part? You don’t have to run around managing multiple vendors—we bring everything together in one smooth experience.
              </p>
              <p className="text-gray-600 mb-4">
                Clients often tell us that working with MilanManch feels like planning an event with family. And honestly, that’s what we aim for. We’re not just event planners—we’re partners in your joy.
              </p>
              <p className="text-gray-600 mb-4">
                As we continue to grow, our mission remains the same: to make celebrations stress-free, meaningful, and magical. We believe that memories are made in the little things—warm welcomes, seamless flow, and moments of pure happiness.
              </p>
              <p className="text-gray-600">
                So when you're ready to celebrate life’s biggest moments, remember this—MilanManch is here to take care of everything, all in one place, just the way you dreamed it.
              </p>
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
                At MilanManch Celebration Pvt. Ltd., our mission is simple yet powerful: to make every event a joyful, stress-free, and unforgettable experience. We understand how special these moments are—whether it's a wedding, a birthday, a corporate event, or any other occasion—and we believe they deserve nothing less than perfection.
              </p>
              <p className="text-gray-600 mt-4">
                Our dream is to provide a one-stop solution for all your event needs, so you don’t have to worry about managing different vendors or running after last-minute arrangements. From venue selection and decoration to catering, entertainment, sound, lighting, and logistics—we take care of everything under one roof.
              </p>
              <p className="text-gray-600 mt-4">
                But our mission goes beyond just organizing events. We want to create experiences that feel personal, meaningful, and truly memorable. Every client has their own story, and every event should reflect that. That’s why we listen closely, plan carefully, and execute with heart.
              </p>
              <p className="text-gray-600 mt-4">
                We’re committed to bringing fresh ideas, creative designs, and smooth execution to every project we take on. Whether it’s a grand celebration or a small gathering, we treat it with the same level of dedication and detail.
              </p>
              <p className="text-gray-600 mt-4">
                Most importantly, we want our clients to feel happy, relaxed, and excited throughout the journey. Because when you look back at your big day, we want you to remember the joy—not the stress.
              </p>
              <p className="text-gray-600 mt-4">
                At MilanManch, your celebration is our responsibility—and your happiness is our true success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                At MilanManch Celebration Pvt. Ltd., our vision is to become a trusted name in the world of event management by bringing people’s dreams to life through unforgettable celebrations. We aim to set new standards in the industry by combining creativity, professionalism, and heartfelt service.
              </p>
              <p className="text-gray-600 mt-4">
                We see a future where planning an event is no longer stressful or overwhelming. Instead, it becomes a joyful journey—where every detail is taken care of, and every moment feels special. We envision MilanManch as a brand known for its innovation, integrity, and personal touch. No matter the size or type of event, we strive to make each one unique, memorable, and perfectly tailored to our client’s needs.
              </p>
              <p className="text-gray-600 mt-4">
                Looking ahead, we want to expand our reach, grow our team, and continue evolving with the latest trends—while staying true to our core values: trust, quality, and client satisfaction.
              </p>
              <p className="text-gray-600 mt-4">
                Our vision is clear: to celebrate life’s moments with elegance, care, and excellence—one event at a time.
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
            {/*
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
            */}
            {/*
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
            */}
            {/*
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
            */}
            {/*
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
            */}
          </div>
        </div>
      </section>
    </div>
  );
}
