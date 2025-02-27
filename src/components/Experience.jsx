import React, { lazy, Suspense, useMemo, memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimeline = lazy(() =>
  import("react-vertical-timeline-component").then((module) => ({
    default: module.VerticalTimeline,
  }))
);

const VerticalTimelineElement = lazy(() =>
  import("react-vertical-timeline-component").then((module) => ({
    default: module.VerticalTimelineElement,
  }))
);

const ResponsiveTimelineStyles = () => {
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .vertical-timeline-custom-line {
        width: 95%;
        max-width: 1170px;
        margin: 0 auto;
      }
      
      @media (max-width: 1169px) {
        .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
          visibility: visible;
          animation: none !important;
        }
      }
      
      @media (max-width: 640px) {
        .vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
          visibility: visible;
          animation: none !important;
        }
        
        .vertical-timeline-element {
          margin: 2em 0;
        }
        
        .vertical-timeline-element-content {
          padding: 1rem !important;
          width: calc(100% - 40px) !important;
          margin-left: 35px !important; 
        }
        
        .vertical-timeline-element-content .vertical-timeline-element-date {
          margin-top: 0.5rem;
          text-align: left;
          padding: 0.25rem 0;
        }
        
        .vertical-timeline-element-icon {
          width: 50px !important;
          height: 50px !important;
          left: -18px !important;
          margin-left: 0 !important;
          top: 0 !important;
          margin-top: 4px !important;
        }
        
        .vertical-timeline::before {
          left: 5px !important;
        }
        
        .vertical-timeline-element-content-arrow {
          border-right: 7px solid rgba(255, 255, 255, 0.15) !important;
          top: 21px !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return null;
};

const ExperienceCard = memo(
  ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "rgba(17, 24, 39, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          padding: "1rem",
          borderRadius: "12px",
        }}
        contentArrowStyle={{
          borderRight: "10px solid rgba(255, 255, 255, 0.15)",
        }}
        date={
          <div className="text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {experience.date}
          </div>
        }
        iconStyle={{
          background: "rgba(15, 23, 42, 0.8)",
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.2)",
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="group"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {experience.company_name}
          </h3>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {experience.title}
          </p>

          <ul className="space-y-2 pl-1 sm:pl-4">
            {experience.points.map((point, index) => (
              <motion.li
                key={`experience-point-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1,
                    },
                  },
                }}
                className="flex items-start space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="inline-block flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 mt-1.5" />

                <span className="text-xs sm:text-sm md:text-base tracking-wide flex-1 leading-relaxed">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
        </motion.div>
      </VerticalTimelineElement>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.experience.title === nextProps.experience.title &&
      prevProps.experience.company_name === nextProps.experience.company_name &&
      prevProps.experience.date === nextProps.experience.date &&
      JSON.stringify(prevProps.experience.points) ===
        JSON.stringify(nextProps.experience.points)
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-purple-500 rounded-full animate-spin border-t-transparent" />
  </div>
);

const Experience = memo(
  () => {
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
        <ResponsiveTimelineStyles />
        
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
            className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
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

        <div className="mt-8 md:mt-12 lg:mt-16">
          <Suspense fallback={<LoadingFallback />}>
            <VerticalTimeline
              animate={true}
              className="vertical-timeline-custom-line"
            >
              {memoizedExperiences.map((experience) => (
                <ExperienceCard key={experience.key} experience={experience} />
              ))}
            </VerticalTimeline>
          </Suspense>
        </div>
      </div>
    );
  },
  () => true
);

export default SectionWrapper(Experience, "work");