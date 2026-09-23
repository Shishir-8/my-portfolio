import React from "react";
import ProjectCard from "./project-card";
import { projectData } from "@/src/lib/project-data";

const ProjectSection = () => {
  return (
    <section id="projects" className="">
      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-gray-300 dark:bg-zinc-700"></div>

        <h1 className="bg-black text-white font-medium text-sm py-2 px-4 rounded-md dark:bg-white dark:text-black">
          My Projects
        </h1>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700"></div>
      </div>

      <div className="flex flex-col gap-y-3 items-center justify-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Check out my latest work
        </h2>
        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {projectData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
