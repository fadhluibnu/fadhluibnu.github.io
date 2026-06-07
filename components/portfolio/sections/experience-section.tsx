import Image from "next/image";
import Link from "next/link";
import { experiences } from "../portfolio.data";
import { ArrowUpRightIcon, BriefcaseIcon, ClockIcon, LinkIcon } from "../icons/portfolio-icons";
import MetaBlock from "../ui/meta-block";
import SectionHeading from "../ui/section-heading";
import { Reveal } from "@/components/animation/reveal";

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <Reveal>
        <SectionHeading
          eyebrowClass="experience"
          title="From Campus to Career"
          subtitle="Balancing academic life, professional contributions, and organizational"
        />
      </Reveal>

      <div className="experience-grid">
        {experiences.map((experience, idx) => (
          <Reveal key={`${experience.company}-${experience.duration}`} delay={idx * 150}>
            <article
              className={`experience-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300${experience.centered ? " centered-card" : ""}`}
            >
              <div className="experience-card-head">
                <div className="company-logo" aria-hidden="true">
                  <Image
                    src={experience.logoImage}
                    alt={`${experience.company} logo`}
                    width={42}
                    height={42}
                    className="company-logo-inner object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="company-title group-hover:text-primary transition-colors duration-300">{experience.company}</h3>
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
          </Reveal>
        ))}
      </div>

      <Reveal delay={400}>
        <div className="experience-cta-wrap">
          <Link className="experience-cta group hover:-translate-y-1 hover:shadow-lg transition-transform duration-300" href="/experience-details">
            <span>View All Experience Details</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowUpRightIcon /></span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
