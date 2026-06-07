import { certifications } from "../portfolio.data";
import { ArrowUpRightIcon, ClockIcon } from "../icons/portfolio-icons";
import CertificatePreview from "../ui/certificate-preview";
import SectionHeading from "../ui/section-heading";
import { Reveal } from "@/components/animation/reveal";

export default function CertificationsSection() {
  return (
    <section className="certifications-section" id="certifications">
      <Reveal>
        <SectionHeading
          eyebrowClass="certifications"
          title="Competence Certified"
          subtitle="Prove my competence goes beyond just writing code"
        />
      </Reveal>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <Reveal key={certification.id} delay={index * 150}>
            <article className="certification-card group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden rounded-xl mb-4">
                <CertificatePreview imageUrl={certification.image} />
              </div>
              <h3 className="certification-name group-hover:text-primary transition-colors duration-300">{certification.name}</h3>
              <p className="certification-provider">{certification.provider}</p>
              <div className="certification-badge">
                <ClockIcon />
                <span>{certification.status}</span>
              </div>
              <p className="certification-date">{certification.date}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* <div className="certification-cta-wrap">
        <a className="certification-cta" href="#all-certifications">
          <span>View All Certifications</span>
          <ArrowUpRightIcon />
        </a>
      </div> */}
    </section>
  );
}
