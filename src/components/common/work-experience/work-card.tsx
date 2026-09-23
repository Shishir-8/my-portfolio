import React from "react";


type CardProps = {
    company: string;
    duration: string;
    description: string;
    contributions: string[]
}

const ExperienceCard = ({
  company,
  duration,
  description,
  contributions,
}: CardProps) => {
  return (
    <div className="relative pl-6">
      {/* dot */}
      <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-black" />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-semibold">{company}</h2>

          <span className="text-sm text-muted-foreground">
            {duration}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {contributions?.length > 0 && (
          <ul className="text-sm text-muted-foreground space-y-1">
            {contributions.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;