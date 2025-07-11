import Image from 'next/image';
import Link from 'next/link';

export default function PrivateParties() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Private Party Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Creating memorable celebrations for life's special moments
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
            <span className="text-[#b6810c]">Private Parties</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Private Party Events We Organize</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
              Our team specializes in crafting personalized private events that celebrate life's special moments. 
              From birthdays and anniversaries to engagement parties and housewarmings, 
              we handle every detail to make your celebration truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Birthday Party */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Birthday Party</h3>
                <p className="text-gray-600 mb-5">Celebrate another year of joy and blessings.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Age-appropriate themes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom cake arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entertainment options</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Engagement</h3>
                <p className="text-gray-600 mb-5">A pre-wedding ring ceremony to announce love.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Romantic settings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Photography arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Family coordination</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Baby Shower */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1544866092-1677f7b4413c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Baby Shower</h3>
                <p className="text-gray-600 mb-5">Welcoming the arrival of a new baby with love.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gender reveal options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Themed decorations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fun shower games</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Housewarming */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Housewarming</h3>
                <p className="text-gray-600 mb-5">Bless the new home with friends and family.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Home tours coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Home-style catering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Traditional rituals</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Anniversary */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Anniversary</h3>
                <p className="text-gray-600 mb-5">Celebrate years of togetherness and love.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Romantic settings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Milestone celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Memory displays</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Bachelor Party */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor Party</h3>
                <p className="text-gray-600 mb-5">Last night of freedom with the boys!</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fun activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Venue selection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entertainment options</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Retirement Party */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Retirement Party</h3>
                <p className="text-gray-600 mb-5">Thanking a career and welcoming a new phase.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Career highlights display</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Speeches coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized mementos</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Naming Ceremony */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1515923152115-758a6b16f35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Naming Ceremony</h3>
                <p className="text-gray-600 mb-5">A sacred ritual to name the newborn child.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Religious arrangement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cultural elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Family coordination</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Reception</h3>
                <p className="text-gray-600 mb-5">A formal celebration following a wedding ceremony.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Venue decoration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Catering management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entertainment & music</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Welcome Party */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Welcome Party</h3>
                <p className="text-gray-600 mb-5">A warm greeting for a newborn or returning loved one.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Surprise elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized decor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Memorable activities</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Farewell Party */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Farewell Party</h3>
                <p className="text-gray-600 mb-5">Goodbye gathering with sweet memories.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Memory sharing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized gifts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Speeches coordination</span>
                  </li>
                </ul>
                <button className="w-full py-2 px-4 bg-[#b6810c] hover:bg-[#a37105] text-white rounded-md transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Get-Together */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-60 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get-Together</h3>
                <p className="text-gray-600 mb-5">Reunion of friends, families, or colleagues.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Informal settings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Group activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#b6810c] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Casual catering</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to plan your private celebration?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our event specialists to create a personalized event experience
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