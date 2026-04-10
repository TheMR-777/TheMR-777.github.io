import { Github, Globe, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { portfolioData } from "../lib/portfolioDAL";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const profileSocialLinks: SocialLink[] = [
  { label: "GitHub", href: portfolioData.personal.social.github, icon: Github },
  { label: "LinkedIn", href: portfolioData.personal.social.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${portfolioData.personal.email}`, icon: Mail },
];

export const overviewSocialLinks: SocialLink[] = [
  { label: "GitHub", href: portfolioData.personal.social.github, icon: Github },
  { label: "LinkedIn", href: portfolioData.personal.social.linkedin, icon: Linkedin },
  { label: "Website", href: portfolioData.personal.social.website, icon: Globe },
  { label: "Email", href: `mailto:${portfolioData.personal.email}`, icon: Mail },
];