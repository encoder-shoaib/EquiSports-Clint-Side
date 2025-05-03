import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Website Info */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                <img src="/src/assets/icons/icons8-cricket-ball.gif" alt="Cricket" className="w-6 h-6" />
                <img src="/src/assets/icons/icons8-football.gif" alt="Football" className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#8cc640]">EquiSports</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for quality sports equipment. We provide the best gear for athletes and enthusiasts alike.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#8cc640] transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8cc640] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8cc640] transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8cc640] transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#8cc640]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a>
              </li>
              <li>
                <a href="/AboutUs" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="/FAQs" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#8cc640]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-[#8cc640]" />
                <span className="text-gray-400">123 Sports Avenue, Athletic City, AC 12345</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#8cc640]" />
                <a href="mailto:info@equisports.com" className="text-gray-400 hover:text-white transition-colors">
                  info@equisports.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#8cc640]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#8cc640]">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8cc640] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#8cc640] text-white font-semibold rounded-lg hover:bg-[#7cb530] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} EquiSports. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;