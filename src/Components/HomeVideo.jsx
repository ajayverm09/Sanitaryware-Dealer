import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  // Modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
  };

  // Pulse animation
  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.7, 0.4, 0.7],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Background showroom image */}
      <img
        src="https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg"
        alt="Sanitaryware Showroom"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Premium Sanitaryware
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Explore our wide range of modern bathroom fittings and luxury
          sanitaryware collections.
        </p>

        {/* Play Button */}
        <button
          onClick={handleToggle}
          aria-label="Play video"
          className="relative"
        >
          {/* Outer pulsing circle */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 rounded-full border border-white"
            variants={pulseVariants}
            animate="animate"
          />
          {/* Static circle */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl relative z-20 cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-orange-500 ml-1" />
          </div>
        </button>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-[1000] flex items-center justify-center p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              {/* Close button */}
              <button
                onClick={handleToggle}
                aria-label="Close video"
                className="absolute top-4 right-4 text-white text-4xl z-20 hover:text-orange-500 transition-colors duration-300"
              >
                <FiX />
              </button>

              {/* YouTube video embed */}
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FT3ODSg1GFE?autoplay=1"
                  title="Sanitaryware Showroom Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSection;
