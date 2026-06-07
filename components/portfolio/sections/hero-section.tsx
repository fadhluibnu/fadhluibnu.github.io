import Image from "next/image";
import { CONTACT_EMAIL, socialLinks } from "../portfolio.data";
import { ArrowUpRightIcon, CopyIcon, DownloadIcon } from "../icons/portfolio-icons";
import PrimaryButton from "../ui/primary-button";
import SocialAnchor from "../ui/social-anchor";

export default function HeroSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <section className="hero-section" id="home">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Fadhlu Ibnu">
          <Image
            src="/assets/logo/logo-fadhluibnu.png"
            alt="Fadhlu Ibnu Logo"
            width={38}
            height={38}
            className="brand-mark object-cover"
          />
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
          <Image
            src="/assets/photo/small-photo.png"
            alt="Fadhlu Ibnu Avatar"
            width={41}
            height={41}
            className="hello-avatar object-cover"
          />
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
