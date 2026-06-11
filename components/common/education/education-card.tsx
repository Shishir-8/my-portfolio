import { LucideIcon, LucideProps, School } from "lucide-react";
import React from "react";

type EducationProps = {
  title: string;
  subTitle: string;
  passedYear: number;
  Icon: LucideIcon;
  iconColor?: string;

}

const EducationCard = ({
  title,
  subTitle,
  passedYear,
  Icon,
  iconColor
}: EducationProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`${iconColor}`} />
        <div className="flex flex-col">
          <h1 className="font-medium text-md dark:text-white">{title}</h1>
          <p className="text-muted-foreground text-xs">{subTitle}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">Passed Year {passedYear}</p>
    </div>
  );
};

export default EducationCard;
