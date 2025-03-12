import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { textVariant } from "../utils/motion";

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
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
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
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >

        <motion.h2
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto mt-3 sm:mt-4 rounded-full relative overflow-hidden mb-5"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/50"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />
        </motion.div>
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
              className={`relative group flex-1 min-w-[280px] perspective-1000`}
            >
              <div
                className={`
                absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10
                rounded-xl opacity-0 group-hover:opacity-20 blur-xl
                transition-all duration-500 -z-10
              `}
              />

              <div
                className="h-full rounded-xl p-6
                            border border-slate-700/30 group-hover:border-violet-500/50
                            transition-all duration-300
                            backdrop-blur-sm bg-[rgba(17,24,39,0.8)]"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    className={`
                      w-16 h-16 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500
                      flex items-center justify-center
                      group-hover:shadow-lg group-hover:shadow-violet-500/25
                      transition-all duration-300
                    `}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <p
                    className="text-white/80 text-lg font-medium leading-tight
                               group-hover:text-white transition-colors duration-300"
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .group:hover {
          transform: rotateX(4deg) rotateY(-4deg);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(AchievementsShowcase);
