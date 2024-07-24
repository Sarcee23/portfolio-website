import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const iconVariants = {
    hover: { 
      y: -5,
      transition: { duration: 0.3, yoyo: Infinity }
    }
  };

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="text-sm mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} | All rights reserved
        </motion.div>
        <div className="flex items-center space-x-6">
          {[
            { icon: FaGithub, href: "https://github.com/Sarcee23" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/subhayan-roy-chowdhury-769167228/" },
            { icon: FaEnvelope, href: "mailto:src230222004@gmail.com" }
          ].map((item, index) => (
            <motion.a 
              key={index}
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#9BEC00] transition-colors duration-300"
              whileHover="hover"
              variants={iconVariants}
            >
              <item.icon size={28} />
            </motion.a>
          ))}
        </div>
      </div>
      <motion.div 
        className="mt-6 text-center text-xs text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
         Subhayan Roy Chowdhury
      </motion.div>
    </footer>
  );
};

export default Footer;