import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EventMaster</h3>
            <p className="text-gray-600">
              Creating unforgettable moments, one event at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Weddings</li>
              <li className="text-gray-600">Corporate Events</li>
              <li className="text-gray-600">Birthday Parties</li>
              <li className="text-gray-600">Social Gatherings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>info@eventmaster.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Event Street, City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} EventMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;