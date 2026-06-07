import { BottomNavigation, ContactForm, CopyEmailButton, PortfolioInteractionProvider } from "./portfolio-client";
import { CERTIFICATIONS, EMAIL, EXPERIENCES, FOCUS_TAGS, PROJECTS, SOCIAL_LINKS, type SocialKind } from "./portfolio-data";
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChatIcon,
  ClockIcon,
  CopyIcon,
  DownloadIcon,
  GithubLogo,
  LinkIcon,
  LocationIcon,
  MailIcon,
  PortfolioSocialLogo,
} from "./portfolio-icons";

function SectionTitle({ title, subtitle, titleClassName }: { title: string; subtitle: string; titleClassName: string }) {
  return (
    <header className={titleClassName.replace("title", "header")}>
      <h2 className={titleClassName}>
        <span className={`title-line ${titleClassName.replace("-title", "-line")}`}>{title}</span>
      </h2>
      <p className={titleClassName.replace("title", "subtitle")}>{subtitle}</p>
    </header>
  );
}

function DownloadButton({ className = "btn btn-primary" }: { className?: string }) {
  return (
    <a href="#cv" className={className}>
      <span>Download CV</span>
      <DownloadIcon className="icon" />
    </a>
  );
}

function ConnectButton({ className = "btn btn-outline" }: { className?: string }) {
  return (
    <a href="#contact" className={className}>
      <span>Let’s Connect</span>
      <ArrowUpRightIcon className="icon" />
    </a>
  );
}

function SocialLink({
  kind,
  label,
  href,
  className,
  gradientId,
}: {
  kind: SocialKind;
  label: string;
  href: string;
  className: string;
  gradientId?: string;
}) {
  return (
    <a href={href} className={className} aria-label={label}>
      <PortfolioSocialLogo kind={kind} gradientId={gradientId} />
    </a>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Fadhlu Ibnu">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Fadhlu Ibnu</span>
        </a>

        <div className="top-actions">
          <CopyEmailButton className="email-pill" ariaLabel="Copy email">
            <span>email: {EMAIL}</span>
            <CopyIcon className="icon" />
          </CopyEmailButton>
          <ConnectButton className="top-connect" />
        </div>
      </header>

      <section className="social-cluster" aria-label="Social links">
        {SOCIAL_LINKS.map((social) => (
          <SocialLink
            key={`hero-${social.kind}`}
            {...social}
            className={`social-icon ${social.clusterClass}`}
            gradientId={`ig-hero-${social.kind}`}
          />
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
          <DownloadButton />
          <ConnectButton />
        </div>
      </main>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <SectionTitle
        title="The Face Behind the Code"
        subtitle="Problem solver, a continuous learner, and a tech enthusiast."
        titleClassName="about-title"
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
              Passionate about building efficient systems, I thrive in strong teams. I am a disciplined learner committed to using my Backend Architecture skills to create scalable software.
            </p>
          </article>

          <div className="contact-card glass-card">
            <CopyEmailButton className="contact-email" ariaLabel="Copy email">
              <span>email: {EMAIL}</span>
              <CopyIcon className="icon" />
            </CopyEmailButton>
            <DownloadButton />
          </div>

          <div className="about-social-card glass-card">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink
                key={`about-${social.kind}`}
                {...social}
                className="social-icon about-social"
                gradientId={`ig-about-${social.kind}`}
              />
            ))}
          </div>
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

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
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

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <SectionTitle
        title="From Campus to Career"
        subtitle="Balancing academic life, professional contributions, and organizational"
        titleClassName="experience-title"
      />

      <div className="experience-grid">
        {EXPERIENCES.map((experience) => (
          <article
            className={`experience-card ${experience.centered ? "centered-card" : ""}`}
            key={`${experience.company}-${experience.role}`}
          >
            <div className="experience-card-head">
              <div className="company-logo" aria-hidden="true">
                <span className={`company-logo-inner ${experience.logoClass}`}>{experience.logoText}</span>
              </div>
              <div>
                <h3 className="company-title">{experience.company}</h3>
                <p className="company-location">{experience.location}</p>
              </div>
            </div>

            <div className="experience-meta">
              <MetaItem icon={<LinkIcon className="meta-icon" />} label="Type" value={experience.type} />
              <MetaItem icon={<BriefcaseIcon className="meta-icon" />} label="Role" value={experience.role} />
              <MetaItem icon={<ClockIcon className="meta-icon" />} label="Duration" value={experience.duration} />
            </div>

            {experience.ongoing ? <span className="ongoing-badge">Ongoing</span> : null}
          </article>
        ))}
      </div>

      <div className="experience-cta-wrap">
        <a className="experience-cta" href="#experience-details">
          <span>View All Experience Details</span>
          <ArrowUpRightIcon className="icon" />
        </a>
      </div>
    </section>
  );
}

