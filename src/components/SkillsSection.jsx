import React, { useState, useEffect, useRef } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiWordpress,
} from 'react-icons/si';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const icons = [
  <SiHtml5 color="#e34c26" size="3rem" />,
  <SiCss3 color="#264de4" size="3rem" />,
  <SiJavascript color="#f0db4f" size="3rem" />,
  <SiReact color="#61DBFB" size="3rem" />,
  <SiTailwindcss color="#38BDF8" size="3rem" />,
  <SiNodedotjs color="#3c873a" size="3rem" />,
  <SiWordpress color="#21759b" size="3rem" />,
];

const IconsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const pauseTimeoutRef = useRef(null);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCount(2); // موبايل
    } else if (width < 768) {
      setVisibleCount(3); // موبايل كبير
    } else if (width < 1024) {
      setVisibleCount(4); // تابلت
    } else {
      setVisibleCount(6); // ديسكتوب
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % icons.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + icons.length) % icons.length);
  };

  const handleManualNav = (callback) => {
    callback();
    setIsPaused(true);

    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setStartIndex((prev) => (prev + 1) % icons.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const visibleIcons = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleIcons.push(icons[(startIndex + i) % icons.length]);
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      {/* زر الرجوع */}
      <button
        onClick={() => handleManualNav(prev)}
        className="p-2 rounded-full transition  text-2xl sm:text-3xl md:text-4xl text-gray-300"
        aria-label="Previous"
      >
        <MdArrowBackIos />
      </button>

      {/* الأيقونات */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 transition-transform duration-500">
        {visibleIcons.map((icon, idx) => (
          <div key={idx} className="text-4xl sm:text-5xl md:text-6xl">
            {icon}
          </div>
        ))}
      </div>

      {/* زر التالي */}
      <button
        onClick={() => handleManualNav(next)}
        className="p-2 rounded-full transition  text-2xl sm:text-3xl md:text-4xl text-gray-300"
        aria-label="Next"
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default IconsCarousel;
