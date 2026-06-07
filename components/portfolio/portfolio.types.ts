import type { ChangeEvent, FormEvent } from "react";

export type SectionId = "home" | "about" | "experience" | "projects" | "certifications" | "contact";
export type SocialKey = "linkedin" | "instagram" | "twitter" | "github" | "tiktok";
export type NavIconKey = "menu" | "database" | "calendar" | "lab" | "certificate" | "chat";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
  positionClass: string;
};

export type NavigationItem = {
  id: SectionId;
  label: string;
  className?: string;
  icon: NavIconKey;
};

export type ExperienceItem = {
  company: string;
  location: string;
  logo: string;
  logoClass: string;
  logoImage: string;
  type: string;
  role: string;
  duration: string;
  ongoing: boolean;
  centered?: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
};

export type CertificationItem = {
  id: number;
  name: string;
  provider: string;
  status: string;
  date: string;
};

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;
export type ContactInputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type ContactSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;
