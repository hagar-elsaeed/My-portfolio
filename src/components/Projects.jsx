import React from "react";
import projectsData from "./projectsData"; // استيراد بيانات المشاريع

const Projects = () => {
  return (
    <div id="projects" className="px-6 md:px-36 py-20 mt-20 mb-20 text-white">
      <h2 className="text-4xl font-bold mb-30 text-center text-[var(--color-secondary)]">
        ___ latest Projects ___
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map(({ id, name, image, description }) => (
          <div
            key={id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={name}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-[var(--color-secondary)] mb-2">
              {name}
            </h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
