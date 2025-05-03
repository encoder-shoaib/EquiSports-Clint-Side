import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

const Blog = () => {
  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            EquiSports <span className="text-[#8cc640]">Blog</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Tips, news, and insights for sports enthusiasts
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="bg-[#8cc640] text-white text-xs px-2 py-1 rounded mr-3">Featured</span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-1" /> June 15, 2023
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">How to Choose the Perfect Cricket Bat</h2>
                <p className="text-gray-600 mb-6">
                  A comprehensive guide to selecting the right cricket bat based on your playing style, weight preferences, and budget considerations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaUser className="mr-1" /> By Alex Johnson
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaTags className="mr-1" /> Cricket, Equipment Guide
                  </span>
                </div>
                <button className="mt-6 px-6 py-2 bg-[#8cc640] text-white font-medium rounded-lg hover:bg-[#7cb530] transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              title: "Essential Football Gear for Beginners",
              excerpt: "Everything you need to start playing football like a pro",
              date: "May 28, 2023",
              author: "Sarah Williams",
              tags: "Football, Beginner",
              img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018"
            },
            {
              title: "Basketball Maintenance 101",
              excerpt: "Keep your basketball in top condition with these simple tips",
              date: "April 15, 2023",
              author: "Michael Chen",
              tags: "Basketball, Maintenance",
              img: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
            },
            {
              title: "Badminton Racket String Tension Guide",
              excerpt: "Find the perfect string tension for your playing style",
              date: "March 22, 2023",
              author: "Alex Johnson",
              tags: "Badminton, Equipment",
              img: "https://images.unsplash.com/photo-1516043827470-d52a543b844a"
            },
            {
              title: "The Evolution of Tennis Rackets",
              excerpt: "How tennis racket technology has changed over the decades",
              date: "February 10, 2023",
              author: "Sarah Williams",
              tags: "Tennis, History",
              img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8"
            },
            {
              title: "Winter Sports Equipment Storage",
              excerpt: "Properly store your gear during the off-season",
              date: "January 5, 2023",
              author: "Michael Chen",
              tags: "Storage, Maintenance",
              img: "https://images.unsplash.com/photo-1483721310020-03333e577078"
            },
            {
              title: "Choosing the Right Running Shoes",
              excerpt: "Find the perfect pair for your foot type and running style",
              date: "December 12, 2022",
              author: "Alex Johnson",
              tags: "Running, Shoes",
              img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
            }
          ].map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendarAlt className="mr-1" /> {post.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center">
                    <FaUser className="mr-1" /> {post.author}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <FaTags className="mr-1" /> {post.tags}
                  </span>
                </div>
                <button className="mt-4 w-full py-2 border border-[#8cc640] text-[#8cc640] font-medium rounded-lg hover:bg-[#8cc640] hover:text-white transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#8cc640] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for the latest blog posts and sports equipment news</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#8cc640] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;