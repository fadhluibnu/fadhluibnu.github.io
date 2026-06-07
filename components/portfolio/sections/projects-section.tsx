import { projects } from "../portfolio.data";
import { ArrowUpRightIcon, GitHubMarkIcon } from "../icons/portfolio-icons";
import PhonePreview from "../ui/phone-preview";
import SectionHeading from "../ui/section-heading";

export default function ProjectsSection() {
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
            {/* <PhonePreview /> */}
            {project.githubUrl ? (
              <a className="github-project-btn" href={project.githubUrl} aria-label="Open GitHub project" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <GitHubMarkIcon />
              </a>
            ) : null}
            {project.websiteUrl ? (
              <a className="github-project-btn" href={project.websiteUrl} aria-label="Visit Website" target="_blank" rel="noreferrer">
                <span>Visit Site</span>
                <ArrowUpRightIcon />
              </a>
            ) : null}
          </article>
        ))}
      </div>

      {/* <div className="project-cta-wrap">
        <a className="project-cta" href="#all-projects">
          <span>View All Projects</span>
          <ArrowUpRightIcon />
        </a>
      </div> */}
    </section>
  );
}
