import React from "react";
import { motion } from "framer-motion";
import { GiBathtub } from "react-icons/gi"; // Bathtub icon
import { FaFaucet } from "react-icons/fa"; // Faucet icon
import { MdOutlineBathroom } from "react-icons/md"; // Toilet / Bathroom icon

const cardsData = [
  {
    Icon: MdOutlineBathroom,
    header: "Premium Sanitaryware",
    text: "High-quality toilets, basins, and bathroom fittings designed for durability and style.",
  },
  {
    Icon: FaFaucet,
    header: "Stylish Faucets",
    text: "Modern faucets and taps that blend innovation, elegance, and water efficiency.",
  },
  {
    Icon: GiBathtub,
    header: "Luxury Bathtubs",
    text: "Transform bathrooms into spa-like retreats with our premium bathtub collection.",
  },
];

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardVariantsMobile = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.25, duration: 1.2 },
  },
};

const cardVariantsDesktop = {
  offscreen: { opacity: 0, x: -70 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.25, duration: 1.2 },
  },
};

const textVariants = {
  offscreen: { opacity: 0, y: 10 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Cards = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {cardsData.map(({ Icon, header, text }, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          variants={isMobile ? cardVariantsMobile : cardVariantsDesktop}
        >
          <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#61dafb]" />

          <motion.h3
            className="text-xl font-semibold text-gray-900"
            variants={textVariants}
          >
            {header}
          </motion.h3>

          <motion.p className="text-gray-600 max-w-xs" variants={textVariants}>
            {text}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
