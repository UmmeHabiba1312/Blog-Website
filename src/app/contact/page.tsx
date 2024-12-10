"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save data)
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-cyan-600">Contact Us</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          className="dark:bg-gray-200 p-8 shadow-lg rounded-lg border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Type your message here"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-cyan-600 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-400">Email</p>
              <p className="text-gray-500">info@techtales.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-cyan-600 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-400">Phone</p>
              <p className="text-gray-500">+123 456 7890</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-cyan-600 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-400">Location</p>
              <p className="text-gray-500">123 TechTales Street, Tech City, TC 12345</p>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-cyan-600 text-3xl hover:text-cyan-700" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-cyan-600 text-3xl hover:text-cyan-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
