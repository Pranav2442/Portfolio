import React, { memo, useEffect, useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const SkillIcons = {
  C: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path
        d="M10,25 C10,15 20,15 25,15 C30,15 40,15 40,25 C40,35 30,35 25,35 C20,35 10,35 10,25"
        fill="#FFD54F"
      />
      <circle cx="18" cy="22" r="2" fill="black" />
      <circle cx="32" cy="22" r="2" fill="black" />
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path
        d="M10,20 C15,10 25,15 25,25 C25,35 35,40 40,30"
        stroke="#06B6D4"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  ),
  Javascript: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M20,5 L30,5 L35,45 L15,45 Z" fill="#47A248" />
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M10,10 L40,25 L10,40 Z" fill="#54C5F8" />
    </svg>
  ),
  Dart: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M5,25 L25,5 L45,25 L25,45 Z" fill="#00B4AB" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M5,20 L25,10 L45,20 L25,30 Z" fill="#FF9900" />
      <path d="M5,30 L25,20 L45,30 L25,40 Z" fill="#FF9900" opacity="0.7" />
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M10,15 L40,15 L25,35 Z" fill="#DC382D" />
    </svg>
  ),
  Kafka: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <rect x="5" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="20" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="35" y="20" width="10" height="10" fill="#2496ED" />
      <rect x="5" y="35" width="10" height="10" fill="#2496ED" />
      <rect x="20" y="35" width="10" height="10" fill="#2496ED" />
    </svg>
  ),
  OpenCV: () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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
    <svg viewBox="0 0 50 50" className="w-12 h-12">
      <path d="M10,25 Q25,5 40,25 Q25,45 10,25" fill="#00A3A7" />
    </svg>
  ),
  "Fusion 360": () => (
    <svg viewBox="0 0 50 50" className="w-12 h-12">
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

const SkillsCard = memo(({ index, title }) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInViewOnce(0.2);
  const Icon = SkillIcons[title];

  return (
    <div 
      ref={ref}
      className="group relative h-[130px] xs:h-[140px] sm:h-[160px] lg:h-[180px] cursor-pointer perspective-1000"
    >
      <div className="absolute inset-0 bg-[rgba(17,24,39,0.8)] backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/30 transition-all duration-300 group-hover:border-purple-500/50">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl -top-1/2 -right-1/2 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000"></div>
        </div>
      </div>

      <div className="relative h-full p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center space-y-2 xs:space-y-3 sm:space-y-4">
        <div className="relative group-hover:-translate-y-1 transition-transform duration-500 scale-75 xs:scale-90 sm:scale-100">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

          <div className="relative bg-[rgba(15,23,42,0.8)] backdrop-blur-sm p-4 rounded-full border border-slate-700/50 group-hover:border-violet-500/50 transition-colors duration-500">
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
              {Icon && <Icon />}
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-sm xs:text-base font-medium text-white opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-center">
            {title}
          </h3>

          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
});

const SkillsGrid = memo(() => {
  return (
    <div className="mt-8 sm:mt-10 lg:mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {skills.map((skill, index) => (
          <SkillsCard key={skill} index={index} title={skill} />
        ))}
      </div>
    </div>
  );
});

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInViewOnce(0.1);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-blue-500/20 blur-3xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.h2
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills
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

        <SkillsGrid />
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

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

export default memo(SectionWrapper(Skills, "skills"));
