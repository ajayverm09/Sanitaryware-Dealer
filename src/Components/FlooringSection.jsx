import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const SanitarywareSection = () => {
  const stats = [
    { number: "250+", label: "Sanitaryware Products" },
    { number: "120+", label: "Projects Delivered" },
    { number: "75+", label: "Dealer Network" },
    { number: "20+", label: "Years of Trust" },
  ];

  return (
    <motion.section
      className="bg-[#2e1e0f] min-h-screen flex flex-col justify-center px-6 md:px-20 py-16 relative text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
        {/* Left Content */}
        <motion.div className="md:w-1/2" variants={contentVariants}>
          <p className="text-[#c58b3c] tracking-widest text-sm mb-3">WHY CHOOSE US</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Elevating bathrooms with{" "}
            <span className="text-[#c58b3c]">premium sanitaryware</span>
          </h1>
          <p className="mt-6 text-gray-200 leading-relaxed text-base sm:text-lg">
            We provide top-quality sanitaryware, faucets, and bathroom fittings 
            that blend durability with elegance. Trusted by architects, interior 
            designers, and homeowners, our products redefine bathroom luxury 
            and functionality.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 cursor-pointer bg-white text-[#2e1e0f] px-6 py-3 rounded-sm font-semibold hover:bg-[#c58b3c] hover:text-white transition"
            >
              CONTACT US
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-md w-full mt-12 md:mt-0"
          variants={statsVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="font-bold"
              custom={index}
              variants={statItemVariants}
            >
              <h2 className="text-3xl sm:text-4xl font-medium">{stat.number}</h2>
              <p className="mt-1 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SanitarywareSection;
