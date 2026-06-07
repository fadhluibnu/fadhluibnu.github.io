import { CONTACT_EMAIL } from "../portfolio.data";
import { CopyIcon, DownloadIcon } from "../icons/portfolio-icons";
import PrimaryButton from "../ui/primary-button";
import SectionHeading from "../ui/section-heading";
import SocialPanel from "../ui/social-panel";

export default function AboutSection({ onCopyEmail }: { onCopyEmail: () => void }) {
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
