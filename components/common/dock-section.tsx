"use client";

import { Dock, DockIcon } from "../ui/dock";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Code2, FolderGit2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";

export default function DockSection() {
  const navLinks = [
    { id: 1, link: "/", label: "Home", icon: <FaHome />, external: false },
    {
      id: 2,
      link: "https://github.com/shishir-8",
      label: "Github",
      icon: <FaGithub />,
      external: true,
    },
    {
      id: 3,
      link: "/",
      label: "Linkedin",
      icon: <FaLinkedin />,
      external: true,
    },
    {
      id: 4,
      link: "#skills",
      label: "Skills",
      icon: <Code2 />,
      external: false,
    },

    {
      id: 5,
      link: "#projects",
      label: "Projects",
      icon: <FolderGit2 />,
      external: false,
    },
  ];

  const {theme, setTheme} = useTheme()

  return (
    <>
      <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2">
        <TooltipProvider>
          <Dock direction="middle">
            {navLinks.map((item) => (
              <DockIcon key={item.id} className="border border-gray-200">
                <Tooltip>
                  <TooltipTrigger asChild>
                    {item.external ? (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.link}
                      >
                        {item.icon}
                      </a>
                    ) : (
                      <Link href={item.link}>{item.icon}</Link>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" />

            <DockIcon className="border border-gray-200">
              <div className="flex h-full w-full items-center justify-center">
                <AnimatedThemeToggler
                 variant="circle" 
                 fromCenter={true}
                  onClick={() => {
                    setTheme(theme === "dark" ? "light": "dark")
                  }} />
              </div>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </>
  );
}
