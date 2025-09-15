import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Form from '../Components/Form';
import { motion } from 'framer-motion';

// React Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Replace with your actual coordinates
const dealAcreHisaCoords = [40.7128, -74.006]; // NYC as placeholder

const ContactSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Grid with Form and Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 mb-16">
        {/* Left - Form */}
        <motion.div variants={itemVariants} className="w-full mt-[10%]">
          <Form />
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div variants={itemVariants} className="text-gray-700 px-4 sm:px-0 flex flex-col gap-10">
          <div>
            <p className="uppercase text-sm font-semibold text-[#b18050] mb-3 tracking-widest">
              Contact Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Get in <span className="text-[#b18050]">Touch</span>
            </h2>
            <p className="text-gray-500 mb-12 max-w-lg sm:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima et iusto voluptatibus voluptates, assumenda ex.
            </p>

            <div className="space-y-8 max-w-lg sm:max-w-md">
              {[{
                icon: <FiPhone className="text-[#b18050] w-6 h-6" />,
                title: "Phone",
                lines: ["012 345 678 9101", "(208) 555-0112"]
              }, {
                icon: <FiMail className="text-[#b18050] w-6 h-6" />,
                title: "Email",
                lines: ["Company@mail.com", "sara.cruz@example.com"]
              }, {
                icon: <FiMapPin className="text-[#b18050] w-6 h-6" />,
                title: "Location",
                lines: ["4517 Manhattan Ave. New Town", "New Jersey, New York, USA"]
              }].map(({ icon, title, lines }, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-6 bg-white p-5 rounded-lg shadow-lg cursor-default hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-[#b18050]/10 p-3 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width Map */}
      <motion.div
        className="w-full h-72 sm:h-96 rounded-lg shadow-lg overflow-hidden"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <MapContainer center={dealAcreHisaCoords} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-lg">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={dealAcreHisaCoords}>
            <Popup>
              Deal Acre Hisa <br /> 4517 Manhattan Ave. New Town.
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
