import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  image: string;
  icon: IconType;
  link: string;
  tags: string[];
}
