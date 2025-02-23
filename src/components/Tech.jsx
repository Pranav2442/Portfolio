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
        {/* Floating Dialogue Boxes */}
        <div className="absolute inset-[-100px] md:inset-[-150px] lg:inset-[-200px] pointer-events-none z-20">
          {dialogues.map((dialogue, index) => {
            const angle = (index * (360 / dialogues.length)) * (Math.PI / 180);
            const radius = {
              base: 200,  // mobile
              md: 300,    // medium screens
              lg: 350     // large screens
            };

            return (
              <motion.div
                key={index}
                className="absolute flex items-center gap-3 bg-black/40 backdrop-blur-sm
                          p-3 lg:p-4 rounded-xl border border-white/10 hover:scale-110
                          transition-transform duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  x: [0, 10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(${Math.cos(angle) * radius.base}px, ${Math.sin(angle) * radius.base}px)`,
                  "@media (min-width: 768px)": {
                    transform: `translate(${Math.cos(angle) * radius.md}px, ${Math.sin(angle) * radius.md}px)`
                  },
                  "@media (min-width: 1024px)": {
                    transform: `translate(${Math.cos(angle) * radius.lg}px, ${Math.sin(angle) * radius.lg}px)`
                  }
                }}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${dialogue.color}
                               flex items-center justify-center shadow-lg`}>
                  <dialogue.icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <div className="hidden lg:block">
                  <h3 className="text-white font-semibold whitespace-nowrap">{dialogue.text}</h3>
                  <p className="text-white/70 text-sm whitespace-nowrap">{dialogue.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </div> 
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
        className="w-full max-w-3xl bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Editor Header */}
        <div className="flex items-center gap-2 px-6 py-4 bg-black/30 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <Terminal size={16} className="text-white/50" />
            <span className="text-sm text-white/50">developer.ts</span>
            <Flame size={16} className="text-orange-400" />
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-6 font-mono text-[15px] relative">
          <div className="absolute left-6 top-6 text-white/20 select-none">
            {codeContent.map((_, i) => (
              <div key={i} className="h-6 text-right pr-4 font-light">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="pl-16">
            {codeContent.map((line, index) => (
              <motion.pre
                key={index}
                className={`h-6 ${
                  line.includes('*/') ? 'text-gray-400' :
                  line.includes('*') ? 'text-blue-400' :
                  line.startsWith('const') ? 'text-purple-400' :
                  line.includes(':') ? 'text-blue-300' :
                  line.includes('"') ? 'text-emerald-300' :
                  line.includes('//') ? 'text-gray-400' :
                  'text-white/90'
                } font-medium`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <code>
                  {index < currentLineIndex && line}
                  {index === currentLineIndex && (
                    <>
                      {line.slice(0, currentCharIndex)}
                      <motion.span
                        className="inline-block w-[2px] h-4 bg-white/50 relative top-[2px]"
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