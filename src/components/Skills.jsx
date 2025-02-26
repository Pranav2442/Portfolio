import React, { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Existing skill icons
const SkillIcons = {
  C: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <circle cx="25" cy="25" r="20" fill="#283593" />
      <text
        x="25"
        y="32"
        fontSize="24"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        C
      </text>
    </svg>
  ),
  "C++": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <circle cx="25" cy="25" r="20" fill="#5C6BC0" />
      <text
        x="25"
        y="32"
        fontSize="18"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        C++
      </text>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M25,5 L45,15 L45,35 L25,45 L5,35 L5,15 Z" fill="#F44336" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        JAVA
      </text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path
        d="M10,25 C10,15 20,15 25,15 C30,15 40,15 40,25 C40,35 30,35 25,35 C20,35 10,35 10,25"
        fill="#FFD54F"
      />
      <circle cx="18" cy="22" r="2" fill="black" />
      <circle cx="32" cy="22" r="2" fill="black" />
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="10" y="10" width="30" height="30" rx="5" fill="#00796B" />
      <text
        x="25"
        y="32"
        fontSize="16"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <polygon points="25,5 45,10 42,40 25,45 8,40 5,10" fill="#E44D26" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        HTML
      </text>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path
        d="M10,20 C15,10 25,15 25,25 C25,35 35,40 40,30"
        stroke="#06B6D4"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  ),
  Javascript: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="5" y="5" width="40" height="40" fill="#F7DF1E" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="black"
        textAnchor="middle"
        fontWeight="bold"
      >
        JS
      </text>
    </svg>
  ),
  "React Js": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <circle cx="25" cy="25" r="5" fill="#61DAFB" />
      <ellipse cx="25" cy="25" rx="15" ry="5" stroke="#61DAFB" fill="none" />
      <ellipse
        cx="25"
        cy="25"
        rx="15"
        ry="5"
        stroke="#61DAFB"
        fill="none"
        transform="rotate(60 25 25)"
      />
      <ellipse
        cx="25"
        cy="25"
        rx="15"
        ry="5"
        stroke="#61DAFB"
        fill="none"
        transform="rotate(-60 25 25)"
      />
    </svg>
  ),
  "Node Js": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M25,5 L45,15 L45,35 L25,45 L5,35 L5,15 Z" fill="#388E3C" />
      <text
        x="25"
        y="32"
        fontSize="10"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        NODE
      </text>
    </svg>
  ),
  ExtJs: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="10" y="10" width="30" height="30" fill="#86BC40" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        EXT
      </text>
    </svg>
  ),
  Springboot: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path
        d="M25,5 C35,5 45,15 45,25 C45,35 35,45 25,45 C15,45 5,35 5,25 C5,15 15,5 25,5"
        fill="#6DB33F"
      />
      <path
        d="M15,25 C15,20 20,15 25,15 C30,15 35,20 35,25 C35,30 30,35 25,35 C20,35 15,30 15,25"
        fill="white"
      />
    </svg>
  ),
  gRPC: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="10" y="10" width="30" height="30" rx="5" fill="#244B5B" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        gRPC
      </text>
    </svg>
  ),
  "Oracle DB": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="5" y="15" width="40" height="20" fill="#F80000" />
      <text
        x="25"
        y="30"
        fontSize="10"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        ORACLE
      </text>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M20,5 L30,5 L35,45 L15,45 Z" fill="#47A248" />
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M10,10 L40,25 L10,40 Z" fill="#54C5F8" />
    </svg>
  ),
  Dart: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M5,25 L25,5 L45,25 L25,45 Z" fill="#00B4AB" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M5,20 L25,10 L45,20 L25,30 Z" fill="#FF9900" />
      <path d="M5,30 L25,20 L45,30 L25,40 Z" fill="#FF9900" opacity="0.7" />
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M10,15 L40,15 L25,35 Z" fill="#DC382D" />
    </svg>
  ),
  Kafka: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <circle cx="25" cy="25" r="20" fill="#231F20" />
      <text
        x="25"
        y="32"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        KAFKA
      </text>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <rect x="5" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="20" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="35" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="5" y="35" width="10" height="10" fill="#2496ED" />
      <rect x="20" y="35" width="10" height="10" fill="#2496ED" />
    </svg>
  ),
  OpenCV: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <circle cx="25" cy="25" r="20" fill="#5C3D2E" />
      <circle cx="18" cy="18" r="5" fill="white" />
      <circle cx="32" cy="18" r="5" fill="white" />
      <path
        d="M15,30 Q25,40 35,30"
        stroke="white"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  Mediapipe: () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M10,25 Q25,5 40,25 Q25,45 10,25" fill="#00A3A7" />
    </svg>
  ),
  "Fusion 360": () => (
    <svg viewBox="0 0 50 50" className="w-10 h-10 sm:w-12 sm:h-12">
      <path d="M15,15 L35,15 L25,35 Z" fill="#FF6D00" />
      <circle cx="25" cy="25" r="5" fill="white" />
    </svg>
  ),
};

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "SQL",
  "HTML",
  "Tailwind CSS",
  "Javascript",
  "React Js",
  "Node Js",
  "ExtJs",
  "Springboot",
  "gRPC",
  "Oracle DB",
  "MongoDB",
  "Flutter",
  "Dart",
  "AWS",
  "Redis",
  "Kafka",
  "Docker",
  "OpenCV",
  "Mediapipe",
  "Fusion 360",
];

const useInViewOnce = (threshold = 0.1, rootMargin = "0px") => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return [setRef, isInView];
};

// Simplified SkillsCard with uniform size
const SkillsCard = memo(({ index, title }) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInViewOnce(0.2);
  const Icon = SkillIcons[title];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ 
        duration: 0.3,
        delay: Math.min(index * 0.03, 0.3),
        ease: "easeOut"
      }}
      className="group"
      whileHover={{ y: -5 }}
      style={{ willChange: 'transform' }}
    >
      {/* Fixed height and width container to ensure uniform sizing */}
      <div className="h-36 sm:h-40 w-full">
        <div className="h-full w-full bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 p-[1px] rounded-[20px] shadow-md">
          <div className="bg-gray-900 rounded-[20px] p-4 flex flex-col justify-between items-center h-full">
            
            {/* Fixed height container for icon */}
            <div className="flex items-center justify-center h-20 transform transition-transform duration-300 group-hover:scale-110">
              {Icon && <Icon />}
            </div>
            
            {/* Fixed height container for title */}
            <div className="h-8 flex flex-col justify-center items-center">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-sm sm:text-base font-medium text-center truncate max-w-full">
                {title}
              </h3>
              
              <div className="h-0.5 w-0 bg-gradient-to-r from-violet-500 via-blue-400 to-blue-500 mt-1 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const SkillsGrid = memo(() => {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillsCard key={skill} index={index} title={skill} />
        ))}
      </div>
    </div>
  );
});

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
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
            Skills.
          </motion.h2>
          
          <motion.div 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-2 sm:mt-3 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-gray-300 text-sm sm:text-base">
              Technologies I've worked with
            </p>
          </motion.div>

          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto mt-3 sm:mt-4 rounded-full relative overflow-hidden"
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

        <SkillsGrid />
      </div>
    </div>
  );
};

export default memo(SectionWrapper(Skills, "skills"));