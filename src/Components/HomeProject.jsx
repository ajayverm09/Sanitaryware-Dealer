import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Luxury Bathroom Setup",
    image: "https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg",
  },
  {
    name: "Modern Wash Basin Design",
    image: "https://images.pexels.com/photos/7893133/pexels-photo-7893133.jpeg",
  },
  {
    name: "Premium Bathtub Installation",
    image: "https://images.pexels.com/photos/7227646/pexels-photo-7227646.jpeg",
  },
  {
    name: "Designer Faucets Collection",
    image: "https://images.pexels.com/photos/6580374/pexels-photo-6580374.jpeg",
  },
  {
    name: "Complete Bathroom Renovation",
    image: "https://images.pexels.com/photos/16113326/pexels-photo-16113326.jpeg ",
  },
  {
    name: "Showroom Sanitaryware Display",
    image: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
  },
];

// Container with staggered children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Card animations
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Overlay animation
const overlayVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// Image hover effect
const imageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } },
};

const HomeProject = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-10 md:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest">
            Recent Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 md:mt-0">
            Transforming Bathrooms with <br className="hidden sm:block" />
            Elegance & Quality
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-md cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileHover="hover"
            animate="visible"
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover rounded-md"
              variants={imageVariants}
              draggable={false}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-center py-4 font-semibold rounded-b-md"
              variants={overlayVariants}
              initial="hidden"
            >
              {project.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeProject;
