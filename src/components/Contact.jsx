import React from "react";
import { Camera, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/Pranav2442",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/pranav-mailarpawar-529ab9203/",
      gradientFrom: "from-purple-500",
      gradientTo: "to-blue-500",
    },
    {
      name: "Gmail",
      icon: Mail,
      link: "mailto:pranavpawar2442@gmail.com",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
    },
    {
      name: "Pixel Lens",
      icon: Camera,
      link: "https://pixel-lens.netlify.app/",
      gradientFrom: "from-blue-600",
      gradientTo: "to-indigo-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      link: "https://www.youtube.com/@pranavmailarpawar5900/videos",
      gradientFrom: "from-indigo-600",
      gradientTo: "to-purple-600",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-3"
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto mt-3 sm:mt-4 rounded-full relative overflow-hidden mb-5"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/50"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />
        </motion.div>
        
        <div className="flex justify-center items-center space-x-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className={`
                bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo}
                text-white
                rounded-full 
                p-3 
                flex 
                items-center 
                justify-center 
                hover:scale-110 
                transition-transform 
                duration-300 
                shadow-lg
                hover:shadow-xl
                group
              `}
              title={contact.name}
            >
              <contact.icon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;