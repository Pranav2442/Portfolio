import React, {
  memo,
  useEffect,
  useState,
  useMemo,
} from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";

// Optimized InView hook that only triggers once
const useInViewOnce = (threshold = 0.1, rootMargin = "0px") => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect after first intersection
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

// Optimized SkillsCard with one-time animation
const SkillsCard = memo(({ index, title }) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInViewOnce(0.2);

  const animationVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: index * 0.1,
        },
      },
    }),
    [index]
  );

  return (
    <div ref={ref} className="w-[calc(50%-0.5rem)] md:w-[150px]">
      <div className="h-full bg-gradient-to-r from-blue-700 via-indigo-900 to-purple-900 p-[1px] rounded-[20px] shadow-lg backdrop-blur-sm">
        <div className="bg-tertiary rounded-[20px] py-3 px-4 h-[150px] flex items-center justify-center">
          <h3 className="text-white text-sm sm:text-base font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
});

// Optimized grid layout
const SkillsGrid = memo(({ services }) => {
  const mobileRows = useMemo(() => {
    return services.reduce((acc, item, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!acc[rowIndex]) acc[rowIndex] = [];
      acc[rowIndex].push(item);
      return acc;
    }, []);
  }, [services]);

  return (
    <div className="mt-10 px-2">
      <div className="md:hidden">
        {mobileRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4 mb-4">
            {row.map((service, index) => (
              <SkillsCard
                key={service.title}
                index={rowIndex * 2 + index}
                {...service}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-4">
        {services.map((service, index) => (
          <SkillsCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
});

// Main Skills component
const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInViewOnce(0.1);
  const memoizedServices = useMemo(() => services, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      <motion.div
        ref={ref}
        variants={prefersReducedMotion ? {} : textVariant()}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-center"
      >
        <p className={styles.sectionHeadText}>Skills <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        /></p>
      </motion.div>

      <SkillsGrid services={memoizedServices} />
    </div>
  );
};

export default memo(SectionWrapper(Skills, "about"));
