import { useRef, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaGithub, // Added GitHub icon
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiSequelize,
} from "react-icons/si";

const TechStack = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimationControls();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Tech items including JWT, Renderz, and GitHub (without experience)
  const techItems = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-[#E34F26]" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-[#F7DF1E]" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-[#4479A1]" />,
    },
    {
      name: "Sequelize",
      icon: <SiSequelize className="text-[#03AFEF]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-[#7952B3]" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-[#F05032]" />,
    },
    {
      name: "GitHub", // Added GitHub
      icon: <FaGithub className="text-cyan-950" />,
    },
    {
      name: "JWT",
      icon: <FaDatabase className="text-[#F05032]" />,
    },
    {
      name: "Renderz",
      icon: <FaServer className="text-pink-700" />,
    },
  ];

  // Double the array for seamless scrolling
  const doubledTechItems = [...techItems, ...techItems];

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;

    const scroll = async () => {
      await controls.start({
        x: [0, -scrollWidth / 2],
        transition: {
          x: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        },
      });
    };

    scroll();
  }, [controls]);

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="glass-card max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            Tech Stack
          </motion.h2>

          <motion.div className="overflow-hidden" variants={itemVariants}>
            <motion.div
              ref={scrollRef}
              className="flex gap-4"
              animate={controls}
            >
              {doubledTechItems.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="glass-card flex flex-col items-center py-5 px-6 rounded-xl hover:shadow-neon transition-all duration-300 flex-shrink-0"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 10px 3px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-medium text-white whitespace-nowrap">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
