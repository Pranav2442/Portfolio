import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { projects } from '../constants';

const SWIPE_THRESHOLD = 100;
const ROTATION_RANGE = 15;
const STACK_OFFSET = 20;


const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-grain" />
  </div>
);


const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        animate={{
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
          scale: [1, Math.random() * 1.5 + 0.5],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);


const GlowEffect = () => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-blue-500/20 animate-gradient-xy rounded-[20px]" />
    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 rounded-[20px] blur opacity-30 group-hover:opacity-50 transition-all duration-700" />
  </div>
);


const ShimmerEffect = () => (
  <div className="absolute inset-0 -rotate-12 overflow-hidden rounded-[20px]">
    <div className="absolute top-0 -left-[100%] h-full w-[200%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

const LeftArrow = ({ className }) => (
  <div className="flex flex-col items-center group">
    <motion.svg 
      viewBox="0 0 24 24" 
      className={`${className} transition-all duration-300 group-hover:scale-110`}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      whileHover={{ scale: 1.1 }}
    >
      <circle cx="12" cy="12" r="10" className="group-hover:stroke-rose-400 transition-colors duration-300" />
      <path d="M16 12H8" className="group-hover:stroke-rose-400 transition-colors duration-300" />
      <path d="M10 16L6 12L10 8" className="group-hover:stroke-rose-400 transition-colors duration-300" />
    </motion.svg>
    <motion.span 
      className="text-xs mt-1 text-rose-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
      initial={{ y: -10 }}
      animate={{ y: 0 }}
    >
      Skip
    </motion.span>
  </div>
);

const RightArrow = ({ className }) => (
  <div className="flex flex-col items-center group">
    <motion.svg 
      viewBox="0 0 24 24" 
      className={`${className} transition-all duration-300 group-hover:scale-110`}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      whileHover={{ scale: 1.1 }}
    >
      <circle cx="12" cy="12" r="10" className="group-hover:stroke-emerald-400 transition-colors duration-300" />
      <path d="M8 12H16" className="group-hover:stroke-emerald-400 transition-colors duration-300" />
      <path d="M14 8L18 12L14 16" className="group-hover:stroke-emerald-400 transition-colors duration-300" />
    </motion.svg>
    <motion.span 
      className="text-xs mt-1 text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
      initial={{ y: -10 }}
      animate={{ y: 0 }}
    >
      Watch
    </motion.span>
  </div>
);

const SwipeIndicator = ({ x }) => {
  const leftOpacity = useTransform(x, [-200, -100, 0], [1, 0.5, 0]);
  const rightOpacity = useTransform(x, [0, 100, 200], [0, 0.5, 1]);

  return (
    <>
      <motion.div 
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2"
        style={{ opacity: leftOpacity }}
        whileHover={{ scale: 1.1 }}
      >
        <LeftArrow className="w-8 sm:w-12 h-8 sm:h-12 text-rose-400" />
      </motion.div>
      <motion.div 
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2"
        style={{ opacity: rightOpacity }}
        whileHover={{ scale: 1.1 }}
      >
        <RightArrow className="w-8 sm:w-12 h-8 sm:h-12 text-emerald-400" />
      </motion.div>
    </>
  );
};

const InitialInstructions = () => (
  <motion.div 
    className="absolute bottom-4 left-0 w-full flex items-center justify-center pointer-events-none px-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    <div className="text-center bg-black/40 p-4 rounded-xl backdrop-blur-lg border border-white/10 relative overflow-hidden">
      <AnimatedBackground />
      <div className="flex justify-center items-start space-x-8 sm:space-x-12">
        <LeftArrow className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
        <RightArrow className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
      </div>
      <p className="text-white/90 text-xs sm:text-sm mt-3 font-light relative z-10">
        Swipe right to watch, left to skip
      </p>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, style, onSwipe, index, isFirstInteraction, isRefilling }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const rotate = useTransform(x, [-200, 200], [-ROTATION_RANGE, ROTATION_RANGE]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  useEffect(() => {
    if (isRefilling) {
      controls.start({
        x: [-window.innerWidth, 0],
        scale: [0.8, 1],
        transition: { 
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1], // Custom spring animation
        }
      });
    }
  }, [isRefilling, controls, index]);

  const handleSwipe = async (direction) => {
    if (direction === 'right') {
      window.open(project.link, "_blank");
    }
    onSwipe(direction);
  };

  const handleDragEnd = async (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > SWIPE_THRESHOLD || Math.abs(velocity) > 800) {
      const direction = offset > 0 ? 'right' : 'left';
      await controls.start({
        x: direction === 'right' ? window.innerWidth : -window.innerWidth,
        rotate: direction === 'right' ? 30 : -30,
        scale: 0.8,
        transition: { duration: 0.4 }
      });
      handleSwipe(direction);
    } else {
      controls.start({ 
        x: 0, 
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 30 
        } 
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        ...style,
        x,
        rotate,
        scale,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      className={`touch-none absolute top-0 left-0 w-full h-full
        ${index > 0 && !isRefilling ? 'pointer-events-none' : 'cursor-grab'}`}
    >
      <motion.div 
        className="absolute left-4 top-4 bg-rose-500/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
        style={{ opacity: useTransform(x, [-200, -50], [1, 0]) }}
      >
        Skip
      </motion.div>
      
      <motion.div 
        className="absolute right-4 top-4 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
        style={{ opacity: useTransform(x, [50, 200], [0, 1]) }}
      >
        Watch
      </motion.div>

      <div className="group w-full h-full rounded-[20px] relative">
        <GlowEffect />
        <div className="w-full h-full bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 p-[1px] rounded-[20px] shadow-lg shadow-purple-900/20 relative z-10">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-[20px] py-3 px-4 sm:px-6 h-full flex justify-evenly items-center flex-col relative overflow-hidden backdrop-blur-sm">
            <ShimmerEffect />
            <FloatingParticles />
            <AnimatedBackground />
            
            <motion.div 
              className="relative z-10 text-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-base sm:text-lg md:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <div className="px-2 sm:px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <p className="text-white/80 text-xs sm:text-sm font-light line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
            
            {index === 0 && <SwipeIndicator x={x} />}
            {index === 0 && isFirstInteraction && <InitialInstructions />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectStack = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [isRefilling, setIsRefilling] = useState(false);
  const [containerHeight, setContainerHeight] = useState(400);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setContainerHeight(300);
      } else if (window.innerWidth < 1024) {
        setContainerHeight(350);
      } else {
        setContainerHeight(400);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleSwipe = (direction) => {
    setIsFirstInteraction(false);
    setProjects((prev) => {
      const remaining = prev.slice(1);
      if (remaining.length === 0) {
        setTimeout(() => {
          setIsRefilling(true);
          setProjects(initialProjects);
          setTimeout(() => {
            setIsRefilling(false);
          }, initialProjects.length * 150 + 600);
        }, 400);
      }
      return remaining;
    });
  };

  return (
    <div 
      className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto mt-8" 
      style={{ height: containerHeight }}
    >
      <div className="relative w-full h-full">
        {projects.slice(0, 6).map((project, index) => {
          const offsetX = -index * (window.innerWidth < 640 ? STACK_OFFSET * 0.7 : STACK_OFFSET);
          const offsetY = index * (window.innerWidth < 640 ? STACK_OFFSET/3 : STACK_OFFSET/2);
          const scale = 1 - index * (window.innerWidth < 640 ? 0.015 : 0.02);

          return (
            <ProjectCard
              key={`${project.title}-${isRefilling ? 'refill' : 'normal'}`}
              project={project}
              index={index}
              isFirstInteraction={isFirstInteraction}
              isRefilling={isRefilling}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                zIndex: projects.length - index,
              }}
              onSwipe={index === 0 ? handleSwipe : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
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
          Projects.
        </motion.h2>
        
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

      <ProjectStack projects={projects} />
    </>
  );
};


const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes gradient-xy {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes grain {
    0%, 100% { transform: translate(0, 0) }
    10% { transform: translate(-2%, -2%) }
    20% { transform: translate(2%, 2%) }
    30% { transform: translate(-1%, 1%) }
    40% { transform: translate(1%, -1%) }
    50% { transform: translate(-2%, 2%) }
    60% { transform: translate(2%, -2%) }
    70% { transform: translate(-1%, -1%) }
    80% { transform: translate(1%, 1%) }
    90% { transform: translate(-2%, -2%) }
  }
`;
document.head.appendChild(style);

export default SectionWrapper(Projects, "");