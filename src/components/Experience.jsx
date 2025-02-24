import React, { lazy, Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

// Load components only once
const VerticalTimeline = lazy(() => {
  const component = import("react-vertical-timeline-component").then(
    (module) => ({
      default: module.VerticalTimeline,
    })
  );
  return component;
});

const VerticalTimelineElement = lazy(() => {
  const component = import("react-vertical-timeline-component").then(
    (module) => ({
      default: module.VerticalTimelineElement,
    })
  );
  return component;
});

const ExperienceCard = React.memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(17, 24, 39, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        color: "#fff",
        padding: "1.5rem",
      }}
      contentArrowStyle={{ borderRight: "10px solid rgba(255, 255, 255, 0.1)" }}
      date={
        <div className="text-sm md:text-base lg:text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {experience.date}
        </div>
      }
      iconStyle={{
        background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full transform transition-transform duration-300 hover:scale-110">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-3/5 h-3/5 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {experience.title}
        </h3>
        <p className="text-base md:text-lg font-semibold text-gray-300 mb-4 transition-colors duration-300 group-hover:text-purple-400">
          {experience.company_name}
        </p>

        <ul className="space-y-3">
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span className="inline-block w-1.5 h-1.5 mt-2 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
              <span className="text-xs md:text-sm lg:text-base tracking-wide">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </motion.div>
    </VerticalTimelineElement>
  );
});

ExperienceCard.displayName = "ExperienceCard";

const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-purple-500 rounded-full animate-spin border-t-transparent" />
  </div>
);

const Experience = () => {
  // Memoize experiences to prevent unnecessary re-renders
  const memoizedExperiences = useMemo(
    () =>
      experiences.map((experience, index) => ({
        ...experience,
        key: `experience-${index}`,
      })),
    []
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Work Experience
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

      <div className="mt-10 md:mt-16 lg:mt-20">
        <AnimatePresence>
          <Suspense fallback={<LoadingFallback />}>
            <VerticalTimeline animate={true}>
              {memoizedExperiences.map((experience) => (
                <ExperienceCard key={experience.key} experience={experience} />
              ))}
            </VerticalTimeline>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Wrap with SectionWrapper and export
export default React.memo(SectionWrapper(Experience, "work"));
