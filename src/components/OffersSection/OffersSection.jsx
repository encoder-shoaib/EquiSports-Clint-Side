import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OffersSection = () => {
  // Real countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hot Deals & Offers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited-time offers you don't want to miss
          </p>
        </div>

        {/* Countdown Banner */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-r from-red-600 to-orange-500 p-8 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <span className="bg-white bg-opacity-20 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                  FLASH SALE
                </span>
                <span className="text-white text-sm">Limited Time</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ending Soon!</h3>
              <p className="text-white mb-6">Hurry, offer ends in:</p>
              <div className="flex space-x-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-black bg-opacity-20 text-white text-2xl font-bold rounded-lg px-3 py-2 w-16">
                      {String(value).padStart(2, '0')}
                    </div>
                    <span className="text-xs text-white opacity-80 mt-1 block">
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Up to 60% Off Sports Gear</h3>
              <p className="text-gray-600 mb-6">
                Don't miss our biggest sale of the season. Shop now before these deals are gone!
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/offers"
                  className="flex-1 text-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  to="/terms"
                  className="flex-1 text-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "New Member Discount",
              description: "Get 20% off your first order when you sign up",
              code: "WELCOME20",
              expiry: "Dec 31, 2023",
              bgColor: "from-blue-100 to-purple-100",
              borderColor: "border-blue-200",
              textColor: "text-blue-600",
              icon: (
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              )
            },
            {
              title: "Free Shipping",
              description: "Free delivery on all orders over $50",
              code: "FREESHIP50",
              expiry: "Ongoing",
              bgColor: "from-green-100 to-teal-100",
              borderColor: "border-green-200",
              textColor: "text-green-600",
              icon: (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                </svg>
              )
            },
            {
              title: "Bundle Deal",
              description: "Buy any 3 items and get 15% off",
              code: "BUNDLE15",
              expiry: "Jan 15, 2024",
              bgColor: "from-amber-100 to-orange-100",
              borderColor: "border-amber-200",
              textColor: "text-amber-600",
              icon: (
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              )
            }
          ].map((promo, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${promo.bgColor} border ${promo.borderColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-white rounded-lg mr-4">
                  {promo.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{promo.title}</h3>
                    <span className={`text-xs font-semibold ${promo.textColor} bg-white px-2 py-1 rounded-full`}>
                      {promo.expiry === "Ongoing" ? "Permanent" : "Limited"}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{promo.description}</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 mb-4 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500">Promo Code</div>
                  <div className="font-mono font-bold text-lg">{promo.code}</div>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Copy
                </button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  {promo.expiry === "Ongoing" ? "No expiration" : `Expires: ${promo.expiry}`}
                </span>
                <Link
                  to="/terms"
                  className={`font-medium ${promo.textColor} hover:underline`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/offers"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Special Offers
            <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;