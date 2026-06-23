import React from "react";
import ExperienceCard from "./work-card";
import { experiences } from "../../../lib/work-data";


const WorkExperience = () => {
  return (
    <section className="mt-24">
      <h1 className="text-2xl font-bold mb-10">Work Experience</h1>

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;