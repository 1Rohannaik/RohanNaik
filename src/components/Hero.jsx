import { motion } from 'framer-motion';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.17, 0.67, 0.83, 0.67],
      }
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-800/50 via-dark-700/30 to-dark-900/70 z-10"></div>
      
      <motion.div 
        className="container mx-auto relative z-20 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"
          variants={itemVariants}
        >
          Rohan Naik
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 text-white/90"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg lg:text-xl mb-10 text-white/70 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting innovative digital experiences with clean code and beautiful user interfaces. 
          Specializing in modern web technologies and creative problem-solving.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="glass-button px-6 py-3 text-lg font-medium text-white border border-primary-500/30 hover:border-primary-500/60"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 10px 3px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="glass-button px-6 py-3 text-lg font-medium text-white border border-secondary-500/30 hover:border-secondary-500/60"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 10px 3px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;