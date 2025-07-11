import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#412714] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#e7c47b] font-cinzel-decorative">MilanManch Celebration Pvt. Ltd.</h3>
            <p className="text-white">
              Creating unforgettable moments.<br/>
              <span className="block mt-1 text-white">Your dream event, Our Responsibility</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="group text-white relative transition-colors hover:text-[#e7c47b] duration-200">
                  Home
                  <span className="block absolute left-0 -bottom-1 h-[2px] bg-[#e7c47b] transition-all duration-300 scale-x-0 group-hover:scale-x-100 w-full origin-left"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group hover:text-[#e7c47b] text-white relative transition-colors duration-200">
                  About
                  <span className="block absolute left-0 -bottom-1 h-[2px] bg-[#e7c47b] transition-all duration-300 scale-x-0 group-hover:scale-x-100 w-full origin-left"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group hover:text-[#e7c47b] text-white relative transition-colors duration-200">
                  Services
                  <span className="block absolute left-0 -bottom-1 h-[2px] bg-[#e7c47b] transition-all duration-300 scale-x-0 group-hover:scale-x-100 w-full origin-left"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group hover:text-[#e7c47b] text-white relative transition-colors duration-200">
                  Contact
                  <span className="block absolute left-0 -bottom-1 h-[2px] bg-[#e7c47b] transition-all duration-300 scale-x-0 group-hover:scale-x-100 w-full origin-left"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-white">Weddings</li>
              <li className="text-white">Corporate Events</li>
              <li className="text-white">Birthday Parties</li>
              <li className="text-white">Social Gatherings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2 text-white">
              <li>support25@milanmanch.com</li>
              <li>Head Office:</li>
              <li>A-261 F/F, KH.NO-302, A-BLOCK, MEET NAGAR, SABOLI DELHI -110094</li>
              <li>Corporate Office:</li>
              <li>A12 Bansal Complex, Khandari, Agra</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-white">
          <p>&copy; {new Date().getFullYear()} MilanManch Celebration Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;