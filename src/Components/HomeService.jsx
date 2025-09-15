import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";

const HomeService = () => {
  const cardData = [
    {
      title: "Luxury Bathroom Fittings",
      description:
        "Discover premium faucets, showers, and fittings designed for modern lifestyles.",
      icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
    },
    {
      title: "Designer Wash Basins",
      description:
        "Elegant basins with cutting-edge designs to add a stylish touch to your bathrooms.",
      icon: "https://cdn-icons-png.flaticon.com/512/2327/2327615.png",
    },
    {
      title: "Sanitaryware Showroom",
      description:
        "Visit our showroom to explore a wide range of sanitaryware collections.",
      icon: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
    },
    {
      title: "Complete Bathroom Solutions",
      description:
        "From design to installation, we provide end-to-end bathroom renovation services.",
      icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    },
    {
      title: "Spa & Wellness Products",
      description:
        "Luxury bathtubs, Jacuzzi, and wellness fittings to elevate your bathing experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/5230/5230863.png",
    },
    {
      title: "After-Sales Support",
      description:
        "We provide reliable after-sales support and maintenance for all our products.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828649.png",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (isMobile) {
      setVisibleCards(cardData.length);
    } else {
      setVisibleCards(0);
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev < cardData.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [inView, isMobile, cardData.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-orange-400 font-semibold tracking-wide uppercase">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
          Elevating Your Bathroom Experience
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardData.slice(0, visibleCards).map((card, index) => (
          <motion.div
            key={index}
            className="relative group bg-white shadow-md p-8 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-10 h-10 bg-orange-400/70 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img src={card.icon} alt={card.title} className="w-12 h-12 mb-6" />

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>

            <p className="text-gray-600 mb-6">{card.description}</p>

            <Link to="contact" smooth={true} duration={300}>
              <div className="flex items-center gap-2 cursor-pointer text-black font-medium transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                <span>Read More</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;
