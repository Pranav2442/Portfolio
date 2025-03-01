import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { profile } from "../assets";
import ScrollIndicator from "./ScrollIndicator";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animateOrb, setAnimateOrb] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOrb((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`
        fixed top-0 z-40 w-full backdrop-blur-sm bg-transparent
        transform transition-all duration-500 ease-in-out
        ${scrolled ? "-translate-y-full" : "translate-y-0"}
      `}
      >
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
                    absolute -inset-1
                    bg-gradient-to-r from-violet-600 to-blue-600
                    rounded-full opacity-70
                    transition-all duration-300 ease-in-out
                    blur-sm
                    ${isHovered ? "scale-110" : "scale-100"}
                  `}
                  />

                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-white/40">
                    <img
                      src={profile}
                      alt="Profile"
                      className={`
                      h-full w-full object-cover 
                      transition-all duration-300 ease-out 
                      ${isHovered ? "scale-110" : "scale-100"}
                    `}
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
                      transition-all duration-300 transform
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
                      <p className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 text-transparent bg-clip-text bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500">
                        Pranav Mailarpawar
                      </p>

                      <div
                        className={`
                        absolute bottom-0 left-0 h-0.5 w-full
                        bg-gradient-to-r from-blue-500 to-purple-600
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

              <div className="relative h-12 w-24 sm:w-36 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-md"></div>

                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-indigo-500/30 animate-reverse-spin-slow"></div>
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-purple-500/30 animate-spin-slow"></div>

                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-md shadow-blue-400/50"></div>
                </div>
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 animate-reverse-spin-orbit">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-md shadow-purple-400/50"></div>
                </div>

                <div
                  className={`
                  relative w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                  bg-gradient-to-br from-violet-500 via-indigo-600 to-purple-700
                  shadow-lg shadow-indigo-500/40
                  transition-all duration-1000 ease-in-out
                  ${animateOrb ? "scale-110 shadow-indigo-500/70" : "scale-90"}
                `}
                >
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-violet-300 to-purple-600 opacity-70 blur-[1px]"></div>

                  <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]"></div>
                  <div className="absolute bottom-1 right-1.5 w-1 h-1 rounded-full bg-white/40 blur-[0.5px]"></div>
                </div>

                <div
                  className={`
                absolute w-full h-full
                transition-opacity duration-2000 ease-in-out
                ${animateOrb ? "opacity-70" : "opacity-30"}
              `}
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-0.5 sm:w-1 bg-gradient-to-t from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"
                      style={{
                        height: `${8 + i * 3}px`,
                        transform: `translate(-50%, -50%) rotate(${
                          i * 60
                        }deg) translateY(-${8 + i * 2}px)`,
                      }}
                    ></div>
                  ))}
                </div>

                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                      width: `${1 + Math.random()}px`,
                      height: `${1 + Math.random()}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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

          @keyframes reverse-spin-orbit {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          .animate-reverse-spin-orbit {
            animation: reverse-spin-orbit 12s linear infinite;
          }

          .animate-reverse-spin-slow {
            animation: reverse-spin-orbit 20s linear infinite;
          }

          .animate-spin-slow {
            animation: spin 15s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
      <ScrollIndicator />
    </>
  );
};

export default Navigation;
