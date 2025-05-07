import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Navbar from '../../RootComponents/Navbar/Navbar';

const ContactUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#8cc640]">Us</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              We're here to help! Reach out with any questions or concerns.
            </p>
          </motion.div>

          {/* Contact Information and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl shadow-xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="text-[#8cc640] text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (234) 567-890</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-[#8cc640] text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:support@equisports.com"
                      className="text-gray-300 hover:text-[#8cc640] transition-colors"
                    >
                      support@equisports.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#8cc640] text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-300">123 Sports Ave, Suite 100</p>
                    <p className="text-gray-300">Sportstown, ST 12345, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-[#8cc640] text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Support Hours</h3>
                    <p className="text-gray-300">24/7 Customer Support</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-[#8cc640] focus:ring-[#8cc640] sm:text-sm p-3"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-[#8cc640] focus:ring-[#8cc640] sm:text-sm p-3"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-[#8cc640] focus:ring-[#8cc640] sm:text-sm p-3"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-[#8cc640] focus:ring-[#8cc640] sm:text-sm p-3"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8cc640] hover:bg-[#7ab536] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cc640]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9008269863424!2d90.38891331540276!3d23.750906584589344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087a463b7%3A0x1b5b15b683e2b3d!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1698267890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Dhaka Location"
              ></iframe>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-[#8cc640] rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 to provide support for all your sports equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-gray-800 text-[#8cc640] font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="mailto:support@equisports.com"
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#8cc640] transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;