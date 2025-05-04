import { useContext, useState } from 'react';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AddEquipment = () => {
  const loginUser = useLoaderData();
  const { user } = useContext(AuthContext);
  const currentUser = loginUser?.find(u => u.email === user?.email);

  // Get user name from either:
  // 1. currentUser (if available from loginUser data)
  // 2. user.displayName (from AuthContext)
  // 3. Fallback to empty string
  const userName = currentUser?.name || user?.displayName || '';

  const [formData, setFormData] = useState({
    image: '',
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
    userEmail: user?.email || '',
    userName: userName
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Cricket', 'Football', 'Basketball', 'Tennis',
    'Badminton', 'Fitness', 'Running', 'Swimming'
  ];

  const processingTimes = [
    '1-2 days', '3-5 days', '1 week', '2 weeks',
    'Custom (specify in description)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const equipmentData = {
      image: formData.image,
      itemName: formData.itemName,
      categoryName: formData.categoryName,
      description: formData.description,
      price: parseFloat(formData.price),
      rating: formData.rating ? parseInt(formData.rating) : null,
      customization: formData.customization,
      processingTime: formData.processingTime,
      stockStatus: parseInt(formData.stockStatus),
      userEmail: user?.email || '',
      userName: userName
    };

    try {
      const response = await fetch('http://localhost:5000/equipment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(equipmentData)
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Equipment added successfully to the database!',
          icon: 'success'
        });

        setFormData({
          image: '',
          itemName: '',
          categoryName: '',
          description: '',
          price: '',
          rating: '',
          customization: '',
          processingTime: '',
          stockStatus: '',
          userEmail: user?.email || '',
          userName: userName
        });
      } else {
        throw new Error('Failed to add equipment');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to add equipment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Add New Equipment
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Fill in the details to add a new product to the inventory
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image URL*
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  />
                  {formData.image && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="h-32 w-32 object-cover rounded-lg shadow-sm"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Item Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name*
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category*
                  </label>
                  <select
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)*
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description*
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                  >
                    <option value="">Select Rating</option>
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Customization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customization Options
                  </label>
                  <input
                    type="text"
                    name="customization"
                    value={formData.customization}
                    onChange={handleInputChange}
                    placeholder="e.g., Bat with extra grip, Hit paper"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                  />
                </div>

                {/* Processing Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Processing/Delivery Time*
                  </label>
                  <select
                    name="processingTime"
                    value={formData.processingTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  >
                    <option value="">Select Processing Time</option>
                    {processingTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Stock Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Status (Quantity)*
                  </label>
                  <input
                    type="number"
                    name="stockStatus"
                    value={formData.stockStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-200"
                    required
                  />
                </div>

                {/* Read-only User Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={formData.userEmail}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    image: '',
                    itemName: '',
                    categoryName: '',
                    description: '',
                    price: '',
                    rating: '',
                    customization: '',
                    processingTime: '',
                    stockStatus: '',
                    userEmail: user?.email || '',
                    userName: userName
                  });
                }}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200 shadow-sm"
              >
                Reset Form
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-200 ${isSubmitting
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Processing...
                  </span>
                ) : (
                  'Add Equipment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default AddEquipment;