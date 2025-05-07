import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEdit, FaTrash, FaSearch, FaPlus, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast, Toaster } from 'react-hot-toast';

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch only the current user's equipment
  useEffect(() => {
    const fetchMyEquipment = async () => {
      try {
        if (!user?.email) return;

        const response = await fetch(`http://localhost:5000/equipment?userEmail=${user.email}`);
        if (!response.ok) throw new Error('Failed to fetch equipment');

        const data = await response.json();
        // Additional client-side filtering for security
        const myEquipment = data.filter(item => item.userEmail === user.email);
        setEquipments(myEquipment);
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to load equipment');
      } finally {
        setLoading(false);
      }
    };

    fetchMyEquipment();
  }, [user]);

  // Delete equipment with confirmation
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Delete Equipment?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!',
      background: '#f9fafb'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/equipment/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          });

          if (response.ok) {
            setEquipments(prev => prev.filter(item => item._id !== id));
            toast.success('Equipment deleted successfully');
          } else {
            throw new Error('Failed to delete');
          }
        } catch (error) {
          console.error('Error:', error);
          toast.error('Failed to delete equipment');
        }
      }
    });
  };

  // Filter equipment by search term
  const filteredEquipments = equipments.filter(equipment =>
    equipment.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    equipment.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              My<span className="text-[#8cc640]">Equipment</span>
            </h1>
            <p className="mt-2 text-gray-600">
              {filteredEquipments.length} {filteredEquipments.length === 1 ? 'item' : 'items'} found
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name or category..."
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm w-full text-gray-600 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Link
              to="/add-equipment"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
            >
              <FaPlus className="mr-2" />
              Add Equipment
            </Link>
          </div>
        </div>

        {/* Equipment Grid */}
        {filteredEquipments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'No matching equipment found' : 'Your equipment list is empty'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? 'Try a different search term' : 'Add your first equipment to get started'}
            </p>
            <Link
              to="/add-equipment"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
            >
              <FaPlus className="mr-2" />
              Add Equipment
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipments.map((equipment) => (
              <div
                key={equipment._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image with Actions */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={equipment.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={equipment.itemName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Link
                      to={`/edit-equipment/${equipment._id}`}
                      className="p-2 bg-white rounded-full shadow-md text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="p-2 bg-white rounded-full shadow-md text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

                {/* Equipment Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 truncate">
                      {equipment.itemName}
                    </h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {equipment.categoryName}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {equipment.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${equipment.price}</span>
                      {equipment.rating && (
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-4 h-4 ${i < equipment.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${equipment.stockStatus > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {equipment.stockStatus > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        {equipment.processingTime}
                      </p>
                    </div>
                  </div>

                  {equipment.customization && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Customization:</h4>
                      <p className="text-sm text-gray-600">{equipment.customization}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default MyEquipmentList;