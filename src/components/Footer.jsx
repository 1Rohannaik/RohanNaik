import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 relative z-40">
      <div className="container mx-auto">
        <motion.div 
          className="glass-card py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-white/70 text-sm">
            © {currentYear} Rohan Naik. All rights reserved.
          </p>
          <p className="text-center text-white/60 text-xs mt-2 flex items-center justify-center">
            Project by
            <FaHeart className="mx-1 text-primary-500" />
            Rohan Naik
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;