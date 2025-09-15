import React, { useState } from 'react';

const Formed = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    alert('Your inquiry has been received! Our sanitaryware expert will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-[#C1833F] uppercase text-sm tracking-widest font-semibold mb-2">
          Contact Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in Touch with Our Sanitaryware Experts
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Have questions about our bathroom fittings, wash basins, or sanitaryware solutions? 
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-lg shadow-lg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#C1833F] focus:ring-2 focus:ring-[#C1833F] outline-none text-gray-700 placeholder-gray-400 transition"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#C1833F] focus:ring-2 focus:ring-[#C1833F] outline-none text-gray-700 placeholder-gray-400 transition"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#C1833F] focus:ring-2 focus:ring-[#C1833F] outline-none text-gray-700 placeholder-gray-400 transition"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#C1833F] focus:ring-2 focus:ring-[#C1833F] outline-none text-gray-700 placeholder-gray-400 resize-none transition"
          required
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-[#C1833F] cursor-pointer text-white font-semibold px-6 py-3 rounded hover:bg-[#a4723c] transition"
        >
          Send Inquiry
        </button>
      </form>
    </section>
  );
};

export default Formed;
