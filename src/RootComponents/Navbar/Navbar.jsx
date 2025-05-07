import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaSignOutAlt, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({ loginUser }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("Logged out successfully!");
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get the logged in user data from the loginUser array
  const currentUser = loginUser?.find(u => u.email === user?.email);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/allSportEq"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        All Sports Equipment
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Equipment List
          </NavLink>
        </>
      )}
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        AboutUs
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Blog
      </NavLink>
      <NavLink
        to="/FAQs"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        FAQs
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Search, Logo, User Actions */}
        <div className="flex flex-col ">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            {/* Search Bar - Hidden on mobile, shown on tablet and up */}
            <div className="hidden md:block w-1/3">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search equipment..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50  text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                />
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Logo - Centered */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start items-center">
              <Link to="/" className="flex items-center gap-3 justify-start md:pr-96">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img
                      src="/src/assets/icons/icons8-cricket-ball.gif"
                      alt="EquiSports"
                      className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl"
                    />
                    <img
                      src="/src/assets/icons/icons8-football.gif"
                      alt="EquiSports"
                      className="w-10 h-10 lg:w-8 lg:h-8 rounded-xl"
                    />
                    <img
                      src="/src/assets/icons/icons8-basketball.gif"
                      alt="EquiSports"
                      className="w-10 h-10 lg:w-8 lg:h-8 rounded-xl"
                    />
                    <img
                      src="/src/assets/icons/icons8-badminton.gif"
                      alt="EquiSports"
                      className="w-10 h-10 lg:w-8 lg:h-8 rounded-xl"
                    />
                  </div>
                  <div>
                    <span className="text-xl lg:text-2xl font-extrabold text-[#8cc640] tracking-tight">
                      EquiSports
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* User Actions & Cart - Right side */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search Button - Shown only on mobile */}
              <button className="md:hidden text-gray-800 hover:text-blue-600">
                <FaSearch className="text-xl" />
              </button>

              <Link
                to="/cart"
                className="relative text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FaShoppingCart className="text-xl lg:text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {!user ? (
                <div className="hidden md:flex items-center space-x-3">
                  <NavLink
                    to="/login"
                    className="px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-sm"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-1.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 text-sm"
                  >
                    Register
                  </NavLink>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <div className="relative group cursor-pointer">
                    <img
                      src={currentUser?.photoURL || user?.photoURL || "/default-avatar.png"}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                    />
                    <div className="absolute top-12 -left-8 bg-white border rounded-lg shadow-2xl px-4 py-2 text-sm text-gray-800 whitespace-nowrap hidden group-hover:block transition-all duration-200">
                      {currentUser?.name || user?.displayName || "User"}
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-800 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Bottom Row - Navigation Links */}
          <div className="hidden lg:flex justify-center items-center py-2 space-x-4">
            {navLinks}

            {/* Show logout button next to links when logged in */}
            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 text-sm"
              >
                <FaSignOutAlt />
                Log Out
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 py-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          {/* Mobile Search - Shown when menu is open */}
          <div className="px-4 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 px-4">
            {navLinks}
          </div>

          <div className="mt-4 px-4">
            <div className="flex flex-col space-y-3">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 text-center transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 text-center transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentUser?.photoURL || user?.photoURL || "/default-avatar.png"}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                    />
                    <span className="text-gray-800 font-medium">
                      {currentUser?.name || user?.displayName || "User"}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f36621] text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300"
                  >
                    <FaSignOutAlt />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </nav>
  );
};

export default Navbar;