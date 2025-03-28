import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed left-1/2 transform -translate-x-1/2 z-30 pointer-events-none bottom-4 sm:bottom-8"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="relative">
          <ChevronDown
            className="w-6 h-6 animate-bounce text-transparent"
            strokeWidth={2}
            style={{
              stroke: "url(#scrollArrowGradient)",
            }}
          />

          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient
                id="scrollArrowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
