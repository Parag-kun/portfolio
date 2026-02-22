import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "GenAI"
  | "ML"
  | "Devops + MLops";

export type SkillsData = Record<Category, Skill[]>;
