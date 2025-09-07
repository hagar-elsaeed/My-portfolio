import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md h-30 text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Side */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Hagar Almasidi. All rights reserved.
        </p>

        {/* Right Side - Socials */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/hagar-elsaeed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hagar-abd-elsayed-627460370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:hagaralmasidi@gmail.com"
            className="hover:text-[var(--color-secondary)] transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://mostaql.com/u/hagaralmasidi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition"
          >
            <MdOutlineAddHomeWork size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
