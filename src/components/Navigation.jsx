import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { profile } from "../assets";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 z-20 w-full
        transform transition-transform duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="relative h-20">
        <div className="relative h-full px-6 sm:px-16">
          <div className="h-full w-full max-w-7xl mx-auto flex items-center">
            <button
              className="group relative flex items-center gap-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                <div
                  className={`
                    absolute -inset-1 
                    bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600
                    rounded-full opacity-70
                    transition-all duration-300
                    ${isHovered ? "blur-md scale-110" : "blur-sm scale-100"}
                  `}
                />

                <div className="relative h-12 w-12">
                  <img
                    src={profile}
                    alt="Profile"
                    className="h-full w-full rounded-full object-cover"
                  />

                  {/* Sparkle effect */}
                  <div
                    className={`
                      absolute -right-1 -top-1
                      transition-all duration-300 transform
                      ${
                        isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                      }
                    `}
                  >
                    <Sparkles className="w-4 h-4 text-teal-300" />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className={`
                    transform transition-all duration-300
                    ${isHovered ? "translate-y-0" : "translate-y-0"}
                  `}
                >
                  <div className="relative">
                    <p className="text-xl font-medium bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 text-transparent bg-clip-text">
                      Pranav Mailarpawar
                    </p>

                    <div
                      className={`
                        absolute bottom-0 left-0 h-px w-full
                        bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600
                        transform origin-left transition-transform duration-300 ease-out
                        ${isHovered ? "scale-x-100" : "scale-x-0"}
                      `}
                    />
                  </div>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-out
                      ${
                        isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p className="text-sm text-teal-300 mt-1">
                      Software Architect
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
