import React from "react";
import ProjectCard from "./project-card";

const ProjectSection = () => {
  return (
    <section id="projects" className="">
      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-gray-300"></div>

        <h1 className="bg-black text-white font-medium text-sm py-1 px-4 rounded-md">
          My Projects
        </h1>

        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
