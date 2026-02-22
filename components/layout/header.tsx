import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaRegFilePdf,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { luckiestGuy } from "@/utils/fonts";
import { cn } from "@/utils/tailwind";

export default function Header() {
  const links = [
    {
      href: "tel:+919834534297",
      icon: <FaPhone size={18} />,
      label: "Phone",
    },
    {
      href: "https://wa.me/919834534297",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
    },
    {
      href: "mailto:paragbokde51@gmail.com",
      icon: <FaEnvelope size={18} />,
      label: "Email",
    },
    {
      href: "https://github.com/Parag-kun",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/parag-bokde-30b9241b1",
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/ParagBokde",
      icon: <FaXTwitter size={18} />,
      label: "X",
    },
    {
      href: "https://www.instagram.com/paragbokde/?hl=en",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      href: "#",
      icon: <FaRegFilePdf size={18} />,
      label: "Resume",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-white/50 border-b border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <Link href="/">
        <h1
          className={cn(
            "text-2xl md:text-3xl tracking-wider text-black",
            luckiestGuy.className,
          )}
        >
          Parag Bokde
        </h1>
      </Link>
      <nav className="flex items-center gap-4 md:gap-6 bg-white/80 px-6 py-3 rounded-full border border-black/10 shadow-sm backdrop-blur-xl">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={link.label}
            className="text-zinc-600 hover:text-black transition-all hover:scale-110 active:scale-95"
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </header>
  );
}
