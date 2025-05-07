import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Get category name from route parameter
  const { categoryName } = useParams();

  // Fetch equipment data
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("http://localhost:5000/equipment");
        if (!response.ok) {
          throw new Error("Failed to fetch equipment data");
        }
        const data = await response.json();
        // Filter equipment by category
        const filteredEquipment = data.filter(
          (item) => item.categoryName.toLowerCase() === categoryName?.toLowerCase()
        );
        setEquipment(filteredEquipment);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [categoryName]);

  const handleViewDetails = (id) => {
    navigate(`/equipment-details/${id}`);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                      Home
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 capitalize">{categoryName}</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 capitalize">
                {categoryName || "Category"}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Explore our premium collection of {categoryName} equipment. High-quality tools for professionals and enthusiasts alike.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Equipment Cards */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading equipment</h3>
            <p className="text-gray-600 max-w-md mx-auto">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : equipment.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No equipment found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any equipment in the {categoryName} category. Please check back later or browse our other categories.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse All Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {equipment.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100"
              >
                {/* Stock Status Badge */}
                {item.stockStatus > 0 ? (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
                    In Stock
                  </span>
                ) : (
                  <span className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
                    Out of Stock
                  </span>
                )}

                <div className="relative h-56 w-full">
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.itemName}
                  </h3>
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-sm text-gray-600 ml-1">4.8 (24 reviews)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.stockStatus > 0 && (
                      <span className="text-sm text-gray-500">
                        {item.stockStatus} available
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="w-full bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;