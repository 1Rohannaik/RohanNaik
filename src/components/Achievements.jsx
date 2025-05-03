import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaServer, FaMedal, FaCertificate, FaLaptopCode } from "react-icons/fa";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const achievements = [
    {
      id: 7,
      title: "Master Node by Building a Real-World RESTful API and Web App",
      context: "Udemy Online Course",
      description:
        "Completed a 42-hour course focused on building secure and scalable RESTful APIs using Node.js. Covered authentication, authorization, Node.js security best practices, and payment integration.",
      icon: <FaServer className="text-black" />,
      certificate:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-20041a7a-c762-4ea1-a980-1545c33fbcf1.jpg",
    },

    {
      id: 6,
      title: "Master Modern React from Beginner to Advanced",
      context: "Udemy Online Course",
      description:
        "Successfully completed an 84-hour course covering React, Context API, React Query, Redux, Tailwind CSS, and advanced component patterns. Gained hands-on experience building scalable, modern web applications.",
      icon: <FaLaptopCode className="text-black" />,
      certificate:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-a932e221-a50b-46b9-982f-db17f92f4a11.jpg",
    },

    {
      id: 4,
      title: "Runner-up",
      context: "Hacknite-25, Manipal Institute of Technology, Bangalore",
      description:
        "Secured runner-up position for building an innovative solution during a 24-hour hackathon focused on real-world problem solving.",
      icon: <FaMedal className="text-black" />,
      certificate:
        "https://res.cloudinary.com/dn2hxlyql/image/upload/v1746262220/Rohan_V_Naik_rspgb6.jpg",
    },

    {
      id: 5,
      title: "IEEE CAS Internship",
      context: "Student Internship Program 2.0",
      description:
        "Successfully completed the IEEE CAS Internship under the Student Internship Program 2.0, organized by the IEEE CAS Bangalore Chapter.",
      icon: <FaCertificate className="text-black" />,
      certificate:
        "https://res.cloudinary.com/dn2hxlyql/image/upload/v1746262483/Screenshot_2025-05-03_at_2.23.50_PM_meim30.png",
    },
  ];

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="glass-card max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="glass-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 10px 3px rgba(99, 102, 241, 0.3)",
                }}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gray-400 to-blue-500 p-3 rounded-full mr-4">
                    <div className="text-2xl text-white">
                      {achievement.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-secondary-400 text-sm mb-2">
                      {achievement.context}
                    </p>
                    <p className="text-white/70 mb-3">
                      {achievement.description}
                    </p>

                    {achievement.certificate && (
                      <motion.a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 text-sm inline-flex items-center hover:text-primary-300 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        View Certificate
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
