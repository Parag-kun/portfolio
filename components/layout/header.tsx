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
      href: "/ParagResume.pdf",
      icon: <FaRegFilePdf size={18} />,
      label: "Resume",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-end gap-4">
      <nav className="flex items-center gap-4 md:gap-6 bg-white/80 px-6 py-3 rounded-full border border-black/10 shadow-sm backdrop-blur-xl">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={
              link.href.startsWith("http") || link.href.endsWith(".pdf")
                ? "_blank"
                : undefined
            }
            rel={
              link.href.startsWith("http") || link.href.endsWith(".pdf")
                ? "noopener noreferrer"
                : undefined
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
