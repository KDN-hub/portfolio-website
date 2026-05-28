import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-md text-text-muted py-8 text-center relative mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-10 mb-6">
          <a
            href="https://www.linkedin.com/in/kamsiyochi-nwakwuribe-346493302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:kamsiyochinwakwuribe@gmail.com"
            className="text-3xl hover:text-white transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:08068705361"
            className="text-3xl hover:text-white transition duration-300"
            aria-label="Phone"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://x.com/thistechkid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition duration-300"
            aria-label="Twitter / X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/KDN-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Nwakwuribe Kamsi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
