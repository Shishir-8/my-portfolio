import React from "react";

const WorkExperience = () => {
  return (
    <section className="mt-24">
      <h1 className="text-2xl font-bold mb-10">Work Experience</h1>

      <div className="space-y-10">

        {/* Item */}
        <div className="relative pl-6">

          {/* dot */}
          <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-black" />

          {/* content */}
          <div className="flex flex-col gap-2">

            {/* title row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold">
                Frontend Developer (React.js / Next.js)
              </h2>

              <span className="text-sm text-muted-foreground">
                Hunchha Digital - Internship (3 Months)
              </span>
            </div>

            {/* company context */}
            <p className="text-sm text-muted-foreground">
              Built real-world frontend features for production applications.
            </p>

            {/* contributions */}
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Developed Hajir Khata payroll system UI</li>
              <li>• Built landing pages for SiteIQ & Concreate Connect</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;