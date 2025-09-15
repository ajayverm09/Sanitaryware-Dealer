import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of sanitaryware products do you offer?",
    answer:
      "We provide a wide range of sanitaryware including wash basins, toilets, faucets, bathtubs, showers, and bathroom accessories.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we offer professional installation services to ensure proper fitting and long-lasting performance of all our products.",
  },
  {
    question: "Are your products water-efficient?",
    answer:
      "Absolutely. Our sanitaryware products are designed with modern technology to ensure water-saving without compromising performance.",
  },
  {
    question: "Do you provide warranty on products?",
    answer:
      "Yes, all our products come with a manufacturer’s warranty to ensure peace of mind and quality assurance.",
  },
];

const images = [
  "https://images.pexels.com/photos/3316926/pexels-photo-3316926.jpeg",
  "https://images.pexels.com/photos/14002094/pexels-photo-14002094.jpeg",
  "https://images.pexels.com/photos/8134780/pexels-photo-8134780.jpeg",
  "https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-[#C1833F] uppercase tracking-widest text-sm md:text-base font-semibold">
          FAQs
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#fff4e6] shadow-lg border-[#C1833F]"
                  : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full justify-between items-center py-5 px-6 text-left focus:outline-none"
              >
                <span
                  className={`font-semibold text-lg md:text-xl transition-colors ${
                    openIndex === index ? "text-[#C1833F]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180 text-[#C1833F]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="p-6 text-gray-700 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`FAQ image ${i + 1}`}
              className="rounded-lg shadow-md object-cover h-48 md:h-56 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
