import React from "react";
import EducationCard from "./education-card";

export default function Education() {
  return (
    <section className="p-16">
      <h1 className="text-xl font-semibold">Education</h1>

      <div className="pt-8 flex flex-col gap-4">
        <EducationCard
          title="Mount view"
          subTitle="Primary Education"
          passedYear={2082}
        />
        <hr />

        <EducationCard
          title="Mount view"
          subTitle="Secondary Education"
          passedYear={2082}
        />
        <hr />

        <EducationCard
          title="AMC"
          subTitle="Bachelor in CSIT"
          passedYear={2082}
        />
        <hr />
      </div>
    </section>
  );
}
