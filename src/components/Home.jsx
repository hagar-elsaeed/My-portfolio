import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import rightimage from "../assets/pngtree-icon-of-a-latino-female-developer-relations-evangelist-in-clipart-style-png-image_16514081-removebg-preview.png";
const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer", "React Specialist", "WordPress Expert"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

const Home = () => {
  return (
    <div
      id="#"
      className="flex flex-col-reverse mb-45 md:flex-row justify-between items-center mb-30 px-6 md:px-36 mt-20 gap-8"
    >
      {/* النصوص */}
      <div className="text-center md:text-left max-w-xl px-4 ">
        <h2 className="text-lg text-white">Hi, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hagar-almasidi
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          I'm a{" "}
          <span className="text-[var(--color-secondary)] font-semibold">
            <TypedComponent />
          </span>
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </div>

      {/* الصورة */}
      <motion.img
        src={rightimage}
        alt="avatar"
        className="w-64 rounded-lg mt-20"
        style={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        }}
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
    </div>
  );
};

export default Home;
