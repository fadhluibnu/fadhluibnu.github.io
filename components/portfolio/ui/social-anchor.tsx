import type { SocialLink } from "../portfolio.types";
import {
  GitHubSocialIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  TwitterIcon,
} from "../icons/portfolio-icons";

export default function SocialAnchor({ social, extraClassName }: { social: SocialLink; extraClassName?: string }) {
  const isExternal = social.href.startsWith("http");
  const className = extraClassName ?? social.positionClass;

  const ICONS = {
    linkedin: <LinkedInIcon />,
    instagram: <InstagramIcon idSuffix={className} />,
    twitter: <TwitterIcon />,
    github: <GitHubSocialIcon />,
    tiktok: <TikTokIcon />,
  };

  const IconComponent = ICONS[social.key as keyof typeof ICONS];

  return (
    <a
      className={`social-icon ${className} transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:bg-primary/10 active:scale-95`}
      href={social.href}
      aria-label={social.label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {IconComponent}
    </a>
  );
}
