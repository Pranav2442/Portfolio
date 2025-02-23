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
  Shield
} from 'lucide-react';

const Tech = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const dialogues = [
    {
      icon: Code2,
      text: "Full Stack Development",
      subtext: "React • Ts • Node • Springboot • Extjs • DWR",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Smartphone,
      text: "App Development",
      subtext: "Flutter • Dart",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      text: "Backend Expert",
      subtext: "OracleDB • MongoDB • DynamoDB • Postgresql",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Palette,
      text: "Creative Design",
      subtext: "UI/UX • Animations",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Brain,
      text: "Problem Solver",
      subtext: "Clean & Efficient Code",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Globe,
      text: "Web & App Craftsman",
      subtext: "Modern & Responsive",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Cloud,
      text: "Cloud Solutions",
      subtext: "AWS • Docker • Kubernetes",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Layers,
      text: "Full Stack Apps",
      subtext: "End-to-End Solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      text: "Performance Optimization",
      subtext: "Speed & Efficiency",
      color: "from-red-500 to-orange-500"
    },
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
    '  }',
    '};',
    '',
    '// Transforming ideas into reality 🚀'
  ];

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
    <div className="w-full min-h-screen flex items-center justify-center p-4 relative">
      {/* Floating Dialogue Boxes */}
      {dialogues.map((dialogue, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center gap-3 bg-black/40 backdrop-blur-sm
                     p-3 lg:p-4 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2
          }}
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index % 3) * 30}%`,
            transform: 'scale(0.8)',
            '@media (min-width: 1024px)': {
              transform: 'scale(1)',
              left: index % 2 === 0 ? '5%' : '75%',
            }
          }}
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${dialogue.color}
                          flex items-center justify-center`}>
            <dialogue.icon size={24} className="text-white" />
          </div>
          <div className="hidden lg:block">
            <h3 className="text-white font-semibold">{dialogue.text}</h3>
            <p className="text-white/70 text-sm">{dialogue.subtext}</p>
          </div>
        </motion.div>
      ))}

      {/* Code Editor */}
      <motion.div 
        className="w-full max-w-4xl bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Editor Header */}
        <div className="flex items-center gap-2 px-3 sm:px-6 py-3 sm:py-4 bg-black/30 border-b border-white/10">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-1 sm:gap-2">
            <Terminal size={14} className="text-white/50 hidden sm:block" />
            <span className="text-xs sm:text-sm text-white/50">developer.ts</span>
            <Flame size={14} className="text-orange-400" />
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm md:text-[15px] relative">
          <div className="absolute left-3 sm:left-6 top-3 sm:top-6 text-white/20 select-none">
            {codeContent.map((_, i) => (
              <div key={i} className="min-h-5 sm:min-h-6 text-right pr-2 sm:pr-4 font-light text-[10px] sm:text-xs">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="pl-8 sm:pl-16">
            {codeContent.map((line, index) => (
              <motion.pre
                key={index}
                className={`min-h-5 sm:min-h-6 ${
                  line.includes('*/') ? 'text-gray-400' :
                  line.includes('*') ? 'text-blue-400' :
                  line.startsWith('const') ? 'text-purple-400' :
                  line.includes(':') ? 'text-blue-300' :
                  line.includes('"') ? 'text-emerald-300' :
                  line.includes('//') ? 'text-gray-400' :
                  'text-white/90'
                } font-medium break-words whitespace-pre-wrap`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <code className="block w-full">
                  {index < currentLineIndex && line}
                  {index === currentLineIndex && (
                    <>
                      {line.slice(0, currentCharIndex)}
                      <motion.span
                        className="inline-block w-[2px] h-3 sm:h-4 bg-white/50 relative top-[2px]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </>
                  )}
                </code>
              </motion.pre>
            ))}
          </div>
        </div>

        <motion.div
          className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500"
          initial={{ width: "0%" }}
          animate={{ width: isComplete ? "100%" : `${(currentLineIndex / codeContent.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default Tech;