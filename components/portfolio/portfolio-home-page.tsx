"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "fadhluibnua@gmail.com";

const sections = ["home", "about", "experience", "projects", "certifications", "contact"] as const;
type SectionId = (typeof sections)[number];

type SocialKey = "linkedin" | "instagram" | "twitter" | "github" | "tiktok";

type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
  positionClass: string;
};

const socialLinks: SocialLink[] = [
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

const navigationItems: Array<{
  id: SectionId;
  label: string;
  className?: string;
  icon: ReactNode;
}> = [
  { id: "home", label: "Home", icon: <MenuIcon /> },
  { id: "about", label: "About Me", className: "about", icon: <DatabaseIcon /> },
  { id: "experience", label: "Experience", className: "experience", icon: <CalendarIcon /> },
  { id: "projects", label: "Projects", className: "projects", icon: <LabIcon /> },
  { id: "certifications", label: "Certificate", className: "certifications", icon: <CertificateNavIcon /> },
  { id: "contact", label: "Contact", className: "blogs", icon: <ChatIcon /> },
];

const experiences = [
  {
    company: "PT. Rapier Technology International",
    location: "Onsite - Semarang",
    logo: "RAPIER",
    logoClass: "logo-rapier",
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
    type: "Members of the Organization",
    role: "Programming Division",
    duration: "February 2025 - December 2025",
    ongoing: false,
    centered: true,
  },
];

const projects = [
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

const certifications = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Belajar Dasar AI",
  provider: "Dicoding Indonesia",
  status: "Obtained",
  date: "December 2024",
}));

