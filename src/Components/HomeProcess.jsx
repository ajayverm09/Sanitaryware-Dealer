import React from "react";
import { ShowerHead, PackageOpen, Wrench, Home } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: <ShowerHead size={28} />,
    title: "01. Choose Products",
    description:
      "Select from our wide range of sanitaryware, fittings, and bathroom accessories.",
  },
  {
    icon: <PackageOpen size={28} />,
    title: "02. Showroom Consultation",
    description:
      "Visit our showroom or connect online to finalize designs and styles for your bathroom.",
  },
  {
    icon: <Wrench size={28} />,
    title: "03. Installation",
    description:
      "Our experts ensure professional installation with precision and durability.",
  },
  {
    icon: <Home size={28} />,
    title: "04. Final Bathroom Setup",
    description:
      "Experience your elegant bathroom, designed with comfort, quality, and luxury.",
  },
];

// Animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomeProcess = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center max-w-7xl mx-auto">
      <p className="text-sm text-orange-600 font-medium tracking-widest mb-3 uppercase">
        Our Process
      </p>
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        How We Deliver Your Dream Bathroom
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-16">
        From product selection to final setup, we make the entire process
        seamless, ensuring you get the best quality sanitaryware and service.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {processSteps.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-5 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="border border-orange-600 rounded-md p-4 text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer">
              {icon}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-500 text-sm max-w-xs">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeProcess;
