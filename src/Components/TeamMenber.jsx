import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const DealerCard = ({ image, name, location, phone, email }) => {
  return (
    <div className="relative group w-64 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      {/* Dealer Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white px-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-1 text-red-400" /> {location}
        </p>

        {/* Contact Options */}
        <div className="flex space-x-3 text-lg mt-3">
          <a href={`tel:${phone}`} className="hover:text-green-400 transition">
            <FaPhoneAlt />
          </a>
          <a href={`mailto:${email}`} className="hover:text-yellow-300 transition">
            <FaEnvelope />
          </a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealerCard;
