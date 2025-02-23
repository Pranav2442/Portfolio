import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import("react-vertical-timeline-component/style.min.css");
import React, { lazy, Suspense } from "react";
import { GlowingEffect } from "./GlowingEffect";


const VerticalTimeline = lazy(() => 
  import("react-vertical-timeline-component").then(module => ({
    default: module.VerticalTimeline
  }))
);

const VerticalTimelineElement = lazy(() => 
  import("react-vertical-timeline-component").then(module => ({
    default: module.VerticalTimelineElement
  }))
);




const ExperienceCard = React.memo(({ experience }) => {
  // Optimize image loading
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "10px solid white" }}
      date={experience.date}
      iconStyle={{ background: "white" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <GlowingEffect
          blur={1}
          spread={50}
          movementDuration={0.8}
          glow={false}
          disabled={false}
          borderWidth={2}
          inactiveZone={0.5}  
          proximity={20}
        />

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

// Add display name for debugging
ExperienceCard.displayName = 'ExperienceCard';

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
  </div>
);

const Experience = () => {
  // Memoize experiences array if it's static
  const memoizedExperiences = React.useMemo(() => 
    experiences.map((experience, index) => ({
      ...experience,
      key: `experience-${index}`
    }))
  , []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <div className="mt-20 flex flex-col">
        <Suspense fallback={<LoadingFallback />}>
          <VerticalTimeline>
            {memoizedExperiences.map((experience) => (
              <ExperienceCard
                key={experience.key}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </Suspense>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");