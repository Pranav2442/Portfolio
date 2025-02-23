import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { name } from "../constants";
import { profile } from "../assets";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > lastScrollY;
    setHidden(scrollingDown);
    setLastScrollY(latest);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="px-6 sm:px-16 w-full fixed top-0 z-20 py-5"
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='group flex items-center gap-3'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500"
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity
              }}
            />
            
            <div className="relative h-12 w-12 rounded-2xl p-[1px] bg-black/10 backdrop-blur-sm">
              <img 
                src={profile} 
                className="h-full w-full object-cover rounded-full"
                alt="Profile"
              />
              
              <motion.div
                className="absolute -right-1 -top-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.p 
              className='text-white font-bold text-lg sm:text-xl tracking-wider'
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {name}
              <motion.span 
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
            
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: isHovered ? "auto" : 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xs text-gray-400 font-medium tracking-wider">
              Software Architect
              </span>
            </motion.div>
          </div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;