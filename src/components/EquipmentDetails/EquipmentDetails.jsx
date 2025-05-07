import { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaCheck, FaTruck, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const { setPurchaseIds } = useContext(AuthContext);
  console.log(setPurchaseIds)

  const handleAddToCart = (id) => {
    setCartItems((prev) => [...prev, id]);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${equipment.itemName} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-right',
    });
  };

  console.log(cartItems)
  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Equipment Not Found</h2>
          <p className="text-indigo-600 mb-6">The requested equipment could not be found in our inventory.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center mx-auto shadow-md hover:shadow-lg"
          >
            <FaArrowLeft className="mr-2" />
            Return to Equipment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col overflow-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-100 hover:text-white mb-4 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Equipment
          </button>
          <h1 className="text-3xl font-extrabold text-yellow-300 mb-2 tracking-tight">{equipment.itemName}</h1>
          <p className="text-lg text-purple-100">{equipment.categoryName} Equipment</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-200">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 p-6">
              <div className="relative h-80 bg-indigo-50 rounded-xl overflow-hidden border border-indigo-200">
                <img
                  src={equipment.image || 'https://via.placeholder.com/800x600?text=No+Image'}
                  alt={equipment.itemName}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-indigo-900">{equipment.itemName}</h2>
                  <p className="text-indigo-600 font-medium">{equipment.categoryName}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-bold shadow-sm ${
                    equipment.stockStatus > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {equipment.stockStatus > 0 ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(equipment.rating || 0) ? 'text-yellow-400' : 'text-indigo-200'}`}
                    />
                  ))}
                </div>
                <span className="text-indigo-700 font-medium">
                  {equipment.rating?.toFixed(1) || '4.5'} (24 reviews)
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Product Description</h3>
                <p className="text-indigo-900 leading-relaxed">
                  {equipment.description || 'No description available for this product.'}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 bg-indigo-50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Price</h3>
                <p className="text-2xl font-extrabold text-indigo-900">${equipment.price}</p>
                {equipment.processingTime && (
                  <p className="text-indigo-700 mt-1">Processing time: {equipment.processingTime}</p>
                )}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-indigo-900">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>High-quality materials for durability</span>
                  </li>
                  <li className="flex items-center text-indigo-900">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Professional-grade performance</span>
                  </li>
                  {equipment.customization && (
                    <li className="flex items-center text-indigo-900">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>Customization options available</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Purchase Options */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => handleAddToCart(equipment._id)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Add to Cart
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 border-t border-indigo-200 pt-6">
                <div className="flex items-center">
                  <FaTruck className="text-indigo-600 mr-3 text-xl" />
                  <div>
                    <h4 className="font-medium text-indigo-800">Free Shipping</h4>
                    <p className="text-sm text-indigo-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="text-indigo-600 mr-3 text-xl" />
                  <div>
                    <h4 className="font-medium text-indigo-800">1-Year Warranty</h4>
                    <p className="text-sm text-indigo-600">Manufacturer guarantee</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaExchangeAlt className="text-indigo-600 mr-3 text-xl" />
                  <div>
                    <h4 className="font-medium text-indigo-800">Easy Returns</h4>
                    <p className="text-sm text-indigo-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-6">Product Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">General Information</h4>
              <ul className="space-y-2 text-indigo-900">
                <li><span className="font-medium">Category:</span> {equipment.categoryName}</li>
                <li><span className="font-medium">Brand:</span> SportsPro</li>
                <li><span className="font-medium">SKU:</span> SP-{equipment._id.slice(0, 8).toUpperCase()}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Availability</h4>
              <ul className="space-y-2 text-indigo-900">
                <li>
                  <span className="font-medium">Stock Status:</span>{' '}
                  {equipment.stockStatus > 0 ? `${equipment.stockStatus} units available` : 'Out of stock'}
                </li>
                <li>
                  <span className="font-medium">Processing Time:</span>{' '}
                  {equipment.processingTime || '3-5 business days'}
                </li>
                <li>
                  <span className="font-medium">Seller:</span> {equipment.userName || 'SportsPro Official'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;