import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
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
  
  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="glass-card max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <motion.div className="md:col-span-2" variants={itemVariants}>
              <div className="rounded-full overflow-hidden border-4 border-primary-500/30 shadow-neon mx-auto max-w-[250px]">
                <img
                  src="https://res.cloudinary.com/dn2hxlyql/image/upload/v1746255562/IMG_9918_1_fgalbm.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3 space-y-4"
              variants={itemVariants}
            >
              <p className="text-lg text-white/80 leading-relaxed">
                Hello! I'm Rohan, a passionate full-stack developer based in
                Bengaluru with a background in Electronics and Communication
                Engineering. I enjoy turning ideas into real-world applications
                and crafting smooth, intuitive user experiences.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in the MERN stack and have built full-fledged
                projects like an e-commerce platform and a ChatGPT clone. From
                frontend interfaces with React and Tailwind CSS to secure
                backend systems with Node.js, Express, and MongoDB or SQL, I
                love building complete solutions.
              </p>
              <motion.div
                className="pt-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center glass-button px-6 py-3 text-white relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
