import { FaStar, FaFire, FaEye, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingProducts = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/equipment');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Process the products data - show only 4 top-rated products
  const trendingProducts = Array.isArray(allProducts)
    ? allProducts
      .filter(product => product?.rating >= 4)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4) // Changed from 8 to 4
      .map(product => ({
        ...product,
        isBestSeller: product.rating >= 4.5,
        isTrending: product.rating >= 4.2 && product.rating < 4.5,
        reviewCount: Math.floor(Math.random() * 100) + 10,
        originalPrice: product.price * 1.2
      }))
    : [];

  const handleViewDetails = (id) => {
    if (id) navigate(`/equipment-details/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Error loading products</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    // max - w - 11 / 12
    <div className="  mx-auto bg-white  my-12 py-6 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center rounded-xl ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-1">
            <FaFire className="mr-2" />
            <span className="font-bold">TRENDING NOW</span>
          </div>
          <h1 className="text-4xl font-bold text-[#7f38fa] mb-3">Top Rated Sports Gear</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products based on customer ratings
          </p>
        </div>

        {/* Products Grid - Now shows only 4 products */}
        {trendingProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No trending products found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <div key={product._id} className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Product badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                  {product.isBestSeller && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Trending
                    </span>
                  )}
                </div>

                {/* Product image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || 'https://via.placeholder.com/500x500?text=No+Image'}
                    alt={product.itemName}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x500?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product details */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    <span
                      className="hover:text-blue-600 cursor-pointer"
                      onClick={() => handleViewDetails(product._id)}
                    >
                      {product.itemName}
                    </span>
                  </h3>

                  <div className="flex items-center mt-2">
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    )}
                    {product.originalPrice && (
                      <span className="text-xs font-semibold bg-red-100 text-red-800 ml-2 px-1.5 py-0.5 rounded">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => handleViewDetails(product._id)}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      <FaEye className="mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Additional content section */}
      <div className="mt-16 text-center">
        <div className="mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Products
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;