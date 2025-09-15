import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

const BlogCard = ({ id, image, date, title, description }) => {
  return (
    <motion.div
      className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-md mx-auto md:mx-0 hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        {/* Date */}
        <p className="text-sm text-[#0077b6] mb-2">{date}</p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Read More Button */}
        <div>
          <Link
            to={`/blog/${id}`}
            className="inline-block text-[#0077b6] font-semibold hover:underline hover:text-[#023e8a] transition duration-300"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