const focusTags = ["Backend Development", "System Architecture", "AI Integration", "Web Application"];

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function PortfolioHomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [toastMessage, setToastMessage] = useState("Email berhasil disalin");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormState>(initialContactForm);
  const [contactErrors, setContactErrors] = useState<ContactFormErrors>({});
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.42;
      let currentId: SectionId = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= marker) {
          currentId = sectionId;
        }
      });

      setActiveSection(currentId);
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message = "Email berhasil disalin") => {
    setToastMessage(message);
    setIsToastVisible(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(false);
    }, 1600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      showToast();
    } catch {
      const temporaryTextarea = document.createElement("textarea");
      temporaryTextarea.value = CONTACT_EMAIL;
      document.body.appendChild(temporaryTextarea);
      temporaryTextarea.select();
      document.execCommand("copy");
      temporaryTextarea.remove();
      showToast();
    }
  };

  const handleContactInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (contactErrors[name as keyof ContactFormState]) {
      setContactErrors((currentErrors) => ({
        ...currentErrors,
        [name]: undefined,
      }));
    }
  };

  const validateContactForm = () => {
    const nextErrors: ContactFormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.name.trim()) nextErrors.name = "Name is required.";
    if (!emailPattern.test(contactForm.email.trim())) nextErrors.email = "Valid email is required.";
    if (!contactForm.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!contactForm.message.trim()) nextErrors.message = "Message is required.";

    setContactErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateContactForm()) {
      showToast("Lengkapi form terlebih dahulu");
      return;
    }

    const name = contactForm.name.trim();
    const senderEmail = contactForm.email.trim();
    const subject = contactForm.subject.trim();
    const message = contactForm.message.trim();
    const body = `Halo Ibnu,\n\n${message}\n\nRegards,\n${name}\n${senderEmail}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast("Email draft siap dibuka");
    setContactForm(initialContactForm);
    setContactErrors({});
  };

  return (
    <div className="page">
      <HeroSection onCopyEmail={copyEmail} />
      <AboutSection onCopyEmail={copyEmail} />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection
        contactForm={contactForm}
        errors={contactErrors}
        onChange={handleContactInputChange}
        onCopyEmail={copyEmail}
        onSubmit={handleContactSubmit}
      />
      <BottomNavigation activeSection={activeSection} />
      <div className={`copy-toast${isToastVisible ? " show" : ""}`}>{toastMessage}</div>
    </div>
  );
}

function HeroSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <section className="hero-section" id="home">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Fadhlu Ibnu">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Fadhlu Ibnu</span>
        </a>

        <div className="top-actions">
          <button className="email-pill js-copy-email" type="button" aria-label="Copy email" onClick={onCopyEmail}>
            <span>email: {CONTACT_EMAIL}</span>
            <CopyIcon />
          </button>

          <a href="#contact" className="top-connect">
            <span>Let’s Connect</span>
            <ArrowUpRightIcon />
          </a>
        </div>
      </header>

      <section className="social-cluster" aria-label="Social links">
        {socialLinks.map((social) => (
          <SocialAnchor key={social.key} social={social} />
        ))}

        <div className="hello-pill">
          <span className="hello-avatar" aria-hidden="true" />
          <span>Hello, I’m Fadhlu Ibnu</span>
        </div>
      </section>

      <main className="hero">
        <h1 className="hero-title">
          <span className="title-line hero-line-one">Software Engineer with a</span>
          <br />
          <span className="title-line hero-line-two">Passion for Quality</span>
        </h1>
        <p className="hero-subtitle">
          Specialized in Backend Development and System Architecture. I
          <br className="hidden sm:block" /> build things that live on the internet.
        </p>
        <div className="hero-actions">
          <PrimaryButton href="#cv">
            <span>Download CV</span>
            <DownloadIcon />
          </PrimaryButton>
          <a href="#contact" className="btn btn-outline">
            <span>Let’s Connect</span>
            <ArrowUpRightIcon opacity="0.75" />
          </a>
        </div>
      </main>
    </section>
  );
}

function AboutSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <section className="about-section" id="about">
      <SectionHeading
        eyebrowClass="about"
        title="The Face Behind the Code"
        subtitle="Problem solver, a continuous learner, and a tech enthusiast."
      />

      <div className="about-grid">
        <div className="about-left">
          <div className="section-kicker">
            <span className="terminal-icon">&gt;</span>
            <span>Passionate About Building the Future</span>
          </div>

          <article className="about-card glass-card">
            <h3>A Developer Fueled by Curiosity and Defined by Code</h3>
            <p>
              Passionate about building efficient systems, I thrive in strong teams. I am a disciplined learner
              committed to using my Backend Architecture skills to create scalable software.
            </p>
          </article>

          <div className="contact-card glass-card">
            <button className="contact-email js-copy-email" type="button" aria-label="Copy email" onClick={onCopyEmail}>
              <span>email: {CONTACT_EMAIL}</span>
              <CopyIcon />
            </button>
            <PrimaryButton href="#cv">
              <span>Download CV</span>
              <DownloadIcon />
            </PrimaryButton>
          </div>

          <SocialPanel variant="about" />
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="portrait-placeholder">
            <div className="portrait-vignette" />
          </div>
        </div>

        <div className="name-card glass-card">Hi, I’m Fadhlu Ibnu `Abbad 👋</div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <SectionHeading
        eyebrowClass="experience"
        title="From Campus to Career"
        subtitle="Balancing academic life, professional contributions, and organizational"
      />

      <div className="experience-grid">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.duration}`}
            className={`experience-card${experience.centered ? " centered-card" : ""}`}
          >
            <div className="experience-card-head">
              <div className="company-logo" aria-hidden="true">
                <span className={`company-logo-inner ${experience.logoClass}`}>{experience.logo}</span>
              </div>
              <div>
                <h3 className="company-title">{experience.company}</h3>
                <p className="company-location">{experience.location}</p>
              </div>
            </div>

            <div className="experience-meta">
              <MetaBlock label="Type" value={experience.type} icon={<LinkIcon />} />
              <MetaBlock label="Role" value={experience.role} icon={<BriefcaseIcon />} />
              <MetaBlock label="Duration" value={experience.duration} icon={<ClockIcon />} />
            </div>
            {experience.ongoing ? <span className="ongoing-badge">Ongoing</span> : null}
          </article>
        ))}
      </div>

      <div className="experience-cta-wrap">
        <a className="experience-cta" href="#experience-details">
          <span>View All Experience Details</span>
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <SectionHeading eyebrowClass="projects" title="What I’ve Built So Far" subtitle="Here is a collection of my recent work." />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <PhonePreview />
            {project.githubUrl ? (
              <a className="github-project-btn" href={project.githubUrl} aria-label="Open GitHub project" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <GitHubMarkIcon />
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <div className="project-cta-wrap">
        <a className="project-cta" href="#all-projects">
          <span>View All Projects</span>
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="certifications-section" id="certifications">
      <SectionHeading
        eyebrowClass="certifications"
        title="Competence Certified"
        subtitle="Prove my competence goes beyond just writing code"
      />

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.id}>
            <CertificatePreview />
            <h3 className="certification-name">{certification.name}</h3>
            <p className="certification-provider">{certification.provider}</p>
            <div className="certification-badge">
              <ClockIcon />
              <span>{certification.status}</span>
            </div>
            <p className="certification-date">{certification.date}</p>
          </article>
        ))}
      </div>

      <div className="certification-cta-wrap">
        <a className="certification-cta" href="#all-certifications">
          <span>View All Certifications</span>
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}

function ContactSection({
  contactForm,
  errors,
  onChange,
  onCopyEmail,
  onSubmit,
}: {
  contactForm: ContactFormState;
  errors: ContactFormErrors;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCopyEmail: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <SectionHeading
          eyebrowClass="contact"
          title="Let’s Connect and Collaborate"
          subtitle="Open for freelance projects, internship opportunities, collaborations, and tech discussions."
        />

        <div className="contact-layout">
          <aside className="contact-left" aria-label="Contact information">
            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <MailIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Email</p>
                <div className="contact-value-row">
                  <p className="contact-value">{CONTACT_EMAIL}</p>
                  <button className="mini-copy-btn js-copy-email" type="button" aria-label="Copy email address" onClick={onCopyEmail}>
                    <CopyIcon />
                  </button>
                </div>
                <p className="contact-helper">Click copy or send a message through the form.</p>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <LocationIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Location</p>
                <p className="contact-value" style={{ marginTop: 8 }}>
                  Semarang, Indonesia
                </p>
                <p className="contact-helper">Available for remote collaboration across time zones.</p>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <MessageIcon />
              </div>
              <div className="contact-card-body">
                <p className="contact-label">Availability</p>
                <p className="contact-value" style={{ marginTop: 8 }}>
                  Open for Opportunities
                </p>
                <div className="availability-row">
                  <span className="availability-badge">
                    <span className="availability-dot" />
                    Available
                  </span>
                </div>
              </div>
            </article>

            <SocialPanel variant="contact" />

            <article className="focus-card">
              <h3 className="focus-title">Current Focus</h3>
              <p className="focus-subtitle">Areas I’m currently sharpening and building around.</p>
              <div className="focus-tags">
                {focusTags.map((tag) => (
                  <span className="focus-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </aside>

          <form className="contact-form-card" noValidate onSubmit={onSubmit}>
            <h3 className="form-heading">Tell me about your idea</h3>
            <p className="form-description">
              Use this form to prepare an email draft. It will open your email app with the message already filled in.
            </p>

            <div className="contact-form-grid">
              <FormField label="Your Name" error={errors.name}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  value={contactForm.name}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Email Address" error={errors.email}>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={contactForm.email}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Subject" error={errors.subject} full>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  placeholder="Project collaboration, opportunity, or question"
                  value={contactForm.subject}
                  onChange={onChange}
                />
              </FormField>

              <FormField label="Message" error={errors.message} full>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Write your message here..."
                  value={contactForm.message}
                  onChange={onChange}
                />
              </FormField>
            </div>

            <div className="contact-form-actions">
              <p className="form-note">I usually respond within 24–48 hours.</p>
              <button className="btn btn-primary send-btn" type="submit">
                <span>Send Message</span>
                <SendIcon />
              </button>
            </div>
          </form>
        </div>

        <footer className="contact-footer">
          <p>© 2026 Fadhlu Ibnu `Abbad. Built with passion, precision, and clean code.</p>
        </footer>
      </div>
    </section>
  );
}

