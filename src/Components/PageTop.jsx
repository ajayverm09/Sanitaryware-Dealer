import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const PageTop = ({ url, header, currentPage, breadcrumbUrl }) => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0"
      style={{
        backgroundImage: `url("${url}")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          variants={itemVariants}
        >
          {header}
        </motion.h1>

        <motion.nav
          className="space-x-2 text-xs sm:text-sm flex justify-center items-center"
          aria-label="Breadcrumb"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className="underline hover:text-yellow-400 transition">
              Home
            </Link>
          </motion.div>

          <motion.span
            aria-hidden="true"
            className="mx-2 select-none"
            variants={itemVariants}
          >
            ➜
          </motion.span>

          <motion.div variants={itemVariants}>
            <Link
              to={breadcrumbUrl}
              aria-current="page"
              className="underline font-semibold hover:text-yellow-400 transition"
            >
              {currentPage}
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default PageTop;
