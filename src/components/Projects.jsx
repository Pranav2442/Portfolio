import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { projects } from '../constants';

const SWIPE_THRESHOLD = 100;
const ROTATION_RANGE = 15;
const STACK_OFFSET = 20;

const LeftArrow = ({ className }) => (
  <div className="flex flex-col items-center">
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12H8" />
      <path d="M10 16L6 12L10 8" />
    </svg>
    <span className="text-xs mt-1 text-red-500 font-medium">Skip</span>
  </div>
);

const RightArrow = ({ className }) => (
  <div className="flex flex-col items-center">
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12H16" />
      <path d="M14 8L18 12L14 16" />
    </svg>
    <span className="text-xs mt-1 text-green-500 font-medium">Watch</span>
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
      >
        <LeftArrow className="w-8 sm:w-12 h-8 sm:h-12 text-red-500" />
      </motion.div>
      <motion.div 
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2"
        style={{ opacity: rightOpacity }}
      >
        <RightArrow className="w-8 sm:w-12 h-8 sm:h-12 text-green-500" />
      </motion.div>
    </>
  );
};

const InitialInstructions = () => (
  <div className="absolute bottom-4 left-0 w-full flex items-center justify-center pointer-events-none">
    <div className="text-center bg-black/70 p-3 rounded-lg backdrop-blur-sm">
      <div className="flex justify-center items-start space-x-12">
        <LeftArrow className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
        <RightArrow className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
      </div>
      <p className="text-white text-xs sm:text-sm mt-2">
        Swipe right to watch, left to skip
      </p>
    </div>
  </div>
);

const ProjectCard = ({ project, style, onSwipe, index, isFirstInteraction, isRefilling }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const rotate = useTransform(x, [-200, 200], [-ROTATION_RANGE, ROTATION_RANGE]);

  useEffect(() => {
    if (isRefilling) {
      controls.start({
        x: [-window.innerWidth, 0],
        scale: [0.8, 1],
        transition: { 
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut"
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
        transition: { duration: 0.3 }
      });
      handleSwipe(direction);
    } else {
      controls.start({ 
        x: 0, 
        transition: { type: "spring", stiffness: 300, damping: 20 } 
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
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={{ cursor: "grabbing" }}
      className={`touch-none absolute top-0 left-0 w-full h-full
        ${index > 0 && !isRefilling ? 'pointer-events-none' : 'cursor-grab'}`}
    >
      <motion.div 
        className="absolute left-4 top-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
        style={{ opacity: useTransform(x, [-200, -50], [1, 0]) }}
      >
        Skip
      </motion.div>
      
      <motion.div 
        className="absolute right-4 top-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
        style={{ opacity: useTransform(x, [50, 200], [0, 1]) }}
      >
        Watch
      </motion.div>

      <div className="w-full h-full bg-gradient-to-r from-blue-700 via-indigo-900 to-purple-900 p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-3 px-6 h-full flex justify-evenly items-center flex-col relative">
          {index > 0 && (
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-transparent rounded-tl-[20px] opacity-70" />
          )}
          
          <h3 className="text-white text-lg sm:text-xl font-bold text-center">
            {project.title}
          </h3>
          
          <div className="absolute top-2 right-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, "_blank");
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer"
              role="button"
              tabIndex={0}
            >
            </div>
          </div>
          
          {index === 0 && <SwipeIndicator x={x} />}
          {index === 0 && isFirstInteraction && <InitialInstructions />}
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
      const isMobile = window.innerWidth < 640;
      setContainerHeight(isMobile ? 300 : 400);
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
          }, initialProjects.length * 100 + 500);
        }, 300);
      }
      return remaining;
    });
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-md mx-auto mt-8" style={{ height: containerHeight }}>
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
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Projects.
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        />
      </motion.div>
      <ProjectStack projects={projects} />
    </>
  );
};

export default SectionWrapper(Projects, "");