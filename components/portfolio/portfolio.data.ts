import type {
  CertificationItem,
  ContactFormState,
  ExperienceItem,
  NavigationItem,
  ProjectItem,
  SectionId,
  SocialLink,
} from "./portfolio.types";

export const CONTACT_EMAIL = "fadhluibnua@gmail.com";
export const SECTION_IDS: SectionId[] = ["home", "about", "experience", "projects", "certifications", "contact"];

export const socialLinks: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fadhlu-ibnu/",
    positionClass: "linkedin",
  },
  { key: "instagram", label: "Instagram", href: "#instagram", positionClass: "instagram" },
  { key: "twitter", label: "Twitter", href: "#twitter", positionClass: "twitter" },
  { key: "github", label: "GitHub", href: "https://github.com/fadhluibnu", positionClass: "github" },
  { key: "tiktok", label: "TikTok", href: "#tiktok", positionClass: "tiktok" },
];

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: "menu" },
  { id: "about", label: "About Me", className: "about", icon: "database" },
  { id: "experience", label: "Experience", className: "experience", icon: "calendar" },
  { id: "projects", label: "Projects", className: "projects", icon: "lab" },
  { id: "certifications", label: "Certificate", className: "certifications", icon: "certificate" },
  { id: "contact", label: "Contact", className: "blogs", icon: "chat" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "PT. Rapier Technology International",
    location: "Onsite - Semarang",
    logo: "RAPIER",
    logoClass: "logo-rapier",
    logoImage: "/assets/experience/rapier.jpg",
    type: "Internship",
    role: "Backend Developer",
    duration: "January 2026 - Present",
    ongoing: true,
  },
  {
    company: "PT. Sinar Edukasi Riset (Sinar Research)",
    location: "Remote",
    logo: "sinar",
    logoClass: "logo-sinar",
    logoImage: "/assets/experience/sinar.jpg",
    type: "Work Partime",
    role: "AI Developer and Website Manager",
    duration: "Agust 2025 - Present",
    ongoing: true,
  },
  {
    company: "PT. Wiyora Technology",
    location: "Hybrid - Semarang",
    logo: "W",
    logoClass: "logo-wiyora",
    logoImage: "/assets/experience/wiyora.jpg",
    type: "Internship",
    role: "Backend Developer",
    duration: "Agust 2025 - January 2025",
    ongoing: false,
  },
  {
    company: "Universitas Negeri Semarang",
    location: "Hybrid - Semarang",
    logo: "UNNES",
    logoClass: "logo-unnes",
    logoImage: "/assets/experience/unnes.jpg",
    type: "Work Partime",
    role: "Member of Lecturer Research",
    duration: "January 2025 - Present",
    ongoing: true,
  },
  {
    company: "Kementrian ESDM",
    location: "OnSite - Semarang",
    logo: "⚙",
    logoClass: "logo-esdm",
    logoImage: "/assets/experience/esdm.jpg",
    type: "Internship",
    role: "Management and IT Specialist",
    duration: "Juli 2025 - Agust 2025",
    ongoing: false,
  },
  {
    company: "Telkom Test House",
    location: "OnSite - Bandung",
    logo: "tth",
    logoClass: "logo-tth",
    logoImage: "/assets/experience/tth.jpg",
    type: "Internship",
    role: "Web Developer Internship",
    duration: "April 2022 - September 2022",
    ongoing: false,
  },
  {
    company: "I-Secret",
    location: "Campus Organizations",
    logo: "I-S",
    logoClass: "logo-isecret",
    logoImage: "/assets/experience/i-secret.jpg",
    type: "Members of the Organization",
    role: "Programming Division",
    duration: "February 2025 - December 2025",
    ongoing: false,
    centered: true,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Mango Leaf Detection",
    description: "Mango leaf disease detection system using Computer Vision and Deep Learning",
    techStack: ["Python", "Tensorflow", "Flask", "Bootstrap"],
    githubUrl: "https://github.com/fadhluibnu",
  },
  {
    title: "Hafalan Santri",
    description:
      "A system for recording students' memorization and managing Islamic boarding schools from the foundation to the branches.",
    techStack: ["PHP", "Laravel", "Node JS", "React", "MySQL"],
  },
  {
    title: "Hafalan Santri",
    description:
      "A system for recording students' memorization and managing Islamic boarding schools from the foundation to the branches.",
    techStack: ["PHP", "Laravel", "Node JS", "React", "MySQL"],
  },
  {
    title: "Mango Leaf Detection",
    description: "Mango leaf disease detection system using Computer Vision and Deep Learning",
    techStack: ["Python", "Tensorflow", "Flask", "Bootstrap"],
    githubUrl: "https://github.com/fadhluibnu",
  },
];

export const certifications: CertificationItem[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Belajar Dasar AI",
  provider: "Dicoding Indonesia",
  status: "Obtained",
  date: "December 2024",
}));

export const focusTags = ["Backend Development", "System Architecture", "AI Integration", "Web Application"];

export const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
