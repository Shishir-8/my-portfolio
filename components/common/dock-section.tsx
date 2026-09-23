"use client";

import { Dock, DockIcon } from "../ui/dock";
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
import { navLinks } from "@/lib/navbar-data";

export default function DockSection() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <TooltipProvider>
        <Dock direction="middle">
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <DockIcon
                key={item.id}
                className="border border-gray-200"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    {item.external ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full w-full items-center justify-center"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        href={item.link}
                        className="flex h-full w-full items-center justify-center"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    )}
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}

          <Separator orientation="vertical" />

          <DockIcon className="border border-gray-200">
            <div className="flex h-full w-full items-center justify-center">
              <AnimatedThemeToggler
                variant="circle"
                fromCenter
                onClick={toggleTheme}
              />
            </div>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}