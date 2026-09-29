import { Mail, Linkedin } from "lucide-react";
import type { ComponentType } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const CALENDLY_URL = "https://calendly.com/jhonalain74/30min";

export const ROLE = "Data & AI Automation Engineer";
export const LOCATION = "Makati, Philippines";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

interface Social {
  label: string;
  /* What the visitor sees, e.g. the address or number */
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
}

export const socials: Social[] = [
  { label: "Email", value: "jhon.alain5@gmail.com", href: "mailto:jhon.alain5@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jhongennes",
    href: "https://www.linkedin.com/in/jhongennes/",
    icon: Linkedin,
    external: true,
  },
  { label: "WhatsApp", value: "+63 905 321 8138", href: "https://wa.me/639053218138", icon: WhatsAppIcon, external: true },
];
