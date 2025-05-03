import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About <span className="text-[#8cc640]">EquiSports</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Empowering athletes with premium sports equipment since 2015
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  Founded by former professional athletes, EquiSports began as a small warehouse with a simple mission: to provide high-quality sports equipment at fair prices.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started as a passion project has grown into one of the most trusted names in sports equipment, serving over 50,000 satisfied customers nationwide.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
                  alt="Sports equipment warehouse"
                  className="rounded-lg shadow-md w-full h-auto max-h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTrophy className="text-4xl mb-4 text-[#8cc640]" />,
                title: "Excellence",
                desc: "We source only the highest quality equipment from trusted manufacturers"
              },
              {
                icon: <FaUsers className="text-4xl mb-4 text-[#8cc640]" />,
                title: "Community",
                desc: "We support local sports teams and youth athletic programs"
              },
              {
                icon: <FaShieldAlt className="text-4xl mb-4 text-[#8cc640]" />,
                title: "Integrity",
                desc: "Honest pricing and transparent business practices"
              },
              {
                icon: <FaShippingFast className="text-4xl mb-4 text-[#8cc640]" />,
                title: "Service",
                desc: "Fast shipping and exceptional customer support"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet The Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Former professional basketball player with 10+ years experience",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Sarah Williams",
                role: "Head of Operations",
                bio: "Sports equipment specialist with MBA in Sports Management",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                bio: "Former Olympic athlete and equipment tester",
                img: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#8cc640] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;