import { ReactNode } from "react";

export interface JourneyExperience {
  company: string;
  role: string;
  description: ReactNode;
  image: string;
  period: string;
}
