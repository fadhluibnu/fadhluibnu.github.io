export const EMAIL = "fadhluibnua@gmail.com";

export type SocialKind = "linkedin" | "instagram" | "twitter" | "github" | "tiktok";
export type NavIconKind = "home" | "about" | "experience" | "projects" | "certifications" | "contact";

export const SOCIAL_LINKS: Array<{
  kind: SocialKind;
  label: string;
  href: string;
  clusterClass: string;
}> = [
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fadhlu-ibnu/",
      clusterClass: "linkedin",
    },
    {
      kind: "instagram",
      label: "Instagram",
      href: "#instagram",
      clusterClass: "instagram",
    },
    {
      kind: "twitter",
      label: "Twitter",
      href: "#twitter",
      clusterClass: "twitter",
    },
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/fadhluibnu",
      clusterClass: "github",
    },
    {
      kind: "tiktok",
      label: "TikTok",
      href: "#tiktok",
      clusterClass: "tiktok",
    },
  ];

export const NAV_ITEMS: Array<{
  id: string;
  label: string;
  href: string;
  className: string;
  icon: NavIconKind;
}> = [
    { id: "home", label: "Home", href: "#home", className: "", icon: "home" },
    { id: "about", label: "About Me", href: "#about", className: "about", icon: "about" },
    { id: "experience", label: "Experience", href: "#experience", className: "experience", icon: "experience" },
    { id: "projects", label: "Projects", href: "#projects", className: "projects", icon: "projects" },
    { id: "certifications", label: "Certificates", href: "#certifications", className: "certificates", icon: "certifications" },
    { id: "contact", label: "Contact", href: "#contact", className: "blogs", icon: "contact" },
  ];

export const EXPERIENCES = [
  {
    company: "PT. Rapier Technology International",
    location: "Onsite - Semarang",
    type: "Internship",
    role: "Backend Developer",
    duration: "January 2026 - Present",
    logoText: "RAPIER",
    logoClass: "logo-rapier",
    ongoing: true,
  },
  {
    company: "PT. Sinar Edukasi Riset (Sinar Research)",
    location: "Remote",
    type: "Work Partime",
    role: "AI Developer and Website Manager",
    duration: "Agust 2025 - Present",
    logoText: "sinar",
    logoClass: "logo-sinar",
    ongoing: true,
  },
  {
    company: "PT. Wiyora Technology",
    location: "Hybrid - Semarang",
    type: "Internship",
    role: "Backend Developer",
    duration: "Agust 2025 - January 2025",
    logoText: "W",
    logoClass: "logo-wiyora",
    ongoing: false,
  },
  {
    company: "Universitas Negeri Semarang",
    location: "Hybrid - Semarang",
    type: "Work Partime",
    role: "Member of Lecturer Research",
    duration: "January 2025 - Present",
    logoText: "UNNES",
    logoClass: "logo-unnes",
    ongoing: true,
  },
  {
    company: "Kementrian ESDM",
    location: "OnSite - Semarang",
    type: "Internship",
    role: "Management and IT Specialist",
    duration: "Juli 2025 - Agust 2025",
    logoText: "⚙",
    logoClass: "logo-esdm",
    ongoing: false,
  },
  {
    company: "Telkom Test House",
    location: "OnSite - Bandung",
    type: "Internship",
    role: "Web Developer Internship",
    duration: "April 2022 - September 2022",
    logoText: "tth",
    logoClass: "logo-tth",
    ongoing: false,
  },
  {
    company: "I-Secret",
    location: "Campus Organizations",
    type: "Members of the Organization",
    role: "Programming Division",
    duration: "February 2025 - December 2025",
    logoText: "I-S",
    logoClass: "logo-isecret",
    ongoing: false,
    centered: true,
  },
];

export const PROJECTS = [
  {
    title: "Mango Leaf Detection",
    description: "Mango leaf disease detection system using Computer Vision and Deep Learning",
    techs: ["Python", "Tensorflow", "Flask", "Bootstrap"],
    githubUrl: "https://github.com/fadhluibnu",
  },
  {
    title: "Hafalan Santri",
    description:
      "A system for recording students' memorization and managing Islamic boarding schools from the foundation to the branches.",
    techs: ["PHP", "Laravel", "Node JS", "React", "MySQL"],
  },
  {
    title: "Hafalan Santri",
    description:
      "A system for recording students' memorization and managing Islamic boarding schools from the foundation to the branches.",
    techs: ["PHP", "Laravel", "Node JS", "React", "MySQL"],
  },
  {
    title: "Mango Leaf Detection",
    description: "Mango leaf disease detection system using Computer Vision and Deep Learning",
    techs: ["Python", "Tensorflow", "Flask", "Bootstrap"],
    githubUrl: "https://github.com/fadhluibnu",
  },
];

export const CERTIFICATIONS = Array.from({ length: 6 }, (_, index) => ({
  id: `dicoding-ai-${index + 1}`,
  name: "Belajar Dasar AI",
  provider: "Dicoding Indonesia",
  date: "December 2024",
}));

export const FOCUS_TAGS = [
  "Backend Development",
  "System Architecture",
  "AI Integration",
  "Web Application",
];
