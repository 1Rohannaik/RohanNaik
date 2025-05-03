import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
      }
    }
  };
  
  const projects = [
    {
      id: 2,
      title: "MiAI – Personal AI Assistant",
      description:
        "MiAI is a full-stack AI chatbot platform with free and premium tiers. Features include secure authentication, markdown support, Razorpay integration, and a UI inspired by ChatGPT and Gemini.",
      image:
        "https://res.cloudinary.com/dn2hxlyql/image/upload/v1746261352/Screenshot_2025-05-03_at_1.47.35_PM_hrcvjb.png", // Replace with any suitable AI-themed image if you want
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Sequelize",
        "JWT",
        "Razorpay",
        "Tailwind CSS",
        "OpenRouter API",
      ],
      github: "https://lnkd.in/gzV-8cfZ",
      demo: "https://myai-d0k0.onrender.com",
    },

    {
      id: 3,
      title: "Farm Assist AI",
      description:
        "An AI-powered assistant for farmers with leaf disease detection and crop recommendation. Combines MERN stack with FastAPI and Machine Learning for intelligent, secure predictions.",
      image:
        "https://res.cloudinary.com/dn2hxlyql/image/upload/v1746261396/Screenshot_2025-05-03_at_1.46.31_PM_ua2hry.png", // Change if you prefer a different farm/AI themed image
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "FastAPI",
        "Machine Learning",
        "CNN",
        "Random Forest",
        "JWT",
        "Razorpay",
      ],
      github: "https://github.com/1Rohannaik/SENTINEL_HACK5.0",
      demo: "https://demo.com",
    },
    {
      id: 5,
      title: "Realtime Chat App",
      description:
        "A real-time chat application built with SQL, Sequelize, React, Node.js, and Express. It features secure JWT-based authentication, live messaging with Socket.IO, and a modern chat interface.",
      image:
        "https://res.cloudinary.com/dn2hxlyql/image/upload/v1746261309/Screenshot_2025-05-03_at_2.04.13_PM_f5plxm.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Sequelize",
        "Socket.IO",
        "JWT",
      ],
      github: "https://github.com", // Replace with your actual repo
      demo: "https://demo.com", // Replace with your deployed app URL
    },
  ];
  
  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          className="glass-card max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title mb-12"
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-5 aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block text-xs bg-primary-500/20 text-primary-300 py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-start space-x-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button text-sm flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                  
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button text-sm flex items-center space-x-2 border border-secondary-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 10px 3px rgba(6, 182, 212, 0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;