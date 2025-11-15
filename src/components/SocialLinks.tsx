import { FC } from "react";
import { Instagram, Facebook } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "facebook" | "tiktok";
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/rafaelaghayevinfinland",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/rafaelaghayevinfinland",
    icon: "facebook",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@rafaelaghayevinfinland",
    icon: "tiktok",
  },
];

const TikTokIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "instagram":
      return <Instagram className="w-6 h-6" />;
    case "facebook":
      return <Facebook className="w-6 h-6" />;
    case "tiktok":
      return <TikTokIcon />;
    default:
      return null;
  }
};

export const SocialLinks: FC = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-12">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-all hover:scale-110"
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};
