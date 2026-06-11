import Image from "next/image";
import { TypingAnimation } from "../ui/typing-animation";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between gap-12 p-16">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl dark:text-white">
          Hi, I'm <TypingAnimation words={["Shishir", "React Developer"]} loop />
        </h1>

        <p className="max-w-2xl text-md lg:text-lg text-gray-600">
          I build modern and responsive web applications with React and
          Next.js, turning ideas into clean, interactive, and user-friendly
          experiences.
        </p>
      </div>

      <div className="relative h-60 w-60 overflow-hidden rounded-full shrink-0">
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