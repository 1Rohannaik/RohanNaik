import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed bottom-0 left-0 right-0 z-50 py-3 px-6 md:px-10 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-5 md:space-x-10">
          {/* Navigation icons */}
          <motion.a
            href="#"
            whileHover="hover"
            variants={iconVariants}
            className="text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="Home"
          >
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 hover:neon-border"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </motion.div>
          </motion.a>

          <motion.a
            href="https://github.com/1Rohannaik"
            target="_blank"
            rel="noopener"
            whileHover="hover"
            variants={iconVariants}
            className="text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 hover:neon-border"
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="h-5 w-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/1rohannaik/"
            target="_blank"
            rel="noopener"
            whileHover="hover"
            variants={iconVariants}
            className="text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 hover:neon-border"
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn className="h-5 w-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/me_rohannaik/"
            target="_blank"
            rel="noopener"
            whileHover="hover"
            variants={iconVariants}
            className="text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 hover:neon-border"
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
