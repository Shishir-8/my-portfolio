import React from "react";
import ProjectCard from "./project-card";

const ProjectSection = () => {
  return (
    <section>
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

        <h1 className="bg-black text-white font-medium py-1.5 px-4 rounded-md">
          My Projects
        </h1>

        <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
