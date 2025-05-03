import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
  
  const timelineItems = [
    {
      id: 2,
      role: "IEEE CAS Student Intern",
      company: "IEEE CAS Bangalore Chapter",
      period: "August 2024 - November 2024",
      description:
        "Completed a 14-week internship under the IEEE CAS Student Internship Program 2.0, organized by the IEEE CAS Bangalore Chapter. Gained practical experience and exposure to circuits and systems through structured training and collaborative project work.",
    },
  ];
  
  return (
    <section id="experience" className="section-padding" ref={ref}>
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
            Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 transform -translate-x-1/2 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full shadow-neon"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-0 mb-16 last:mb-0 md:even:flex-row-reverse`}
                variants={itemVariants}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div 
                    className="glass-card"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-xs text-primary-400 font-medium">{item.period}</span>
                    <h3 className="text-xl font-semibold text-white mt-1">{item.role}</h3>
                    <h4 className="text-lg text-secondary-400 mb-3">{item.company}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </motion.div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-x-1/2 shadow-neon z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;