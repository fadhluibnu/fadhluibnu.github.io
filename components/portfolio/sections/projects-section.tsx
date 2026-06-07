import { projects } from "../portfolio.data";
import { ArrowUpRightIcon, GitHubMarkIcon } from "../icons/portfolio-icons";
import PhonePreview from "../ui/phone-preview";
import SectionHeading from "../ui/section-heading";
import { Reveal } from "@/components/animation/reveal";

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <Reveal>
        <SectionHeading eyebrowClass="projects" title="What I’ve Built So Far" subtitle="Here is a collection of my recent work." />
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={`${project.title}-${index}`} delay={index * 150}>
            <article className="project-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <h3 className="group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span className="tech-pill hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-colors duration-200" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              {/* <PhonePreview /> */}
              <div className="flex gap-3">
                {project.githubUrl ? (
                  <a className="github-project-btn hover:-translate-y-1 hover:shadow-md transition-all duration-300 active:scale-95" href={project.githubUrl} aria-label="Open GitHub project" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <GitHubMarkIcon />
                  </a>
                ) : null}
                {project.websiteUrl ? (
                  <a className="github-project-btn hover:-translate-y-1 hover:shadow-md transition-all duration-300 active:scale-95" href={project.websiteUrl} aria-label="Visit Website" target="_blank" rel="noreferrer">
                    <span>Visit Site</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowUpRightIcon /></span>
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
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
