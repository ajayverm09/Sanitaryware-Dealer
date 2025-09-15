import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HomeHero = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="px-6 py-16 md:flex md:items-center md:gap-16 bg-gray-50">
      {/* Left Content */}
      <motion.div
        className="md:flex-1 order-2 md:order-1"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <p className="text-orange-600 uppercase tracking-widest mb-3 text-sm font-semibold">
          Welcome to AquaLux
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          Premium Sanitaryware for{" "}
          <span className="inline-block rounded-full overflow-hidden w-16 h-10 align-middle">
            <img
              src="https://static.vecteezy.com/system/resources/previews/030/760/981/large_2x/serenity-and-light-modern-bathroom-design-featuring-grand-french-windows-photo.jpg"
              alt="Bathroom Design"
              className="w-full h-40 md:h-64 object-cover"
            />
          </span>{" "}
          Modern Living
        </h1>
        <p className="text-gray-600 mb-10 max-w-lg">
          Transform your bathroom into a luxury experience with our premium
          sanitaryware collections — designed for comfort, durability, and style.
        </p>
        <div className="flex items-center gap-6">
          <Link to="services" smooth={true} duration={300}>
            <button className="bg-orange-600 cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition">
              Our Products
            </button>
          </Link>
          <a
            href="https://youtu.be/iY74wuKEEgE?si=chTVeDnjcNCUgoe0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <button className="border cursor-pointer border-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              <svg
                className="w-7 h-7 text-orange-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.518-3.752v7.584l6.518-3.832z"
                />
              </svg>
            </button>
            <span className="text-gray-700 font-medium">Watch Video</span>
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:flex-1 mt-12 md:mt-0 order-1 md:order-2"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/760/981/large_2x/serenity-and-light-modern-bathroom-design-featuring-grand-french-windows-photo.jpg"
          alt="Luxury Bathroom"
          className="rounded-lg object-cover w-full h-auto max-h-[480px] shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HomeHero;
