import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    option: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <Navbar />
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h1>

        {/* Top Section: Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column: Enquiry & Timings */}
          <div className="bg-[#eef5ff] p-8 rounded-xl shadow-sm border border-blue-100 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-6">Enquiry</h2>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 mt-1">📞</span>
                  <div>
                    <p className="font-medium">+91 89788 91705</p>
                    <p className="font-medium">+91 89788 91703</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-blue-600">✉️</span>
                  <p className="font-medium text-blue-800 hover:underline cursor-pointer">
                    edu@novanectar.co.in
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-blue-600 mt-1">📍</span>
                  <p className="font-medium">
                    GMS Road Dehradun Uttarakhand, India
                  </p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="border-t border-blue-200 pt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Timings</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Monday to Friday</span> - 8:00 am to 8:00 pm</p>
                <p><span className="font-medium">Saturday to Sunday</span> - 9:00 am to 7:00 pm</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bg-[#eef5ff] p-8 rounded-xl shadow-sm border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                  required
                />
              </div>

              <div>
                <select
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm appearance-none"
                  required
                >
                  <option value="" disabled hidden>Please choose an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="course">Course Details</option>
                  <option value="internship">Internship Program</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm shadow-md mt-6"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Map Component */}
        <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 relative h-96">
          <iframe
            title="NovaNectar Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6461942004!2d78.012543!3d30.316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929faaa555555%3A0x2bddeedb3d6cb413!2sGMS%20Road%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;