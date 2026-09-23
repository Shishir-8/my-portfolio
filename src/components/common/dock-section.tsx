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
import { navLinks } from "@/src/lib/navbar-data";

export default function DockSection() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="pointer-events-auto relative mx-auto h-14 w-fit gap-2 border border-border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center justify-center"
                    >
                      <DockIcon className="rounded-3xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        <Icon className="h-5 w-5" />
                      </DockIcon>
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <DockIcon className="rounded-3xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        <Icon className="h-5 w-5" />
                      </DockIcon>
                    </Link>
                  )}
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]"
                >
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <Separator
            orientation="vertical"
            className="m-auto h-2/3 w-px bg-border"
          />

          <Tooltip>
            <TooltipTrigger asChild>
              <DockIcon className="rounded-3xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <AnimatedThemeToggler className="flex h-full w-full items-center justify-center" />
              </DockIcon>
            </TooltipTrigger>

            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]"
            >
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </Dock>
      </TooltipProvider>
    </div>
  );
}