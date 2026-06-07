import Image from "next/image";
import { CONTACT_EMAIL } from "../portfolio.data";
import { CopyIcon, DownloadIcon } from "../icons/portfolio-icons";
import PrimaryButton from "../ui/primary-button";
import SectionHeading from "../ui/section-heading";
import SocialPanel from "../ui/social-panel";
import { Reveal } from "@/components/animation/reveal";

export default function AboutSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <SectionHeading
          eyebrowClass="about"
          title="The Face Behind the Code"
          subtitle="Problem solver, a continuous learner, and a tech enthusiast."
        />
      </Reveal>

      <div className="about-grid">
        <div className="about-left">
          <Reveal delay={100}>
            <div className="section-kicker hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
              <span className="terminal-icon">&gt;</span>
              <span>Passionate About Building the Future</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <article className="about-card glass-card hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <h3>A Developer Fueled by Curiosity and Defined by Code</h3>
              <p>
                Passionate about building efficient systems, I thrive in strong teams. I am a disciplined learner
                committed to using my Backend Architecture skills to create scalable software.
              </p>
            </article>
          </Reveal>

          <Reveal delay={300}>
            <div className="contact-card glass-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <button className="contact-email js-copy-email transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95" type="button" aria-label="Copy email" onClick={onCopyEmail}>
                <span>email: {CONTACT_EMAIL}</span>
                <CopyIcon />
              </button>
              <PrimaryButton href="https://drive.google.com/file/d/1HIduSk-nCCV7RW1-ife-ec33zxriJAuz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span>Download CV</span>
                <DownloadIcon />
              </PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <SocialPanel variant="about" />
          </Reveal>
        </div>

        <Reveal delay={300} className="about-visual animate-float-slow" aria-hidden="true">
          <Image
            src="/assets/photo/profile-section-2.png"
            alt="Portrait of Fadhlu Ibnu"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        </Reveal>

        <Reveal delay={500} className="name-card glass-card hover:-translate-y-1 transition-transform duration-300">
          Hi, I’m Fadhlu Ibnu `Abbad 👋
        </Reveal>
      </div>
    </section>
  );
}
