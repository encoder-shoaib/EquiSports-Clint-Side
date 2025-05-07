import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaSearch, FaEye, FaStar, FaFilter } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../RootComponents/Navbar/Navbar';

const AllSportsEq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('featured');
  const navigate = useNavigate();
  const equipments = useLoaderData();

  // Predefined categories
  const categories = [
    'Cricket', 'Football', 'Basketball', 'Tennis',
    'Badminton', 'Fitness', 'Running', 'Swimming'
  ];

  const handleViewDetails = (id) => {
    navigate(`/equipment-details/${id}`);
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Filter and sort logic
  const filteredEquipment = equipments
    .filter(item => {
      const matchesSearch = item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 ||
        selectedCategories.includes(item.categoryName);
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0; // featured (no sort)
      }
    });

  if (!equipments) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="py-12 px-9 sm:px-6 lg:px-16">
        <div className="max-w-8xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              Premium Sports <span className="text-[#8cc640]">Equipment</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: Filters Panel */}
            <div className="lg:w-72">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Filters
                  </h2>
                  <FaFilter className="text-gray-400" />
                </div>
                <div className="border-b border-gray-200 mb-6"></div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Equipment
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by name or category..."
                      className="pl-10 w-full rounded-lg border-gray-300 text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Sport Categories
                  </label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`category-${category}`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300  text-indigo-600 focus:ring-indigo-500"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                        <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: <span className="font-medium">${priceRange[0]} - ${priceRange[1]}</span>
                  </label>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="10"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    className="w-full rounded-lg border-gray-300 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Side: Product Display */}
            <div className="flex-1">
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {selectedCategories.length > 0
                      ? `${selectedCategories.join(', ')}`
                      : 'All Sports Equipment'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {filteredEquipment.length} {filteredEquipment.length === 1 ? 'item' : 'items'} available
                  </p>
                </div>
              </div>

              {filteredEquipment.length === 0 ? (
                <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No equipment found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search for different terms
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredEquipment.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="h-56 overflow-hidden cursor-pointer relative group"
                        onClick={() => handleViewDetails(item._id)}
                      >
                        <img
                          src={item.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                          alt={item.itemName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3
                            className="text-lg font-semibold text-gray-900 truncate cursor-pointer hover:text-indigo-600 transition-colors"
                            onClick={() => handleViewDetails(item._id)}
                          >
                            {item.itemName}
                          </h3>
                          <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            {item.categoryName}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-bold text-gray-900">${item.price}</span>
                          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                            <FaStar className="text-yellow-400 mr-1 text-sm" />
                            <span className="text-gray-700 text-sm font-medium">{item.rating?.toFixed(1) || '4.5'}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleViewDetails(item._id)}
                          className="w-full flex items-center justify-center px-4 py-2.5 bg-gray-300 text-black rounded-lg hover:bg-pink-100 transition-colors font-medium"
                        >
                          <FaEye className="mr-2" />
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AllSportsEq;