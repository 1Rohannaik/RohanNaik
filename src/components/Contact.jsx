import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });

    setTimeout(() => {
      setFormState({
        submitted: true,
        submitting: false,
        error: null,
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setFormState({ submitted: false, submitting: false, error: null });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="glass-card max-w-3xl mx-auto px-6 py-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="section-title mb-6 text-center"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>

          <motion.p
            className="text-white/70 mb-10 text-center"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? I’d love to hear from
            you.
          </motion.p>

          {formState.submitted ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-success-500/20 text-success-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-white/70">
                Thanks for reaching out. I’ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} variants={containerVariants}>
              <motion.div className="mb-6 relative" variants={itemVariants}>
                <FaUser className="absolute top-5 left-4 text-primary-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input pl-10 pt-6 peer"
                  placeholder=" "
                />
                <label className="absolute text-white/60 left-10 top-4 text-sm transition-all duration-300 peer-focus:text-primary-400 peer-focus:text-xs peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:top-2">
                  Your Name
                </label>
              </motion.div>

              <motion.div className="mb-6 relative" variants={itemVariants}>
                <FaEnvelope className="absolute top-5 left-4 text-primary-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-input pl-10 pt-6 peer"
                  placeholder=" "
                />
                <label className="absolute text-white/60 left-10 top-4 text-sm transition-all duration-300 peer-focus:text-primary-400 peer-focus:text-xs peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:top-2">
                  Your Email
                </label>
              </motion.div>

              <motion.div className="mb-6 relative" variants={itemVariants}>
                <FaCommentDots className="absolute top-5 left-4 text-primary-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-input pl-10 pt-6 peer"
                  placeholder=" "
                ></textarea>
                <label className="absolute text-white/60 left-10 top-4 text-sm transition-all duration-300 peer-focus:text-primary-400 peer-focus:text-xs peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:top-2">
                  Your Message
                </label>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full glass-button py-4 text-white font-medium relative overflow-hidden group"
                disabled={formState.submitting}
                variants={itemVariants}
                whileHover={{
                  boxShadow: "0 0 15px 5px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {formState.submitting ? "Sending..." : "Send Message"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
