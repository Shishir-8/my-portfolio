import Image from "next/image";
import { TypingAnimation } from "../ui/typing-animation";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-6 pt-16">
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl dark:text-white">
          Hi, I'm <TypingAnimation words={["Shishir", "React Developer"]} loop />
        </h1>

        <p className="text-md lg:text-lg text-gray-600">
          I build modern and responsive web applications with React and
          Next.js, turning ideas into clean, interactive, and user-friendly
          experiences.
        </p>
      </div>

      <div className="relative h-40 w-40 md:h-60 md:w-60 overflow-hidden rounded-full shrink-0 order-1 md:order-2">
        <Image
          src="/hero.jpeg"
          alt="Shishir Oli"
          fill
          className="object-cover grayscale-40"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;