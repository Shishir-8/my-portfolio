"use client";

import { Dock, DockIcon } from "../ui/dock";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Code2, FolderGit2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function DockSection() {
  const navLinks = [
    { id: 1, link: "/", label: "Home", icon: <FaHome /> },
    {
      id: 2,
      link: "https://github.com/shishir-8",
      label: "Home",
      icon: <FaGithub />,
    },
    { id: 3, link: "/", label: "Home", icon: <FaLinkedin /> },
    { id: 4, link: "/", label: "Skills", icon: <Code2 /> },
    { id: 5, link: "/", label: "Projects", icon: <FolderGit2 /> },
  ];
  return (
   <>
     <div className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2">
      <TooltipProvider>
        <Dock iconSize={48} direction="middle">
          {navLinks.map((item) => (
            <DockIcon key={item.id} className="border border-gray-200">
              <Tooltip>
              <TooltipTrigger asChild>
                <a target="_blank" href={item.link} className="w-6 h-6 rounded-full text-muted-foreground">
                  {item.icon}
                </a>

              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
   </>
  );
}
