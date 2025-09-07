import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMenuUnfold2Line, RiCloseLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Nav */}
      <nav
        className="flex justify-between items-center px-6 md:px-36 py-6 shadow-md bg-white/10 backdrop-blur-md sticky top-0 z-50"
        style={{
          color: "var(--color-main)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {/* Logo */}
        <a href="#">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, color: "var(--color-secondary)" }}
            className="text-2xl font-bold"
            style={{ color: "var(--color-secondary)" }}
          >
            Portfolio
          </motion.h1>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-base">
          {links.map(({ href, label }) => (
            <li key={href} className="cursor-pointer">
              <a
                href={href}
                onClick={() => setActiveLink(href)}
                className={`transition-colors duration-200 ${
                  activeLink === href
                    ? "text-[var(--color-secondary)] underline"
                    : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RiCloseLine className="text-3xl text-[var(--color-main)] hover:text-[var(--color-secondary)] transition duration-200" />
            ) : (
              <RiMenuUnfold2Line className="text-3xl text-[var(--color-main)] hover:text-[var(--color-secondary)] transition duration-200" />
            )}
          </button>
        </div>
        <a
          href="https://github.com/hagar-elsaeed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-secondary)] hover:text-white transition"
        >
          <FaGithub size={25} />
        </a>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-2 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 bg-gray-800 backdrop-blur-md md:hidden text-base font-medium z-40"
          style={{
            color: "var(--color-main)",
          }}
        >
          {links.map(({ href, label }) => (
            <li
              key={href}
              onClick={() => {
                setActiveLink(href);
                setIsOpen(false);
              }}
            >
              <a
                href={href}
                className={`transition-colors duration-200 ${
                  activeLink === href
                    ? "text-[var(--color-secondary)] underline"
                    : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default Navbar;
