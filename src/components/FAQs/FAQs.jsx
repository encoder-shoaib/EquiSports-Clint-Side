import { motion } from 'framer-motion';
import { FaChevronDown, FaShippingFast, FaExchangeAlt, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

const FAQs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqCategories = [
    {
      title: "Shipping & Delivery",
      icon: <FaShippingFast className="text-2xl mr-4 text-[#8cc640]" />,
      questions: [
        {
          question: "How long does delivery take?",
          answer: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping times vary by destination, typically taking 7-14 business days."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can track your package using our website or the carrier's tracking system."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      icon: <FaExchangeAlt className="text-2xl mr-4 text-[#8cc640]" />,
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging with all tags attached. Some equipment may have specific return conditions."
        },
        {
          question: "How do I initiate a return?",
          answer: "Log in to your account, go to 'My Orders' and select the item you wish to return. Follow the prompts to generate a return label and instructions."
        },
        {
          question: "Are there any non-returnable items?",
          answer: "For hygiene reasons, certain personal items like mouthguards and some protective gear cannot be returned unless defective."
        }
      ]
    },
    {
      title: "Product & Sizing",
      icon: <FaShieldAlt className="text-2xl mr-4 text-[#8cc640]" />,
      questions: [
        {
          question: "How do I choose the right size?",
          answer: "Each product page includes detailed sizing charts. For sports equipment like bats or rackets, we provide weight and size recommendations based on age and skill level."
        },
        {
          question: "Can I get advice on which product to choose?",
          answer: "Absolutely! Our sports equipment specialists are available via live chat or phone to help you select the perfect gear for your needs."
        },
        {
          question: "Do you offer customization?",
          answer: "Many of our products can be customized with team colors, logos, or personal engraving. Look for the 'Customize' option on product pages."
        }
      ]
    },
    {
      title: "Payments & Security",
      icon: <FaCreditCard className="text-2xl mr-4 text-[#8cc640]" />,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. We also offer installment payment options through select providers."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption and never store your full payment details on our servers. All transactions are processed through PCI-compliant payment gateways."
        },
        {
          question: "Do you offer discounts for teams or bulk orders?",
          answer: "Yes, we offer special pricing for teams, schools, and bulk purchases. Contact our sales team for customized quotes."
        }
      ]
    }
  ];

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
            Frequently Asked <span className="text-[#8cc640]">Questions</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex items-center bg-gray-100 p-6">
                {category.icon}
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="p-6"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                        <FaChevronDown className="text-[#8cc640] transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-3 text-gray-600">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-[#8cc640] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 max-w-2xl mx-auto">Our customer support team is available 24/7 to help you with any questions about our products or services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-white text-[#8cc640] font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
  );
};

export default FAQs;