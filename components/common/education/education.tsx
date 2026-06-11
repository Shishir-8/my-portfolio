import React from "react";
import EducationCard from "./education-card";
import { School } from "lucide-react";

export default function Education() {
  return (
    <section className="">
      <h1 className="text-xl font-semibold dark:text-white">Education</h1>

      <div className="pt-6 flex flex-col gap-4">
        <EducationCard
          title="Mount view"
          subTitle="Primary Education"
          passedYear={2074}
          Icon={School}
          iconColor="text-blue-500"
        />
        <hr />

        <EducationCard
          title="Mount view"
          subTitle="Secondary Education"
          passedYear={2077}
          Icon={School}
          iconColor="text-green-500"
        />
        <hr />

        <EducationCard
          title="AMC"
          subTitle="Bachelor in CSIT"
          passedYear={2082}
          Icon={School}
          iconColor="text-orange-500"
        />
        <hr />
      </div>
    </section>
  );
}
