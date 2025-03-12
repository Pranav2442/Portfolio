import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { projects } from "../constants";

const SWIPE_THRESHOLD = 100;
const ROTATION_RANGE = 15;
const STACK_OFFSET = 20;

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
      <circle
        cx="12"
        cy="12"
        r="10"
        className="group-hover:stroke-rose-400 transition-colors duration-300"
      />
      <path
        d="M16 12H8"
        className="group-hover:stroke-rose-400 transition-colors duration-300"
      />
      <path
        d="M10 16L6 12L10 8"
        className="group-hover:stroke-rose-400 transition-colors duration-300"
      />
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
      <circle
        cx="12"
        cy="12"
        r="10"
        className="group-hover:stroke-emerald-400 transition-colors duration-300"
      />
      <path
        d="M8 12H16"
        className="group-hover:stroke-emerald-400 transition-colors duration-300"
      />
      <path
        d="M14 8L18 12L14 16"
        className="group-hover:stroke-emerald-400 transition-colors duration-300"
      />
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

const InitialInstructions = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <motion.div
      className="absolute bottom-6 left-0 w-full flex items-center justify-center pointer-events-none px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-start space-x-8 sm:space-x-12">
          <LeftArrow className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
          <RightArrow className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
        </div>
        <p className="text-white/90 text-xs sm:text-sm mt-3 font-light text-center">
          {isMobile ? (
            <span>Swipe right to watch, left to skip</span>
          ) : (
            <span>
              Click and drag right to watch, left to skip
              <br />
              Or use arrow keys ← →
            </span>
          )}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  style,
  onSwipe,
  index,
  isFirstInteraction,
  isRefilling,
  isActive = true,
}) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const rotate = useTransform(
    x,
    [-200, 200],
    [-ROTATION_RANGE, ROTATION_RANGE]
  );
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!isActive) {
      controls.start({ x: 0, rotate: 0, scale: 1 });
    }
  }, [isActive, controls]);

  useEffect(() => {
    if (isRefilling) {
      controls.start({
        x: [-window.innerWidth, 0],
        scale: [0.8, 1],
        transition: {
          duration: 0.4,
          delay: index * 0.1,
          ease: "easeOut",
        },
      });
    }
  }, [isRefilling, controls, index]);

  useEffect(() => {
    if (index === 0 && !isMobile && isActive) {
      const handleKeyDown = async (e) => {
        if (e.key === "ArrowLeft") {
          await controls.start({
            x: -window.innerWidth,
            rotate: -15,
            scale: 0.9,
            transition: { duration: 0.3, ease: "easeOut" },
          });
          handleSwipe("left");
        } else if (e.key === "ArrowRight") {
          await controls.start({
            x: window.innerWidth,
            rotate: 15,
            scale: 0.9,
            transition: { duration: 0.3, ease: "easeOut" },
          });
          handleSwipe("right");
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [index, isMobile, controls, isActive]);

  const handleSwipe = (direction) => {
    if (!isActive) return;

    if (direction === "right") {
      window.open(project.link, "_blank");
    }
    if (onSwipe) onSwipe(direction);
  };

  const handleDragEnd = async (_, info) => {
    if (!isActive) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > SWIPE_THRESHOLD || Math.abs(velocity) > 800) {
      const direction = offset > 0 ? "right" : "left";
      if (isMobile) {
        await controls.start({
          x: direction === "right" ? window.innerWidth : -window.innerWidth,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      } else {
        await controls.start({
          x: direction === "right" ? window.innerWidth : -window.innerWidth,
          rotate: direction === "right" ? 15 : -15,
          scale: 0.9,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      }
      handleSwipe(direction);
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
      });
    }
  };

  const shouldShowEffects = !isMobile || window.innerWidth > 768;

  return (
    <motion.div
      ref={cardRef}
      style={{
        ...style,
        x,
        rotate: isMobile ? 0 : rotate,
        scale,
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={isActive ? { scale: 0.98, cursor: "grabbing" } : {}}
      className={`touch-none absolute top-0 left-0 w-full h-full
        ${
          index > 0 && !isRefilling
            ? "pointer-events-none"
            : isActive
            ? "cursor-grab"
            : ""
        }`}
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
            {shouldShowEffects && <ShimmerEffect />}
            {shouldShowEffects && <FloatingParticles />}

            <div className="relative z-10 text-center w-full">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-base sm:text-lg md:text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-white/80 text-xs sm:text-sm font-light line-clamp-3">
                {project.description}
              </p>
            </div>

            {index === 0 && isActive && <SwipeIndicator x={x} />}
            {index === 0 && isFirstInteraction && isActive && (
              <InitialInstructions />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGridItem = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.03, 0.3),
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group w-full rounded-[20px] cursor-pointer transform transition-all duration-300"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="relative w-full h-full rounded-[20px]">
        <GlowEffect />
        <div className="w-full h-full bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 p-[1px] rounded-[20px] shadow-lg shadow-purple-900/20 relative z-10">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-[20px] p-5 flex flex-col relative overflow-hidden backdrop-blur-sm h-full">
            <ShimmerEffect />

            <div className="flex flex-col h-full">
              <div className="mb-2 min-h-[28px] sm:min-h-[32px] flex items-center justify-center">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-base sm:text-lg font-bold">
                  {project.title}
                </h3>
              </div>

              <div className="flex-grow mb-4">
                <p className="text-white/80 text-xs sm:text-sm font-light line-clamp-3 text-center">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-center mt-auto">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full px-4 py-2 inline-flex items-center gap-1 transform transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.link, "_blank");
                  }}
                >
                  <span>Watch Project</span>
                  <svg
                    className="w-3 h-3 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectStack = ({
  projects: initialProjects,
  isActive = true,
  currentIndex,
  onCardChange,
}) => {
  const [projects, setProjects] = useState([...initialProjects]);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [isRefilling, setIsRefilling] = useState(false);
  const [containerHeight, setContainerHeight] = useState(400);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (currentIndex !== undefined && isActive) {
      if (projects.length !== initialProjects.length - currentIndex) {
        setProjects(initialProjects.slice(currentIndex));
      }
    }
  }, [currentIndex, initialProjects, isActive]);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setContainerHeight(300);
      } else if (window.innerWidth < 1024) {
        setContainerHeight(350);
      } else {
        setContainerHeight(400);
      }
    };

    checkDevice();
    updateHeight();

    const resizeHandler = () => {
      checkDevice();
      updateHeight();
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const handleSwipe = (direction) => {
    if (!isActive) return;

    setIsFirstInteraction(false);
    setProjects((prev) => {
      if (prev.length <= 1) {
        setTimeout(() => {
          setIsRefilling(true);
          setProjects([...initialProjects]);
          setTimeout(() => {
            setIsRefilling(false);
          }, 600);
        }, 300);
        return prev;
      } else {
        const newProjects = prev.slice(1);
        const newIndex = initialProjects.findIndex(
          (p) => p.title === newProjects[0]?.title
        );
        if (onCardChange && newIndex !== -1) {
          onCardChange(newIndex);
        }
        return newProjects;
      }
    });
  };

  return (
    <div
      className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto mt-8"
      style={{ height: containerHeight }}
    >
      <div className="relative w-full h-full">
        {projects.slice(0, 6).map((project, index) => {
          const offsetX =
            -index *
            (window.innerWidth < 640 ? STACK_OFFSET * 0.7 : STACK_OFFSET);
          const offsetY =
            index *
            (window.innerWidth < 640 ? STACK_OFFSET / 3 : STACK_OFFSET / 2);
          const scale = 1 - index * (window.innerWidth < 640 ? 0.015 : 0.02);

          return (
            <ProjectCard
              key={`${project.title}-${
                isRefilling ? "refill" : "normal"
              }-${index}`}
              project={project}
              index={index}
              isFirstInteraction={isFirstInteraction}
              isRefilling={isRefilling}
              isActive={isActive}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                zIndex: projects.length - index,
              }}
              onSwipe={handleSwipe}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProjectGridView = ({ projects: initialProjects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [isFocused, setIsFocused] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const results = initialProjects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm, initialProjects]);

  return (
    <div className="w-full pb-16" id="projects-grid">
      <motion.div
        className="max-w-lg mx-auto mb-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`relative w-full transition-all duration-300 mt-10 ${
            isFocused ? "scale-105" : "scale-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-full blur-md -z-10"></div>
          <div
            className={`relative rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-blue-600 p-[1px] transition-all duration-300 ${
              isFocused ? "shadow-lg shadow-violet-500/20" : ""
            }`}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${
                  isFocused ? "text-violet-400" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3 rounded-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
                onClick={() => setSearchTerm("")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {filteredProjects.length > 0 ? (
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectGridItem
              key={`grid-${project.title}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
            <p className="text-gray-400 text-lg">
              No projects found matching "{searchTerm}"
            </p>
            <button
              className="mt-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
              onClick={() => setSearchTerm("")}
            >
              Clear search
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const ViewToggle = ({ isGridView, toggleView }) => {
  return (
    <div className="flex justify-center mb-8 px-4 mt-12">
      <div className="w-full max-w-md">
        <motion.div
          className="bg-gradient-to-r from-violet-600 to-blue-600 p-[1px] rounded-lg relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden relative">
            <div className="flex">
              <button
                onClick={() => toggleView(false)}
                className={`flex items-center justify-center py-3 px-3 sm:px-4 text-xs sm:text-sm md:text-base relative z-20 w-1/2 transition-colors duration-300 ${
                  !isGridView ? "text-white font-medium" : "text-gray-400"
                }`}
              >
                <svg
                  className="w-4 h-4 mr-1 sm:mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-7 7-7" />
                  <path d="M12 12H5" />
                </svg>
                <span>Swipe Cards</span>
              </button>
              <button
                onClick={() => toggleView(true)}
                className={`flex items-center justify-center py-3 px-3 sm:px-4 text-xs sm:text-sm md:text-base relative z-20 w-1/2 transition-colors duration-300 ${
                  isGridView ? "text-white font-medium" : "text-gray-400"
                }`}
              >
                <svg
                  className="w-4 h-4 mr-1 sm:mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span>All Projects</span>
              </button>
            </div>

            {isGridView ? (
              <motion.div
                layoutId="tab-highlight"
                className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-violet-500/10 to-blue-500/10 z-10"
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.3, 0.0, 0.2, 1],
                }}
              />
            ) : (
              <motion.div
                layoutId="tab-highlight"
                className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-violet-500/10 to-blue-500/10 z-10"
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.3, 0.0, 0.2, 1],
                }}
              />
            )}

            {isGridView ? (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 right-0 h-0.5 w-1/2 bg-gradient-to-r from-violet-500 via-blue-400 to-blue-500"
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.3, 0.0, 0.2, 1],
                }}
              />
            ) : (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 h-0.5 w-1/2 bg-gradient-to-r from-violet-500 via-blue-400 to-blue-500"
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.3, 0.0, 0.2, 1],
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const toggleView = (value) => {
    if (isAnimating || value === isGridView) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIsGridView(value);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 50);
  };

  const handleCardChange = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <>
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
          Projects
        </motion.h2>

        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-2 sm:mt-3 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-gray-300 text-sm sm:text-base">
            Swipe through my portfolio of projects or view them all at once
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

      <ViewToggle isGridView={isGridView} toggleView={toggleView} />

      <div
        className="w-full overflow-hidden relative"
        style={{ minHeight: "500px" }}
      >
        <div
          className="w-full transition-all duration-300 ease-in-out"
          style={{
            opacity: isGridView ? 1 : 0,
            transform: isGridView ? "translateX(0)" : "translateX(50px)",
            pointerEvents: isGridView ? "auto" : "none",
            position: isGridView ? "relative" : "absolute",
            zIndex: isGridView ? 10 : 0,
          }}
        >
          <ProjectGridView projects={projects} />
        </div>

        <div
          className="w-full transition-all duration-300 ease-in-out"
          style={{
            opacity: isGridView ? 0 : 1,
            transform: isGridView ? "translateX(-50px)" : "translateX(0)",
            pointerEvents: isGridView ? "none" : "auto",
            position: isGridView ? "absolute" : "relative",
            zIndex: isGridView ? 0 : 10,
          }}
        >
          <ProjectStack
            projects={projects}
            isActive={!isGridView}
            currentIndex={currentCardIndex}
            onCardChange={handleCardChange}
          />
        </div>
      </div>
    </>
  );
};

const style = document.createElement("style");
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
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

export default SectionWrapper(Projects, "");
