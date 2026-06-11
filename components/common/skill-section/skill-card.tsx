import Image from "next/image";

type SkillCardProps = {
  title: string;
  imageUrl: string;
};

const SkillCard = ({ title, imageUrl }: SkillCardProps) => {
  return (
    <div className="border flex items-center gap-2 px-4 h-8 rounded-full w-fit">
      <Image
        src={imageUrl}
        alt="React Image"
        height={20}
        width={20}
        className="object-cover rounded-sm"
      />
      <h1 className="font-medium text-foreground text-sm">{title}</h1>
    </div>
  );
};

export default SkillCard;
