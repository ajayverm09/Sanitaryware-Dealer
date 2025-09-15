import React from "react";
import { motion } from "framer-motion";
import DealerCard from "./TeamMenber"; 

const dealers = [
  {
    name: "Modern Bath Gallery",
    location: "Delhi, India",
    image: "https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg",
    phone: "+911234567890",
    email: "info@modernbath.com",
  },
  {
    name: "Aqua Luxe Showroom",
    location: "Mumbai, India",
    image: "https://images.pexels.com/photos/6585586/pexels-photo-6585586.jpeg",
    phone: "+919876543210",
    email: "contact@aqualuxe.com",
  },
  {
    name: "Elite Sanitaryware",
    location: "Bangalore, India",
    image: "https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg",
    phone: "+919112233445",
    email: "sales@elitesanitary.com",
  },
  {
    name: "Premium Bath Fittings",
    location: "Chennai, India",
    image: "https://images.pexels.com/photos/7546317/pexels-photo-7546317.jpeg",
    phone: "+919556677889",
    email: "support@premiumbath.com",
  },
];

// Animation for each card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const DealerSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">
        Our Trusted Dealers
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Explore our network of premium sanitaryware dealers across India. Find
        the nearest showroom and connect with our trusted partners.
      </p>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {dealers.map((dealer, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center cursor-pointer rounded-lg"
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <DealerCard
              name={dealer.name}
              location={dealer.location}
              image={dealer.image}
              phone={dealer.phone}
              email={dealer.email}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DealerSection;
