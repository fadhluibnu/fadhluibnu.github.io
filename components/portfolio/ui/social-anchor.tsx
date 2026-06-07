import type { SocialKey, SocialLink } from "../portfolio.types";
import {
  GitHubSocialIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  TwitterIcon,
} from "../icons/portfolio-icons";

export default function SocialAnchor({
  social,
  extraClassName,
}: {
  social: SocialLink;
  extraClassName?: string;
}) {
  const isExternal = social.href.startsWith("http");
  const className = extraClassName ?? social.positionClass;

  return (
    <a
      href={social.href}
      className={`social-icon ${className}`}
      aria-label={social.label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <SocialSvg type={social.key} idSuffix={className} />
    </a>
  );
}

function SocialSvg({ type, idSuffix }: { type: SocialKey; idSuffix: string }) {
  if (type === "linkedin") return <LinkedInIcon />;
  if (type === "instagram") return <InstagramIcon idSuffix={idSuffix} />;
  if (type === "twitter") return <TwitterIcon />;
  if (type === "github") return <GitHubSocialIcon />;
  return <TikTokIcon />;
}
