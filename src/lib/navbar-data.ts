import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Code2, FolderGit2 } from "lucide-react";
import { IconType } from "react-icons";

type NavLink = {
  id: number;
  link: string;
  label: string;
  icon: IconType;
  external: boolean;
};

export const navLinks: NavLink[] = [
  {
    id: 1,
    link: "/",
    label: "Home",
    icon: FaHome,
    external: false,
  },
  {
    id: 2,
    link: "https://github.com/shishir-8",
    label: "Github",
    icon: FaGithub,
    external: true,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/shishir-oli-430268391/",
    label: "Linkedin",
    icon: FaLinkedin,
    external: true,
  },
  {
    id: 4,
    link: "#skills",
    label: "Skills",
    icon: Code2,
    external: false,
  },
  {
    id: 5,
    link: "#projects",
    label: "Projects",
    icon: FolderGit2,
    external: false,
  },
] as const;