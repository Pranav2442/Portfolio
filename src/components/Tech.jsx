import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Smartphone,
  Server,
  Sparkles,
  Laptop,
  Palette,
  Rocket,
  Brain,
  Globe,
  Flame,
  Database,
  Cloud,
  Layers,
  Cpu,
  Shield,
  Zap,
  Binary
} from 'lucide-react';

const Tech = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [binaryStream, setBinaryStream] = useState('');

  const dialogues = [
    {
      icon: Code2,
      text: "Full Stack Development",
      subtext: "React • Ts • Node • Springboot • Extjs • DWR",
      color: "from-violet-500 to-purple-600",
      position: { top: "15%", left: "10%" }
    },
    {
      icon: Smartphone,
      text: "App Development",
      subtext: "Flutter • Dart",
      color: "from-blue-500 to-cyan-500",
      position: { top: "25%", left: "65%" }
    },
    {
      icon: Database,
      text: "Backend Expert",
      subtext: "OracleDB • MongoDB • DynamoDB • Postgresql",
      color: "from-green-500 to-emerald-600",
      position: { top: "40%", left: "15%" }
    },
    {
      icon: Palette,
      text: "Creative Design",
      subtext: "UI/UX • Animations",
      color: "from-pink-500 to-rose-500",
      position: { top: "50%", left: "70%" }
    },
    {
      icon: Brain,
      text: "Problem Solver",
      subtext: "Clean & Efficient Code",
      color: "from-amber-500 to-orange-600",
      position: { top: "65%", left: "20%" }
    },
    {
      icon: Globe,
      text: "Web & App Craftsman",
      subtext: "Modern • Responsive",
      color: "from-emerald-500 to-teal-600",
      position: { top: "75%", left: "60%" }
    }
  ];

  const codeContent = [
    '/**',
    ' * Digital Solutions Architect',
    ' * Crafting innovative experiences',
    ' */',
    '',
    'const engineer = {',
    '  role: "Full Stack Developer",',
    '  expertise: [',
    '    "Web Development 🌐",',
    '    "Mobile Apps 📱",',
    '    "Creative Design ✨"',
    '  ],',
    '',
    '  craftsmanship: {',
    '    focus: "pixel-perfect",',
    '    approach: "user-centric"',
    '  },',
    '  mission: "Crafting Tomorrow\'s Tech Today"',
    '};',
    '',
    '// Transforming ideas into reality 🚀'
  ];

  useEffect(() => {
    const keyframes = `
      @keyframes binaryRain {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      @keyframes glow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 0.3; }
      }
      @keyframes borderGlow {
        0%, 100% { border-color: rgba(6, 182, 212, 0.3); }
        50% { border-color: rgba(6, 182, 212, 0.1); }
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryStream(
        Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLineIndex < codeContent.length) {
      const line = codeContent[currentLineIndex];
      if (currentCharIndex < line.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 relative overflow-hidden sm:p-4 md:p-6">
      {dialogues.map((dialogue, index) => (
        <motion.div
          key={index}
          className={`absolute flex items-center gap-2 sm:gap-4 bg-gray-900/30 backdrop-blur-md 
                     p-2 sm:p-4 rounded-xl border border-white/5 cursor-pointer
                     hover:bg-gray-800/40 transition-colors duration-300
                     ${hoveredBox === index ? 'z-50 scale-110' : 'z-30'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: [0, hoveredBox === index ? 0 : 10, 0],
            y: [0, hoveredBox === index ? 0 : -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
          style={{
            top: dialogue.position.top,
            left: dialogue.position.left,
          }}
          onHoverStart={() => setHoveredBox(index)}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${dialogue.color}
                          flex items-center justify-center transform 
                          transition-transform duration-300
                          ${hoveredBox === index ? 'scale-110' : ''}`}>
            {React.createElement(dialogue.icon, {
              size: window.innerWidth < 640 ? 20 : 28,
              className: "text-white"
            })}
          </div>
          <div className="hidden sm:block">
            <h3 className="text-white font-bold text-base lg:text-lg">{dialogue.text}</h3>
            <p className="text-white/70 text-xs lg:text-sm">{dialogue.subtext}</p>
          </div>
        </motion.div>
      ))}

      <motion.div 
        className="w-[99%] sm:w-full max-w-4xl bg-gray-900/20 backdrop-blur-lg rounded-xl overflow-hidden 
                   border border-white/5 shadow-2xl z-40 relative group mx-auto mt-15 sm:mt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl"
             style={{ animation: 'borderGlow 2s ease-in-out infinite' }} />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl"
             style={{ animation: 'borderGlow 2s ease-in-out infinite', animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-xl"
             style={{ animation: 'borderGlow 2s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl"
             style={{ animation: 'borderGlow 2s ease-in-out infinite', animationDelay: '1.5s' }} />
        
        
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex items-center gap-3 px-4 h-8 sm:h-10 md:h-12 sm:px-6 bg-black/10 border-b border-white/5">
          
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="binary-rain">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-[10px] text-cyan-500 font-mono whitespace-nowrap"
                  style={{
                    left: `${i * 10}%`,
                    animation: `binaryRain ${1 + Math.random() * 3}s linear infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {binaryStream}
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex gap-2 relative z-10">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500/70 relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-red-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500/70 relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-yellow-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500/70 relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-green-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="flex-1 text-center flex items-center justify-center gap-1 sm:gap-2 relative z-10">
            <Terminal size={14} className="text-white/50" />
            <span className="text-xs sm:text-sm text-white/50 font-mono">quantum_dev.ts</span>
            <Binary size={12} className="text-cyan-400 hidden sm:block" />
            <Zap size={12} className="text-yellow-400 hidden sm:block" />
          </div>

          
          <div className="flex items-center gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-purple-500" 
                     style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                <div className="absolute inset-0 rounded-full bg-purple-500 blur-sm opacity-50" 
                     style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              </div>
              <span className="text-xs text-purple-500 font-mono">LIVE</span>
            </div>
          </div>
        </div>

        <div className="p-2 sm:p-4 md:p-6 font-mono text-[11px] sm:text-[13px] md:text-[15px] relative overflow-x-auto">
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 flex flex-col items-end pr-1 sm:pr-2 md:pr-4 
                        border-r border-white/5 ">
            {codeContent.map((_, i) => (
              <div key={i} className="h-6 sm:h-6 md:h-6 flex items-center text-[10px] font-light text-cyan-500/50">
                {String(i + 1).padStart(3, '0')}
              </div>
            ))}
          </div>

          
          <div className="pl-8 sm:pl-12 md:pl-16 min-w-[280px] sm:min-w-[400px] md:min-w-[500px] max-w-full">
            {codeContent.map((line, index) => (
              <motion.pre
                key={index}
                className={`min-h-[24px] sm:min-h-[24px] md:min-h-[24px] py-0 sm:py-0 md:py-0 tracking-wide whitespace-pre-wrap break-all ${
                  line.includes('*') ? 'text-blue-400' :
                  line.startsWith('const') ? 'text-purple-400' :
                  line.includes(':') ? 'text-cyan-300' :
                  line.includes('"') ? 'text-emerald-300' :
                  line.includes('//') ? 'text-gray-400' :
                  'text-white/90'
                } relative group hover:bg-white/5 rounded transition-colors duration-150`}
              >
                <code className="relative z-10 break-words overflow-hidden">
                  {index < currentLineIndex && line}
                  {index === currentLineIndex && (
                    <>
                      {line.slice(0, currentCharIndex)}
                      <motion.span
                        className="inline-block w-[2px] h-3 sm:h-4 bg-cyan-400 relative top-[2px]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </>
                  )}
                </code>
                
                <motion.div
                  className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 
                           transition-opacity rounded-sm"
                />
              </motion.pre>
            ))}
          </div>

          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-50"
                 style={{ animation: 'glow 3s ease-in-out infinite' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-30"
                 style={{ animation: 'glow 4s ease-in-out infinite' }} />
          </div>
        </div>

        
        <div className="relative h-1">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: isComplete ? "100%" : `${(currentLineIndex / codeContent.length) * 100}%` }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: [-100, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-sm" />
        </div>

        
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-white/5 to-purple-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  );
};

export default Tech;