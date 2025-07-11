import Image from 'next/image';
import Link from 'next/link';

export default function SocialGatherings() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Social Gathering Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Creating memorable community experiences that bring people together
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
            <span className="text-[#b6810c]">Social Gatherings</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Social Gatherings We Organize</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Our team excels in organizing a wide variety of social gatherings that strengthen communities, celebrate cultures, 
              and create meaningful connections between people. From charity events to family reunions, 
              we handle every detail with care and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cultural Festival */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cultural Festival</h3>
                <p className="text-gray-600 mb-5">Celebrating diverse traditions and arts.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Traditional performances</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cultural exhibitions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diverse cuisine</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Charity Fundraiser */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Charity Fundraiser</h3>
                <p className="text-gray-600 mb-5">Events to support a social or noble cause.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Auction events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Donor management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cause promotion</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Blood Donation Camp */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Blood Donation Camp</h3>
                <p className="text-gray-600 mb-5">Voluntary drive to save lives.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Medical coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Donor management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Awareness campaigns</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Family Reunion */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1542809608-40cc516349c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Family Reunion</h3>
                <p className="text-gray-600 mb-5">Extended family gathering to reconnect.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-generation activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Family-style catering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Memorabilia displays</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Alumni Meet */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Alumni Meet</h3>
                <p className="text-gray-600 mb-5">Reconnecting old classmates and teachers.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nostalgic decorations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Year-wise activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Institution coordination</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Health Camp */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Health Camp</h3>
                <p className="text-gray-600 mb-5">Free check-up and consultation services.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Medical professional coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipment management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Health awareness programs</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Plantation Drive */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Plantation Drive</h3>
                <p className="text-gray-600 mb-5">Mass planting to improve green cover.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Site selection and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sapling procurement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Environmental education</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to plan your next social gathering?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our event specialists to create a memorable experience for your community
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="py-3 px-8 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
              Contact Us
            </Link>
            <Link href="/services" className="py-3 px-8 bg-white border border-gray-300 hover:border-[#b6810c] text-gray-800 rounded-md transition-colors duration-200 font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 