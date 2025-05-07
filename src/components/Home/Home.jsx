import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OffersSection from "../OffersSection/OffersSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import TrendingProducts from "../TrendingProducts/TrendingProducts";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data with working image URLs
  const slides = [
    {
      id: 1,
      image: "https://sterosport.co.uk/wp-content/uploads/2022/08/cricket-essentials-featured-image.jpg",
      title: "Premium Sports Equipment",
      subtitle: "Get the best gear for your favorite sports",
      buttonText: "Shop Now",
      buttonLink: "/equipment"
    },
    {
      id: 2,
      image: "https://gymnation.com/media/5uwlutgb/cr7-legendary-icon.jfif",
      title: "Summer Sale - Up to 50% Off",
      subtitle: "Limited time offer on selected items",
      buttonText: "View Deals",
      buttonLink: "/equipment?discount=true"
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/flat-lay-sports-equipment-including-tennis-racket-soccer-ball-basketball_14117-975862.jpg",
      title: "New Arrivals",
      subtitle: "Discover our latest collection",
      buttonText: "Explore",
      buttonLink: "/equipment?new=true"
    },
    {
      id: 4,
      image: "https://www.soccerbible.com/media/125302/sb-cr7-1.jpg",
      title: "New Arrivals",
      subtitle: "Discover our latest collection",
      buttonText: "Explore",
      buttonLink: "/equipment?new=true"
    },
    {
      id: 5,
      image: "https://img.freepik.com/premium-photo/flat-lay-sports-equipment-including-tennis-racket-soccer-ball-basketball_14117-975862.jpg",
      title: "New Arrivals",
      subtitle: "Discover our latest collection",
      buttonText: "Explore",
      buttonLink: "/equipment?new=true"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      title: "Join Our Community",
      subtitle: "Connect with fellow sports enthusiasts",
      buttonText: "Learn More",
      buttonLink: "/community"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative pb-6">
      {/* Hero Carousel */}
      <div className=" bg-gray-200 py-2 ">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" relative h-[71vh] min-h-[500px] w-full overflow-hidden ">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager" // Load first image immediately
                />
                {/* Overlay text and button */}
                <div className="absolute inset-0  bg-opacity-30 flex items-center ">
                  <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8">
                        {slide.subtitle}
                      </p>
                      <Link
                        to={slide.buttonLink}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition z-10"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition z-10"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${index === currentSlide ? "bg-white w-6" : "bg-white bg-opacity-50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Section */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Categories
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              name: "Football",
              image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=football",
              color: "bg-gradient-to-br from-green-500 to-green-700"
            },
            {
              name: "Cricket",
              image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=cricket",
              color: "bg-gradient-to-br from-amber-500 to-amber-700"
            },
            {
              name: "Basketball",
              image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=basketball",
              color: "bg-gradient-to-br from-orange-500 to-orange-700"
            },
            {
              name: "Badminton",
              image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=badminton",
              color: "bg-gradient-to-br from-blue-500 to-blue-700"
            },
            {
              name: "Fitness",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=fitness",
              color: "bg-gradient-to-br from-red-500 to-red-700"
            },
            {
              name: "Tennis",
              image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
              link: "/equipment?category=tennis",
              color: "bg-gradient-to-br from-emerald-500 to-emerald-700"
            }
          ].map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${category.color} opacity-20`}></div>
                <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {category.name}
                </h3>
                <div className="mt-2">
                  <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-black bg-opacity-40 rounded-full backdrop-blur-sm">
                    Shop Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-200 text-gray-800 py-16 max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Join thousands of athletes who trust EquiSports for their sports equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign Up Now
            </Link>
            <Link
              to="/about"
              className="bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-50 hover:border-purple-600 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Best Sellers / Trending Products Section */}
      <TrendingProducts></TrendingProducts>

      {/* Offers & Promotions Section */}
      <OffersSection></OffersSection>

      {/* Testimonials or Customer Reviews */}
      <TestimonialsSection></TestimonialsSection>

      {/*  Why Choose Us / Benefits Section */}
      <BenefitsSection></BenefitsSection>

    </div>
  );
};

export default Home;