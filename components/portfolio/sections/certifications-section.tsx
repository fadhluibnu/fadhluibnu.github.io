import { certifications } from "../portfolio.data";
import { ArrowUpRightIcon, ClockIcon } from "../icons/portfolio-icons";
import CertificatePreview from "../ui/certificate-preview";
import SectionHeading from "../ui/section-heading";

export default function CertificationsSection() {
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
            <CertificatePreview imageUrl={certification.image} />
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
