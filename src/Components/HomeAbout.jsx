import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  offscreen: { opacity: 0, x: -80 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 2,
    },
  },
};

const textVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const statVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const HomeAbout = () => {
  const controls = useAnimation();
  const statsRef = React.useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (inView) controls.start("onscreen");
  }, [inView, controls]);

  return (
    <motion.section
      className="bg-gray-100 py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
      initial="offscreen"
      animate={controls}
      variants={containerVariants}
    >
      {/* Left Images */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center md:justify-start"
        variants={imageVariants}
      >
        <img
          src="https://images.pexels.com/photos/4450337/pexels-photo-4450337.jpeg"
          alt="Modern bathroom interior"
          className="rounded-lg shadow-lg w-72 md:w-96 object-cover"
        />
        <img
          src="https://images.pexels.com/photos/12251075/pexels-photo-12251075.jpeg"
          alt="Stylish sink basin"
          className="rounded-lg shadow-xl w-56 md:w-72 object-cover absolute top-16 md:top-20 left-28 md:left-36 border-4 border-white"
          style={{ zIndex: 10 }}
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div className="w-full md:w-1/2 space-y-6" variants={textVariants}>
        <motion.p
          className="text-sm uppercase text-[#C1833F] font-semibold tracking-widest"
          variants={statVariants}
        >
          About Us
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          variants={statVariants}
        >
          Premium Sanitaryware for Modern Living
        </motion.h2>
        <motion.p className="text-gray-600 max-w-xl" variants={statVariants}>
          We provide high-quality sanitaryware solutions that combine style,
          comfort, and durability. From elegant wash basins to modern bathroom
          fittings, we ensure your spaces reflect luxury and hygiene with every
          detail.
        </motion.p>

        {/* Stats */}
        <div className="flex gap-16" ref={statsRef}>
          <motion.div variants={statVariants}>
            <h3 className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={950} duration={2} suffix="+" />}
            </h3>
            <p className="font-semibold text-gray-700">Projects Delivered</p>
          </motion.div>

          <motion.div variants={statVariants}>
            <h3 className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={700} duration={2} suffix="+" />}
            </h3>
            <p className="font-semibold text-gray-700">Happy Clients</p>
          </motion.div>
        </div>

        {/* Button */}
        <Link to="/about">
          <motion.button
            className="bg-[#C1833F] text-white cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-[#a4723c] transition"
            variants={statVariants}
          >
            Explore More
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeAbout;
