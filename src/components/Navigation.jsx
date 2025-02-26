import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { profile } from "../assets";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 z-40 w-full backdrop-blur-sm bg-transparent
        transform transition-all duration-500 ease-in-out
        ${scrolled ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-600 animate-gradient-x"></div>

      <div className="relative h-16 sm:h-20">
        <div className="relative h-full px-4 sm:px-6 md:px-16">
          <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between">
            <button
              className="group relative flex items-center gap-4 sm:gap-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                <div
                  className={`
                    absolute -inset-1 animate-spin-slow
                    bg-gradient-to-r from-violet-600 via-indigo-700 to-blue-800
                    rounded-full opacity-70
                    transition-all duration-300
                    ${isHovered ? "blur-md scale-110" : "blur-sm scale-100"}
                  `}
                />

                <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-white/20">
                  <img
                    src={profile}
                    alt="Profile"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  <div
                    className={`
                      absolute -right-1 -top-1
                      transition-all duration-300 transform
                      ${
                        isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                      }
                    `}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-300 animate-pulse" />
                  </div>

                  <div
                    className={`
                      absolute -left-1 -bottom-1
                      transition-all duration-500 transform
                      ${
                        isHovered
                          ? "scale-110 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                  >
                    <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-blue-300" />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="transform transition-all duration-300">
                  <div className="relative">
                    <p className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-transparent bg-clip-text bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500">
                      Pranav Mailarpawar
                    </p>

                    <div
                      className={`
                        absolute bottom-0 left-0 h-0.5 w-full
                        bg-gradient-to-r from-violet-500 via-blue-500 to-purple-600
                        transform origin-left transition-transform duration-300 ease-out
                        ${isHovered ? "scale-x-100" : "scale-x-0"}
                      `}
                    />
                  </div>

                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${
                        isHovered
                          ? "max-h-20 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }
                    `}
                  >
                    <p className="text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mt-1 flex items-center">
                      <span className="mr-2">Software Engineer</span>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                    </p>
                  </div>
                </div>
              </div>
            </button>

            <div className="flex items-center">
              <div className="flex items-center h-6 sm:h-8 gap-0.5">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-0.5 sm:w-0.5 bg-gradient-to-b from-indigo-400/50 to-violet-500/50 rounded-full"
                    style={{
                      animation: `wave ${
                        1 + Math.random() * 0.5
                      }s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0.5 + Math.random() * 0.5,
                    }}
                  ></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i + 10}
                    className="h-full w-0.5 hidden sm:block bg-gradient-to-b from-indigo-400/50 to-violet-500/50 rounded-full"
                    style={{
                      animation: `wave ${
                        1 + Math.random() * 0.5
                      }s ease-in-out infinite alternate`,
                      animationDelay: `${(i + 10) * 0.05}s`,
                      opacity: 0.5 + Math.random() * 0.5,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: scaleY(0.2);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes gradient-x {
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

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
