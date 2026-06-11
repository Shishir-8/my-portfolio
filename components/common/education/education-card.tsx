import { School } from "lucide-react";
import React from "react";

type EducationProps = {
  title: string;
  subTitle: string;
  passedYear: number

}

const EducationCard = ({
  title,
  subTitle,
  passedYear,
}: EducationProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <School className="text-green-500" />
        <div className="flex flex-col">
          <h1 className="font-normal text-md">{title}</h1>
          <p className="text-muted-foreground text-xs">{subTitle}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">Passed Year {passedYear}</p>
    </div>
  );
};

export default EducationCard;
