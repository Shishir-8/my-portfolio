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

  return (
    <>
      <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2">
        <TooltipProvider>
          <Dock direction="middle">
            {navLinks.map((item) => {
              const Icon = item.icon
              return (
                <DockIcon key={item.id} className="border border-gray-200">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {item.external ? (
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={item.link}
                        >
                          <Icon />
                        </a>
                      ) : (
                        <Link href={item.link}><Icon /></Link>
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
              <div className="flex h-full w-full items-center justify-center transition duration-300">
                <AnimatedThemeToggler
                  variant="circle"
                  fromCenter={true}
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              </div>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </>
  );
}
