import React from "react";
import { FaYoutube, FaLinkedin, FaEnvelope, FaGit, FaGithub, FaCamera, FaCameraRetro } from "react-icons/fa";
import { subText } from "../constants";
import { styles } from "../styles";

const Contact = () => {
  const contacts = [
    {
      name: "Github",
      icon: <FaGithub size={30} className="text-white" />,
      link: "https://github.com/Pranav2442",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={30} className="text-blue-700" />,
      link: "https://www.linkedin.com/in/pranav-mailarpawar-529ab9203/",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope size={30} className="text-orange-500" />,
      link: "mailto:pranavpawar2442@gmail.com",
    },
    {
      name: "Pixel Lens",
      icon: <FaCameraRetro size={30} className="bg-gradient-to-r from-purple-500 to-pink-500" />,
      link: "https://pixel-lens.netlify.app/",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={30} className="text-red-600" />,
      link: "https://www.youtube.com/@pranavmailarpawar5900/videos",
    },
    
  ];

  return (
    <section className="p-8 rounded-2xl shadow-lg">
      <h2 className={`text-2xl ${styles.heroSubText} text-center mb-6`}>Contact Me</h2>
      <div className="flex justify-center gap-6">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 transition-transform transform hover:scale-110"
          >
            {contact.icon}
            <span className="mt-2 text-sm font-medium">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
