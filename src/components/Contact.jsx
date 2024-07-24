import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaClipboardList, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide the success message after a few seconds (optional)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }
  };

  return (
    <motion.div
      ref={contactRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="w-full max-w-2xl mx-auto p-12 mt-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div className="flex flex-col" whileHover="focus" whileFocus="focus">
          <label htmlFor="name" className="font-semibold text-white mb-2 flex items-center">
            <FaUser className="mr-2" /> Name
          </label>
          <motion.input
            variants={inputVariants}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border-2 border-white bg-white bg-opacity-20 p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition duration-300"
            required
          />
        </motion.div>
        <motion.div className="flex flex-col" whileHover="focus" whileFocus="focus">
          <label htmlFor="email" className="font-semibold text-white mb-2 flex items-center">
            <FaEnvelope className="mr-2" /> Email Address
          </label>
          <motion.input
            variants={inputVariants}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border-2 border-white bg-white bg-opacity-20 p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition duration-300"
            required
          />
        </motion.div>
        <motion.div className="flex flex-col" whileHover="focus" whileFocus="focus">
          <label htmlFor="subject" className="font-semibold text-white mb-2 flex items-center">
            <FaClipboardList className="mr-2" /> Subject
          </label>
          <motion.input
            variants={inputVariants}
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border-2 border-white bg-white bg-opacity-20 p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition duration-300"
            required
          />
        </motion.div>
        <motion.div className="flex flex-col" whileHover="focus" whileFocus="focus">
          <label htmlFor="message" className="font-semibold text-white mb-2 flex items-center">
            <FaCommentAlt className="mr-2" /> Message
          </label>
          <motion.textarea
            variants={inputVariants}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            className="border-2 border-white bg-white bg-opacity-20 p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 transition duration-300 resize-none"
            required
          ></motion.textarea>
        </motion.div>
        <motion.button 
          type="submit" 
          className="w-full bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-center text-white"
        >
          Message successfully delivered!
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;
