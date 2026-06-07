export type ExperienceFilter = "all" | "professional" | "internship" | "organization" | "ongoing";

export type ExperienceStatus = "ongoing" | "completed";

export type ExperienceItem = {
  id: string;
  company: string;
  meta: string;
  logo: string;
  logoImage?: string;
  type: string;
  role: string;
  duration: string;
  status: ExperienceStatus;
  categories: Exclude<ExperienceFilter, "all">[];
  summary: string;
  contributions: string[];
  stacks: string[];
};

export type ExperienceStat = {
  value: string;
  label: string;
};

export type ExperienceFilterItem = {
  value: ExperienceFilter;
  label: string;
};
