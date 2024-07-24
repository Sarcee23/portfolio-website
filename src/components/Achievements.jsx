import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { GrAchievement } from "react-icons/gr";

const achievements = [
  {
    icon: <FaTrophy />,
    text: "Won the Best UI/UX Award at 'Hackforge', hackathon of JU Srijan Techfest.",
  },
  {
    icon: <FaMedal />,
    text: "Qualified to the finals and came 13th out of 1000+ teams at IIT Kgp Data Science Hackathon",
  },
  // Add more achievements as needed
];

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="bg-gradient-to-br from-[#9BEC00] to-[#7CB342] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
          }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <h2 className="text-6xl font-bold font-['Neue_Montreal'] text-center text-[#254336]">
            Achievements
          </h2>
          <GrAchievement className='text-6xl text-[#254336]' />
        </motion.div>
        <motion.ul 
          className="space-y-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.li 
              key={index} 
              className="flex items-center space-x-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#254336] rounded-full text-3xl text-[#FFF455]">
                {achievement.icon}
              </div>
              <span className="text-xl text-[#254336] font-['Neue_Montreal'] font-semibold">{achievement.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Achievements;