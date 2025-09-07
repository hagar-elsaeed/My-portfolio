import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import SkillsSection from "./SkillsSection";

const About = () => {
  return (
    <div className="">
      <div
        id="about"
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 py-20 text-white"
      >
        {/* صورة - تتحرك من اليسار */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={about}
            alt="About Me"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 40px rgba(0, 0, 0, 0.7)",
            }}
          />
        </motion.div>

        {/* النص - يتحرك من اليمين */}
        <motion.div
          className="w-full md:w-1/2 max-w-2xl"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--color-secondary)]">
            About Me
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-300">
            I'm Hagar Almasidi, a Front-end Developer specializing in React and
            JavaScript. I have experience designing and building user interfaces
            using HTML and CSS, with Tailwind CSS to speed up development and
            ensure quality design.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-300">
            I also have experience working with WordPress, customizing themes
            and plugins to meet client needs.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            I focus on building web applications with good performance and
            smooth user experience, and I am always eager to learn new
            technologies to improve my skills.
          </p>
        </motion.div>
      </div>

      {/* سكشن المهارات */}
      <SkillsSection />
    </div>
  );
};

export default About;
