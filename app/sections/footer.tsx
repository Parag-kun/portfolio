import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-zinc-500 text-sm relative z-50">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Parag-kun"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub
            size={20}
            className="hover:text-black transition-colors duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/parag-bokde-30b9241b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            size={20}
            className="hover:text-black transition-colors duration-200"
          />
        </a>
        <a
          href="https://x.com/ParagBokde"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter
            size={20}
            className="hover:text-black transition-colors duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/paragbokde/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram
            size={20}
            className="hover:text-black transition-colors duration-200"
          />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Parag Bokde. All rights reserved.</p>
    </footer>
  );
}
