import React from "react";
import { FaToilet, FaHandsWash, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const infoBoxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
  },
};

const HomeChoose = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="space-y-10"
      >
        <motion.p
          className="text-[#C5853A] uppercase text-sm tracking-widest mb-3 font-semibold"
          variants={itemVariants}
        >
          WHY CHOOSE US
        </motion.p>

        <motion.h2
          className="text-5xl font-extrabold text-black leading-tight"
          variants={itemVariants}
        >
          Elegant Sanitaryware for Every Bathroom
        </motion.h2>

        <div className="space-y-8">
          {/* Feature 1 */}
          <motion.div className="flex gap-5 items-start" variants={itemVariants}>
            <div className="text-[#C5853A] text-3xl mt-1">
              <FaToilet />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Premium Quality Products</h3>
              <p className="text-gray-500 max-w-md">
                We provide durable sanitaryware crafted with the finest materials,
                ensuring long-lasting performance and style.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="flex gap-5 items-start" variants={itemVariants}>
            <div className="text-[#C5853A] text-3xl mt-1">
              <FaHandsWash />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Modern & Hygienic Designs</h3>
              <p className="text-gray-500 max-w-md">
                Our collections are designed to bring elegance and hygiene to your
                bathrooms, blending modern aesthetics with functionality.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="flex gap-5 items-start" variants={itemVariants}>
            <div className="text-[#C5853A] text-3xl mt-1">
              <FaMoneyBillWave />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Affordable Price Range</h3>
              <p className="text-gray-500 max-w-md">
                Get world-class sanitaryware at prices that suit every budget,
                without compromising on quality or design.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div className="flex gap-5 items-start" variants={itemVariants}>
            <div className="text-[#C5853A] text-3xl mt-1">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Warranty & After-Sales Support</h3>
              <p className="text-gray-500 max-w-md">
                All our products come with a warranty and reliable after-sales service
                for complete peace of mind.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image and info box */}
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img
          src="https://i.pinimg.com/736x/0f/c6/ba/0fc6ba337c7a5d79b4c196fa0ffa8ff9.jpg"
          alt="Modern Bathroom"
          className="rounded-lg shadow-lg w-full object-cover max-h-[500px]"
        />
        <motion.div
          className="absolute bottom-0 right-0 bg-[#C1833F] p-6 rounded-tl-lg flex flex-col items-center gap-3 text-white shadow-lg w-44"
          variants={infoBoxVariants}
        >
          <FaToilet size={32} />
          <p className="font-semibold text-lg">Since 1995</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeChoose;
