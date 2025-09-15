import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from "../assets/logo.png";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // SVG circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="Sanitaryware Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white text-2xl font-bold tracking-wide">
              Sanitary Dealer
            </span>
          </div>
          <p>
            We provide high-quality sanitaryware solutions for your home and commercial spaces. Premium faucets, sinks, showers, and tiles.
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Office</h4>
          <p>
            Showroom & Office -<br />
            123 Bath Street, Suite 45<br />
            London, UK 10001
          </p>
          <a href="mailto:info@sanitarydealer.com" className="block mt-4 text-white underline">
            info@sanitarydealer.com
          </a>
          <p className="text-white mt-2">+44-1234-567890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/pages" className="hover:text-white transition">About</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Get in Touch */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3"><FaFacebookF className="text-white" /><span>Facebook</span></li>
            <li className="flex items-center space-x-3"><FaInstagram className="text-white" /><span>Instagram</span></li>
            <li className="flex items-center space-x-3"><FaLinkedinIn className="text-white" /><span>LinkedIn</span></li>
            <li className="flex items-center space-x-3"><FaTwitter className="text-white" /><span>Twitter</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-500">© 2025 Sanitary Dealer. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4 text-gray-500">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> |{' '}
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>

      {/* Back to top button with progress ring */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#0077b6] text-white flex items-center justify-center hover:bg-[#005f8a] transition-transform duration-300 transform hover:scale-110"
        >
          ↑
          <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 48 48" fill="none">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#00c6ff"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.35s ease' }}
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
