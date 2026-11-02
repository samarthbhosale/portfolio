import type { SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Samarth Bhosale",
  email: "bhosalesamarth0@gmail.com",
  contact: "+91 8796304669",
  location: "Pune, MH,India",
  // role, location, email ...
  socials: [
    { label: "GitHub", href: "https://github.com/samarthbhosale" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samarthbhosale/" },
    // LinkedIn ...
  ] satisfies SocialLink[],
  resume: {
    href: "/resume/Samarth_Bhosale_Resume[Full Stack Developer].pdf",
    label: "Resume",
  },
};