function BottomNavigation({ activeSection }: { activeSection: SectionId }) {
  return (
    <nav className="bottom-nav-shell" aria-label="Main navigation">
      <div className="bottom-nav">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${item.className ? ` ${item.className}` : ""}${activeSection === item.id ? " active" : ""}`}
          >
            <span>{item.label}</span>
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SectionHeading({ eyebrowClass, title, subtitle }: { eyebrowClass: string; title: string; subtitle: string }) {
  return (
    <header className={`${eyebrowClass}-header`}>
      <h2 className={`${eyebrowClass}-title`}>
        <span className={`title-line ${eyebrowClass}-line`}>{title}</span>
      </h2>
      <p className={`${eyebrowClass}-subtitle`}>{subtitle}</p>
    </header>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
}

function SocialPanel({ variant }: { variant: "about" | "contact" }) {
  const panelClassName = variant === "about" ? "about-social-card glass-card" : "contact-social-panel";
  const iconClassName = variant === "about" ? "about-social" : "contact-social";

  return (
    <div className={panelClassName} aria-label="Social media links">
      {socialLinks.map((social) => (
        <SocialAnchor key={`${variant}-${social.key}`} social={social} extraClassName={iconClassName} />
      ))}
    </div>
  );
}

function SocialAnchor({ social, extraClassName }: { social: SocialLink; extraClassName?: string }) {
  const isExternal = social.href.startsWith("http");
  return (
    <a
      href={social.href}
      className={`social-icon ${extraClassName ?? social.positionClass}`}
      aria-label={social.label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <SocialSvg type={social.key} idSuffix={extraClassName ?? social.positionClass} />
    </a>
  );
}

function SocialSvg({ type, idSuffix }: { type: SocialKey; idSuffix: string }) {
  if (type === "linkedin") return <LinkedInIcon />;
  if (type === "instagram") return <InstagramIcon idSuffix={idSuffix} />;
  if (type === "twitter") return <TwitterIcon />;
  if (type === "github") return <GitHubSocialIcon />;
  return <TikTokIcon />;
}

function MetaBlock({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <>
      <span className="meta-pill">
        {icon}
        {label}
      </span>
      <p className="meta-value">{value}</p>
    </>
  );
}

function PhonePreview() {
  return (
    <div className="project-visual" aria-hidden="true">
      <PhoneMockup className="phone-back" />
      <PhoneMockup className="phone-front" />
    </div>
  );
}

function PhoneMockup({ className }: { className: string }) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-screen">
        <div className="status-bar">
          <span>9:41</span>
          <span>◔ ◔</span>
        </div>
        <div className="screen-profile">
          <span className="screen-avatar" />
          <span>
            <i className="screen-name" />
            <i className="screen-role" />
          </span>
        </div>
        <div className="screen-row">
          <span className="screen-dot" />
          <span className="screen-line" />
        </div>
        <div className="screen-grid">
          <span className="screen-chip" />
          <span className="screen-chip" />
          <span className="screen-chip" />
        </div>
        <div className="screen-panel" />
      </div>
    </div>
  );
}

function CertificatePreview() {
  return (
    <div className="certificate-frame" aria-hidden="true">
      <div className="certificate-paper">
        <div className="certificate-logo">
          dicoding<span>▣</span>
        </div>
        <div className="certificate-ribbon" />
        <div className="certificate-mini-label" />
        <div className="certificate-name" />
        <div className="certificate-course" />
        <div className="certificate-date-line" />
        <div className="certificate-signature" />
        <div className="certificate-qr" />
      </div>
    </div>
  );
}

function FormField({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: ReactNode }) {
  return (
    <label className={`form-group${full ? " full" : ""}${error ? " has-error" : ""}`}>
      <span className="form-label">{label}</span>
      {children}
      <span className="field-error">{error ?? ""}</span>
    </label>
  );
}

function CopyIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.4 4.75V3.35C5.4 2.66 5.96 2.1 6.65 2.1H11.8C12.49 2.1 13.05 2.66 13.05 3.35V8.5C13.05 9.19 12.49 9.75 11.8 9.75H10.4"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M3.95 6.25H8.7C9.39 6.25 9.95 6.81 9.95 7.5V12.65C9.95 13.34 9.39 13.9 8.7 13.9H3.55C2.86 13.9 2.3 13.34 2.3 12.65V7.9C2.3 6.99 3.04 6.25 3.95 6.25Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ opacity }: { opacity?: string }) {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.55 11.45L11.45 4.55M6.45 4.55H11.45V9.55"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.4V9M8 9L10.25 6.75M8 9L5.75 6.75" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.4 5.25H4.05C3.02 5.25 2.2 6.08 2.2 7.1V11.75C2.2 12.78 3.02 13.6 4.05 13.6H11.95C12.98 13.6 13.8 12.78 13.8 11.75V7.1C13.8 6.08 12.98 5.25 11.95 5.25H11.6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="meta-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.65 9.35 9.35 6.65M5.25 7.1 3.7 8.65a2.43 2.43 0 0 0 3.44 3.44l1.55-1.55M10.75 8.9l1.55-1.55A2.43 2.43 0 0 0 8.86 3.91L7.31 5.46"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="meta-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.15 5.45V4.3c0-.62.5-1.12 1.12-1.12h3.46c.62 0 1.12.5 1.12 1.12v1.15M3.15 5.45h9.7c.61 0 1.1.49 1.1 1.1v5.15c0 .61-.49 1.1-1.1 1.1h-9.7c-.61 0-1.1-.49-1.1-1.1V6.55c0-.61.49-1.1 1.1-1.1Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path d="M6.3 8.1h3.4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="meta-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.55" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 4.9v3.35l2.25 1.35" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.4 8.25 13.35 3.35 10.05 13.2 7.65 9.4 2.4 8.25Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M7.65 9.4 10.05 6.95" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.25 7.25 5.7 5.02a1.6 1.6 0 0 0 2.1 0l5.7-5.02" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-5.15 7-11.25A7 7 0 0 0 5 9.75C5 15.85 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7.5 10.5h9M7.5 14h5.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M5.75 4.5h12.5A2.25 2.25 0 0 1 20.5 6.75v8.5a2.25 2.25 0 0 1-2.25 2.25h-4.8L12 20.25 10.55 17.5h-4.8A2.25 2.25 0 0 1 3.5 15.25v-8.5A2.25 2.25 0 0 1 5.75 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 5.25H12M4 8H12M4 10.75H12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <ellipse cx="8" cy="3.8" rx="3.7" ry="1.65" stroke="currentColor" strokeWidth="1.35" />
      <path d="M4.3 3.8V8.05C4.3 8.96 5.95 9.7 8 9.7C10.05 9.7 11.7 8.96 11.7 8.05V3.8" stroke="currentColor" strokeWidth="1.35" />
      <path d="M4.3 8.05V12.2C4.3 13.11 5.95 13.85 8 13.85C10.05 13.85 11.7 13.11 11.7 12.2V8.05" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3.1" y="3.65" width="9.8" height="9.55" rx="1.4" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M5.25 2.4V4.8M10.75 2.4V4.8M3.1 6.65H12.9M5.25 8.9H6.25M7.5 8.9H8.5M9.75 8.9H10.75M5.25 11.05H6.25M7.5 11.05H8.5M9.75 11.05H10.75"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LabIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.35 2.45H9.65M7 2.45V6.35L3.55 12.05C3.15 12.72 3.63 13.55 4.41 13.55H11.59C12.37 13.55 12.85 12.72 12.45 12.05L9 6.35V2.45"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.35 10.4H10.65" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function CertificateNavIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.25 2.65h7.5c.7 0 1.25.56 1.25 1.25v6.15c0 .7-.56 1.25-1.25 1.25h-7.5C3.56 11.3 3 10.74 3 10.05V3.9c0-.69.56-1.25 1.25-1.25Z" stroke="currentColor" strokeWidth="1.35" />
      <path d="M5.15 5.25h5.7M5.15 7.35h3.75" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M6.1 11.3 5.25 14l2.05-1.05L8 14l.7-1.05L10.75 14l-.85-2.7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 4.6A2.1 2.1 0 0 1 5.6 2.5h4.8a2.1 2.1 0 0 1 2.1 2.1v4.1a2.1 2.1 0 0 1-2.1 2.1H8.7L6.15 13.5v-2.7H5.6a2.1 2.1 0 0 1-2.1-2.1V4.6Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M6.05 5.95h3.9M6.05 8h2.75" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="social-svg" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path
        d="M0 1.79063C0 0.801563 0.821875 0 1.83594 0H23.1641C24.1781 0 25 0.801563 25 1.79063V23.2094C25 24.1984 24.1781 25 23.1641 25H1.83594C0.821875 25 0 24.1984 0 23.2094V1.79063ZM7.72344 20.9281V9.63906H3.97188V20.9281H7.72344ZM5.84844 8.09688C7.15625 8.09688 7.97031 7.23125 7.97031 6.14688C7.94687 5.03906 7.15781 4.19688 5.87344 4.19688C4.58906 4.19688 3.75 5.04063 3.75 6.14688C3.75 7.23125 4.56406 8.09688 5.82344 8.09688H5.84844ZM13.5172 20.9281V14.6234C13.5172 14.2859 13.5422 13.9484 13.6422 13.7078C13.9125 13.0344 14.5297 12.3359 15.5672 12.3359C16.925 12.3359 17.4672 13.3703 17.4672 14.8891V20.9281H21.2187V14.4531C21.2187 10.9844 19.3688 9.37188 16.9 9.37188C14.9094 9.37188 14.0172 10.4656 13.5172 11.2359V11.275H13.4922L13.5172 11.2359V9.63906H9.76719C9.81406 10.6984 9.76719 20.9281 9.76719 20.9281H13.5172Z"
        fill="#0077B5"
      />
    </svg>
  );
}

function InstagramIcon({ idSuffix }: { idSuffix: string }) {
  const gradientId = `igPaint-${idSuffix}`.replace(/[^a-zA-Z0-9_-]/g, "-");
  return (
    <svg className="social-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.16C15.21 2.16 15.59 2.17 16.85 2.23C18.02 2.28 18.66 2.48 19.08 2.64C19.64 2.86 20.04 3.12 20.46 3.54C20.88 3.96 21.14 4.36 21.36 4.92C21.52 5.34 21.72 5.98 21.77 7.15C21.83 8.41 21.84 8.79 21.84 12C21.84 15.2 21.83 15.58 21.77 16.85C21.72 18.02 21.52 18.65 21.36 19.07C21.14 19.64 20.88 20.04 20.46 20.46C20.04 20.88 19.64 21.14 19.08 21.36C18.66 21.52 18.02 21.72 16.85 21.77C15.59 21.83 15.21 21.84 12 21.84C8.79 21.84 8.41 21.83 7.15 21.77C5.98 21.72 5.34 21.52 4.92 21.36C4.36 21.14 3.96 20.88 3.54 20.46C3.12 20.04 2.86 19.64 2.64 19.08C2.48 18.66 2.28 18.02 2.23 16.85C2.17 15.59 2.16 15.21 2.16 12C2.16 8.79 2.17 8.41 2.23 7.15C2.28 5.98 2.48 5.34 2.64 4.92C2.86 4.36 3.12 3.96 3.54 3.54C3.96 3.12 4.36 2.86 4.92 2.64C5.34 2.48 5.98 2.28 7.15 2.23C8.41 2.17 8.79 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07C5.78.13 4.9.33 4.14.63C3.34.93 2.61 1.4 2.01 2.01C1.4 2.61.93 3.34.63 4.14C.33 4.9.13 5.78.07 7.05C.01 8.33 0 8.74 0 12C0 15.26.01 15.67.07 16.95C.13 18.23.33 19.1.63 19.86C.93 20.66 1.4 21.39 2.01 21.99C2.61 22.6 3.34 23.07 4.14 23.37C4.9 23.67 5.78 23.87 7.05 23.93C8.33 23.99 8.74 24 12 24C15.26 24 15.67 23.99 16.95 23.93C18.23 23.87 19.1 23.67 19.86 23.37C20.66 23.07 21.39 22.6 21.99 21.99C22.6 21.39 23.07 20.66 23.37 19.86C23.67 19.1 23.87 18.23 23.93 16.95C23.99 15.67 24 15.26 24 12C24 8.74 23.99 8.33 23.93 7.05C23.87 5.78 23.67 4.9 23.37 4.14C23.07 3.34 22.6 2.61 21.99 2.01C21.39 1.4 20.66.93 19.86.63C19.1.33 18.23.13 16.95.07C15.67.01 15.26 0 12 0Z"
        fill={`url(#${gradientId})`}
      />
      <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill={`url(#${gradientId})`} />
      <path d="M19.85 5.6C19.85 6.4 19.2 7.04 18.41 7.04C17.61 7.04 16.97 6.4 16.97 5.6C16.97 4.81 17.61 4.16 18.41 4.16C19.2 4.16 19.85 4.81 19.85 5.6Z" fill={`url(#${gradientId})`} />
      <defs>
        <linearGradient id={gradientId} x1="2" y1="1" x2="22" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9CE34" />
          <stop offset="0.5" stopColor="#EE2A7B" />
          <stop offset="1" stopColor="#6228D7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="social-svg" viewBox="0 0 29 23" fill="none" aria-hidden="true">
      <path
        d="M9.10963 23C20.0535 23 26.0402 14.149 26.0402 6.48688C26.0426 6.23802 26.039 5.98916 26.0293 5.7403C27.1945 4.91632 28.2003 3.89678 29 2.72923C27.9109 3.19677 26.7573 3.50554 25.5762 3.64565C26.8206 2.91978 27.7526 1.77746 28.1989 0.431126C27.0303 1.10821 25.7505 1.58285 24.4162 1.83405C23.5193 0.901759 22.3325 0.284142 21.0397 0.0768701C19.7468 -0.130402 18.4199 0.0842367 17.2647 0.68754C16.1094 1.29084 15.1902 2.24914 14.6494 3.414C14.1087 4.57885 13.9765 5.88525 14.2734 7.13085C11.9075 7.01561 9.59292 6.41596 7.47988 5.37085C5.36683 4.32573 3.50261 2.85852 2.00825 1.06448C1.24987 2.34381 1.01853 3.85685 1.3612 5.29657C1.70387 6.73629 2.59486 7.99484 3.85337 8.81683C2.9098 8.78707 1.98685 8.53973 1.16 8.09502V8.17464C1.16231 9.51455 1.63817 10.8126 2.50727 11.8498C3.37637 12.887 4.58548 13.5997 5.9305 13.8677C5.41987 14.0051 4.89236 14.0735 4.36269 14.0712C3.98917 14.075 3.61624 14.0412 3.24981 13.9703C3.62934 15.1243 4.36953 16.1334 5.36652 16.8558C6.3635 17.5783 7.56722 17.9779 8.80875 17.9987C6.69919 19.6138 4.09488 20.4904 1.41375 20.4878C0.941228 20.4913 0.468977 20.4647 0 20.4082C2.72133 22.1021 5.88204 23.0014 9.10963 23Z"
        fill="#36D8FF"
      />
    </svg>
  );
}

function GitHubSocialIcon() {
  return (
    <svg className="social-svg" viewBox="0 0 25 24" fill="none" aria-hidden="true">
      <GitHubPath fill="white" />
    </svg>
  );
}

function GitHubMarkIcon() {
  return (
    <svg viewBox="0 0 25 24" fill="none" aria-hidden="true">
      <GitHubPath fill="currentColor" />
    </svg>
  );
}

function GitHubPath({ fill }: { fill: string }) {
  return (
    <path
      d="M12.5 0C5.59375 0 0 5.50583 0 12.3035C0 17.7478 3.57812 22.3463 8.54687 23.9765C9.17187 24.0842 9.40625 23.715 9.40625 23.3921C9.40625 23.0999 9.39063 22.131 9.39063 21.1005C6.25 21.6696 5.4375 20.347 5.1875 19.6549C5.04687 19.3012 4.4375 18.2092 3.90625 17.917C3.46875 17.6863 2.84375 17.1173 3.89063 17.1019C4.875 17.0865 5.57813 17.9939 5.8125 18.363C6.9375 20.2239 8.73438 19.701 9.45313 19.3781C9.5625 18.5783 9.89062 18.04 10.25 17.7325C7.46875 17.4249 4.5625 16.3637 4.5625 11.6576C4.5625 10.3196 5.04688 9.21226 5.84375 8.35102C5.71875 8.04343 5.28125 6.78232 5.96875 5.09058C5.96875 5.09058 7.01563 4.76762 9.40625 6.3517C10.4062 6.07487 11.4688 5.93645 12.5313 5.93645C13.5938 5.93645 14.6563 6.07487 15.6563 6.3517C18.0469 4.75224 19.0938 5.09058 19.0938 5.09058C19.7813 6.78232 19.3438 8.04343 19.2188 8.35102C20.0156 9.21226 20.5 10.3042 20.5 11.6576C20.5 16.3791 17.5781 17.4249 14.7969 17.7325C15.25 18.1169 15.6406 18.8552 15.6406 20.0086C15.6406 21.6542 15.625 22.9768 15.625 23.3921C15.625 23.715 15.8594 24.0995 16.4844 23.9765C18.9662 23.1525 21.1229 21.5829 22.6506 19.4888C24.1783 17.3947 25 14.8816 25 12.3035C25 5.50583 19.4063 0 12.5 0Z"
      fill={fill}
    />
  );
}

function TikTokIcon() {
  return (
    <svg className="social-svg" viewBox="0 0 22 26" fill="none" aria-hidden="true">
      <path
        d="M12.5714 0H15.6829C15.9091 1.12357 16.5314 2.541 17.6236 3.94743C18.6921 5.32557 20.1096 6.28571 22 6.28571V9.42857C19.2453 9.42857 17.1757 8.14943 15.7143 6.55443V17.2857C15.7143 18.8397 15.2535 20.3588 14.3901 21.6509C13.5268 22.943 12.2997 23.9501 10.8639 24.5448C9.42824 25.1395 7.84843 25.2951 6.32429 24.9919C4.80016 24.6887 3.40015 23.9404 2.30131 22.8415C1.20247 21.7427 0.454146 20.3427 0.150976 18.8186C-0.152193 17.2944 0.00340437 15.7146 0.598093 14.2789C1.19278 12.8432 2.19985 11.6161 3.49195 10.7527C4.78405 9.88938 6.30315 9.42857 7.85715 9.42857V12.5714C6.92475 12.5714 6.01329 12.8479 5.23803 13.3659C4.46277 13.8839 3.85853 14.6202 3.50171 15.4816C3.1449 16.3431 3.05154 17.2909 3.23344 18.2054C3.41535 19.1199 3.86434 19.9599 4.52364 20.6192C5.18295 21.2785 6.02295 21.7275 6.93744 21.9094C7.85192 22.0913 8.7998 21.998 9.66123 21.6411C10.5226 21.2843 11.2589 20.6801 11.7769 19.9048C12.2949 19.1296 12.5714 18.2181 12.5714 17.2857V0Z"
        fill="white"
      />
    </svg>
  );
}
