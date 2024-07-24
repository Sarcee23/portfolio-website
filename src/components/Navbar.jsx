import React, { useState } from 'react';
import { motion } from 'framer-motion';
import srclogo3 from '../assets/images/srclogo3.png';

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const navItems = ["Projects", "Achievements", "About", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bg-zinc-900 z-[999] w-full px-8 py-4 font-['Neue Montreal'] flex justify-between items-center shadow-lg"
    >
      <motion.div 
        className='logoandname flex justify-between items-center gap-5'
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="logo">
          <img src={srclogo3} alt="Logo" className="w-16 h-16 rounded-full border-2 border-white shadow-glow" />
        </div>
        <div className="name text-2xl font-['Neue Montreal'] text-white font-bold">
          <h1>Subhayan Roy Chowdhury</h1>
        </div>
      </motion.div>

      <div className="links flex gap-8">
        {navItems.map((item, index) => (
          <motion.a 
            key={index} 
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className={`text-lg font-medium capitalize text-gray-300 hover:text-white transition-colors duration-300 ${index === navItems.length - 1 && "ml-8"}`}
            onHoverStart={() => setActiveLink(index)}
            onHoverEnd={() => setActiveLink(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
            {activeLink === index && (
              <motion.div
                className="h-0.5 bg-white"
                layoutId="underline"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;