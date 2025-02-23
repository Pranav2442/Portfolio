import React from 'react';
import { Camera, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
  const contacts = [
    {
      name: "Github",
      icon: <Github className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      link: "https://github.com/Pranav2442",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      link: "https://www.linkedin.com/in/pranav-mailarpawar-529ab9203/",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      link: "mailto:pranavpawar2442@gmail.com",
    },
    {
      name: "Pixel Lens",
      icon: <Camera className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500" />,
      link: "https://pixel-lens.netlify.app/",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6 md:w-8 md:h-8 text-red-600" />,
      link: "https://www.youtube.com/@pranavmailarpawar5900/videos",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-clip-text text-transparent text-white">
      <motion.h2 
            className="text-white text-2xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact Me
          </motion.h2>
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 blur-lg opacity-20 -z-10" />
      </h2>
      
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 transition-transform duration-300 hover:scale-110"
          >
            {contact.icon}
            <span className="mt-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;