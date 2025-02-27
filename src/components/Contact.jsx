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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex overflow-x-auto justify-center items-center space-x-4 sm:space-x-6 pb-2"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className={`
                bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo}
                text-white
                rounded-full 
                flex-shrink-0
                p-2 sm:p-3 
                flex 
                items-center 
                justify-center 
                shadow-lg
                hover:shadow-xl
                group
                w-10 h-10 sm:w-14 sm:h-14
                cursor-pointer
              `}
              title={contact.name}
            >
              <contact.icon className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;