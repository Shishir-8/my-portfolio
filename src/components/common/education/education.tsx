import React from "react";
import EducationCard from "./education-card";
import { School } from "lucide-react";

export default function Education() {
  return (
    <section className="">
      <h1 className="text-xl font-semibold dark:text-white">Education</h1>

      <div className="pt-6 flex flex-col gap-4">
        <EducationCard
          title="Bachelor in Computer Science and Information Technology(CSIT)"
          subTitle="Ambikeshwari Campus, Tribhuwan University"
          passedYear={2024}
          Icon={School}
          iconColor="text-orange-500"
        />
        <hr />

        <EducationCard
          title="Higher Secondary Education(+2 Science)"
          subTitle="Mount View English Boarding School, "
          passedYear={2020}
          Icon={School}
          iconColor="text-blue-500"
        />
        <hr />

        <EducationCard
          title="Secondary Level Education"
          subTitle="Mount View English Boarding School"
          passedYear={2018}
          Icon={School}
          iconColor="text-green-500"
        />
        <hr />
      </div>
    </section>
  );
}
