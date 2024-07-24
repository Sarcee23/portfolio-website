import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";

const projects = [
  {
    title: "Ecommerce Website",
    description: "MERN Stack Fullstack project for an ecommerce website",
    link: "https://github.com/Sarcee23/ecommerce-website-proto",
    color: "#FF6B6B",
  },
  {
    title: "CropDoc - Crop Disease Detector",
    description: "React Native project involving DL to predict crop diseases from images.",
    link: "https://github.com/Sarcee23/CropDoc",
    color: "#4ECDC4",
  },
  {
    title: "2D fighter game",
    description: "Game coded in pygame, inspired by Street Fighter series.",
    link: "https://github.com/Sarcee23/StreetFighterClone",
    color: "#FFD93D",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

const Projects = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + projects.length) % projects.length,
      newDirection,
    ]);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-20">
      <div className='flex items-center justify-center gap-5 mb-16'>
        <h1 className="text-6xl font-bold">My Projects</h1>
        <GoProjectSymlink className="text-6xl"/>
      </div>
      <div className="relative w-full max-w-4xl h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <div 
              className="bg-gray-800 p-10 rounded-2xl shadow-2xl h-full flex flex-col justify-between"
              style={{ borderLeft: `8px solid ${projects[page].color}` }}
            >
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: projects[page].color }}>{projects[page].title}</h2>
                <p className="text-xl mb-8 text-gray-300">{projects[page].description}</p>
              </div>
              <motion.a 
                href={projects[page].link} 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-gray-900 font-semibold w-fit"
                style={{ backgroundColor: projects[page].color }}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <FaExternalLinkAlt />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-12 flex gap-4">
        <motion.button 
          onClick={() => paginate(-1)} 
          className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowLeft className="text-2xl" />
        </motion.button>
        {projects.map((_, index) => (
          <motion.div 
            key={index} 
            className={`w-3 h-3 rounded-full ${index === page ? 'bg-white' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
        <motion.button 
          onClick={() => paginate(1)} 
          className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowRight className="text-2xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;