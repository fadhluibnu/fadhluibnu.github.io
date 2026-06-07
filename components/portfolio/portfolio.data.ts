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
    href: "https://www.linkedin.com/in/fadhluibnu/",
    positionClass: "linkedin",
  },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/fadhluibnu", positionClass: "instagram" },
  { key: "twitter", label: "Twitter", href: "https://x.com/fadhluibnu", positionClass: "twitter" },
  { key: "github", label: "GitHub", href: "https://github.com/fadhluibnu", positionClass: "github" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@keeplearning.com", positionClass: "tiktok" },
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
    type: "Work Fulltime",
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
    title: "E-Learning Sinar Research",
    description: "An intuitive e-learning platform developed for Sinar Research to facilitate online education and training. Built seamlessly with PHP and customized WordPress architecture, ensuring a robust content management system, scalable user access, and an engaging learning experience for students and instructors alike.",
    techStack: ["PHP", "WordPress", "MySQL"],
    websiteUrl: "https://sinarresearch.com",
  },
  {
    title: "Hafalan Santri",
    description: "A comprehensive management system designed for Islamic boarding schools, connecting main campuses with their branches. The platform streamlines student registrations, staff management, and features automated recitation (hafalan) progress monitoring, final exam evaluations, and automated report card generation.",
    techStack: ["PHP", "Laravel", "React JS", "MySQL"],
    githubUrl: "https://github.com/fadhluibnu/hafalan_santri",
  },
  {
    title: "Si-Komputer",
    description: "An inventory management system developed as an IT contribution during an internship at the Department of Energy and Mineral Resources (ESDM) of Central Java. The application tracks computer hardware assets, monitors maintenance schedules, and manages equipment distribution, greatly improving operational efficiency.",
    techStack: ["PHP", "Laravel", "MySQL"],
    githubUrl: "https://github.com/fadhluibnu/si-komputer.git",
  },
  {
    title: "Sinar AI",
    description: "An advanced AI-powered platform tailored to assist students in composing academic theses effortlessly. Sinar AI eliminates the need for complex prompting while sourcing valid, up-to-date academic references. The system features a high-performance web interface and a robust backend capable of handling complex AI integrations.",
    techStack: ["JavaScript", "Node.js", "Express", "Next.js", "PostgreSQL", "MySQL"],
    websiteUrl: "https://sinarai.sinarresearch.com",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    name: "Alibaba Cloud Certified Associate",
    provider: "Alibaba Cloud",
    status: "Obtained",
    date: "2024",
    image: "/assets/certificate/alibaba-cloud.jpeg",
  },
  {
    id: 2,
    name: "Belajar Dasar AI",
    provider: "Dicoding Indonesia",
    status: "Obtained",
    date: "2024",
    image: "/assets/certificate/belajar-dasar-ai.png",
  },
  {
    id: 3,
    name: "Belajar Dasar Pemrograman Python",
    provider: "Dicoding Indonesia",
    status: "Obtained",
    date: "2024",
    image: "/assets/certificate/belajar-python-dicoding.png",
  },
  {
    id: 4,
    name: "DIMAS-TI 2024",
    provider: "Universitas Terkait",
    status: "Obtained",
    date: "2024",
    image: "/assets/certificate/dimas-ti-2024.png",
  },
];

export const focusTags = ["Backend Development", "System Architecture", "AI Integration", "Web Application"];

export const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
