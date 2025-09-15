import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Formed from "../Components/Form";
import logo from "../assets/logo.png";

const menu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/pages" },
  { label: "Products", path: "/products" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== "/") navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const desktopLinksVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.4, ease: "easeOut" },
    }),
  };

  const desktopButtonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.4 } },
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50 px-[2%]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Sanitaryware Logo"
              className="h-12 w-auto md:h-14 lg:h-16 object-contain"
            />
            <span className="text-[#0077B6] text-xl font-bold tracking-wide">
              Sanitary Dealer
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {menu.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={desktopLinksVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `uppercase text-sm font-medium transition relative ${
                        isActive
                          ? "text-[#0077b6] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#0077b6]"
                          : "text-gray-600 hover:text-[#0077b6] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0077b6]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={desktopButtonVariants}
          >
            <button
              onClick={openModal}
              className="bg-[#0077b6] text-white px-6 py-2 cursor-pointer text-sm font-semibold rounded-sm hover:bg-[#023e8a] transition flex items-center gap-2"
            >
              REQUEST A QUOTE <FiArrowRight />
            </button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white px-4 pb-6"
            >
              <ul className="flex flex-col gap-4 pt-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-base font-medium ${
                          isActive
                            ? "text-[#0077b6] underline underline-offset-4"
                            : "text-gray-600 hover:text-[#0077b6]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openModal();
                  }}
                  className="mt-4 bg-[#0077b6] text-white px-6 py-2 w-full rounded-sm font-semibold hover:bg-[#023e8a] transition flex items-center justify-center gap-2"
                >
                  REQUEST A QUOTE <FiArrowRight />
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-gray-900 text-xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-[#0077b6]">
                Request a Quote
              </h2>
              <Formed />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
