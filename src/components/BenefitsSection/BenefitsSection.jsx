import { FaTruck, FaShieldAlt, FaExchangeAlt, FaHeadset, FaMedal, FaPercentage } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose EquiSports
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best sports equipment shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 - Fast Shipping */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500/10 p-4 rounded-xl mr-4">
                <FaTruck className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast & Free Shipping</h3>
            </div>
            <p className="text-gray-600">
              Get your gear quickly with our free express shipping on all orders over $50. Most items arrive within 2-3 business days.
            </p>
          </div>

          {/* Benefit 2 - Quality Guarantee */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500/10 p-4 rounded-xl mr-4">
                <FaMedal className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Premium Quality</h3>
            </div>
            <p className="text-gray-600">
              We source only the highest quality equipment from trusted brands. Every product meets our strict quality standards.
            </p>
          </div>

          {/* Benefit 3 - Easy Returns */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-500/10 p-4 rounded-xl mr-4">
                <FaExchangeAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Easy Returns</h3>
            </div>
            <p className="text-gray-600">
              Not satisfied? Return any item within 30 days for a full refund. No questions asked.
            </p>
          </div>

          {/* Benefit 4 - Expert Support */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500/10 p-4 rounded-xl mr-4">
                <FaHeadset className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Expert Support</h3>
            </div>
            <p className="text-gray-600">
              Our team of sports enthusiasts is available 24/7 to help you choose the perfect equipment for your needs.
            </p>
          </div>

          {/* Benefit 5 - Secure Shopping */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-red-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/10 p-4 rounded-xl mr-4">
                <FaShieldAlt className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Secure Shopping</h3>
            </div>
            <p className="text-gray-600">
              Your security is our priority. All transactions are encrypted and we never store your payment details.
            </p>
          </div>

          {/* Benefit 6 - Member Discounts */}
          <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-teal-500/10 p-4 rounded-xl mr-4">
                <FaPercentage className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Exclusive Discounts</h3>
            </div>
            <p className="text-gray-600">
              Join our loyalty program for members-only deals, early access to sales, and special offers.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="SSL Secure"
              className="h-12 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
              alt="Google Guaranteed"
              className="h-12 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              alt="Better Business Bureau"
              className="h-12 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/825/825454.png"
              alt="Money Back Guarantee"
              className="h-12 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;