function PhoneMockup() {
  const phoneContent = (
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
  );

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="phone-mockup phone-back">{phoneContent}</div>
      <div className="phone-mockup phone-front">{phoneContent}</div>
    </div>
  );
}

function ProjectSection() {
  return (
    <section className="projects-section" id="projects">
      <SectionTitle
        title="What I’ve Built So Far"
        subtitle="Here is a collection of my recent work."
        titleClassName="projects-title"
      />

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techs.map((tech) => (
                <span className="tech-pill" key={`${project.title}-${tech}-${index}`}>
                  {tech}
                </span>
              ))}
            </div>
            <PhoneMockup />
            {project.githubUrl ? (
              <a className="github-project-btn" href={project.githubUrl} aria-label="Open GitHub project">
                <span>GitHub</span>
                <GithubLogo />
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <div className="project-cta-wrap">
        <a className="project-cta" href="#all-projects">
          <span>View All Projects</span>
          <ArrowUpRightIcon className="icon" />
        </a>
      </div>
    </section>
  );
}

function CertificateMockup() {
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

function CertificationsSection() {
  return (
    <section className="certifications-section" id="certifications">
      <SectionTitle
        title="Competence Certified"
        subtitle="Prove my competence goes beyond just writing code"
        titleClassName="certifications-title"
      />

      <div className="certifications-grid">
        {CERTIFICATIONS.map((certification) => (
          <article className="certification-card" key={certification.id}>
            <CertificateMockup />
            <h3 className="certification-name">{certification.name}</h3>
            <p className="certification-provider">{certification.provider}</p>
            <div className="certification-badge">
              <ClockIcon />
              <span>Obtained</span>
            </div>
            <p className="certification-date">{certification.date}</p>
          </article>
        ))}
      </div>

      <div className="certification-cta-wrap">
        <a className="certification-cta" href="#all-certifications">
          <span>View All Certifications</span>
          <ArrowUpRightIcon className="icon" />
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <SectionTitle
          title="Let’s Connect and Collaborate"
          subtitle="Open for freelance projects, internship opportunities, collaborations, and tech discussions."
          titleClassName="contact-title"
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
                  <p className="contact-value">{EMAIL}</p>
                  <CopyEmailButton className="mini-copy-btn" ariaLabel="Copy email address">
                    <CopyIcon />
                  </CopyEmailButton>
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
                <ChatIcon />
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

            <div className="contact-social-panel" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  key={`contact-${social.kind}`}
                  {...social}
                  className="social-icon contact-social"
                  gradientId={`ig-contact-${social.kind}`}
                />
              ))}
            </div>

            <article className="focus-card">
              <h3 className="focus-title">Current Focus</h3>
              <p className="focus-subtitle">Areas I’m currently sharpening and building around.</p>
              <div className="focus-tags">
                {FOCUS_TAGS.map((tag) => (
                  <span className="focus-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </aside>

          <ContactForm />
        </div>

        <footer className="contact-footer">
          <p>© 2026 Fadhlu Ibnu `Abbad. Built with passion, precision, and clean code.</p>
        </footer>
      </div>
    </section>
  );
}

export default function PortfolioHomePage() {
  return (
    <PortfolioInteractionProvider>
      <div className="page">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <CertificationsSection />
        <ContactSection />
        <BottomNavigation />
      </div>
    </PortfolioInteractionProvider>
  );
}
