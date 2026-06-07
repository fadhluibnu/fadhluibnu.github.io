import Image from "next/image";
import Link from "next/link";
import { experiences } from "../portfolio.data";
import { ArrowUpRightIcon, BriefcaseIcon, ClockIcon, LinkIcon } from "../icons/portfolio-icons";
import MetaBlock from "../ui/meta-block";
import SectionHeading from "../ui/section-heading";

export default function ExperienceSection() {
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
                <Image
                  src={experience.logoImage}
                  alt={`${experience.company} logo`}
                  width={42}
                  height={42}
                  className="company-logo-inner object-cover"
                />
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
        <Link className="experience-cta" href="/experience-details">
          <span>View All Experience Details</span>
          <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
}
