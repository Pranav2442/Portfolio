import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { achievements } from '../constants';


const AchievementsShowcase = () => {
  const [rows, setRows] = useState([]);
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const updateLayout = () => {
      let cols = 4;
      if (window.innerWidth < 1024) cols = 3;
      if (window.innerWidth < 768) cols = 2;
      if (window.innerWidth < 640) cols = 1;
      setColumnCount(cols);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const groupedRows = [];
    for (let i = 0; i < achievements.length; i += columnCount) {
      groupedRows.push(achievements.slice(i, i + columnCount));
    }
    setRows(groupedRows);
  }, [columnCount, achievements]);

  return (
    <div className="w-full py-10">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative inline-block">
          <motion.h2 
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Achievements
          </motion.h2>
        </div>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-6 mb-6">
          {row.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative group flex-1 min-w-[280px]`}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r ${achievement.color}
                rounded-xl opacity-0 group-hover:opacity-20 blur-xl
                transition-all duration-500 -z-10
              `} />
              
              <div className="h-full rounded-xl p-6
                            border border-white/10 group-hover:border-white/20
                            transition-all duration-300
                            backdrop-blur-sm bg-white/5">
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div 
                    className={`
                      w-16 h-16 rounded-lg bg-gradient-to-r ${achievement.color}
                      flex items-center justify-center
                      group-hover:shadow-lg group-hover:shadow-violet-500/25
                      transition-all duration-300
                    `}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <p className="text-white/80 text-lg font-medium leading-tight
                               group-hover:text-white transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(AchievementsShowcase);