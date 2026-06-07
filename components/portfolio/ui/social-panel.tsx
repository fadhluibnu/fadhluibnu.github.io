import { socialLinks } from "../portfolio.data";
import SocialAnchor from "./social-anchor";

export default function SocialPanel({ variant }: { variant: "about" | "contact" }) {
  const panelClassName = variant === "about" ? "about-social-card glass-card" : "contact-social-panel";
  const iconClassName = variant === "about" ? "about-social" : "contact-social";

  return (
    <div className={panelClassName} aria-label="Social media links">
      {socialLinks.map((social) => (
        <SocialAnchor key={`${variant}-${social.key}`} social={social} extraClassName={iconClassName} />
      ))}
    </div>
  );
}
