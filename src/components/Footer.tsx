import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/NicolasArtemio", label: "GitHub" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/nicolasartemio/", label: "LinkedIn" },
    { icon: faEnvelope, href: "mailto:nicolasartemiodume@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { href: "#projects", label: t("navbar.projects") },
    { href: "#skills", label: t("skills.main_title") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  return (
    <footer className="bg-[var(--surface-0)] border-t border-[var(--border-color)]">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="text-[var(--text-primary)] font-black text-2xl tracking-tighter">
              Nico<span className="text-[var(--accent-primary)]">Dev</span>
            </div>
            <p className="text-sm text-[var(--text-primary)]/60 max-w-xs leading-relaxed">
              {t("footer.tagline", "Transformando ideas en experiencias digitales excepcionales.")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-widest mb-4">
              {t("footer.quick_links", "Enlaces")}
            </h4>
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-primary)]/70 hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col items-center md:items-end gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--surface-1)] border border-[var(--border-color)] text-[var(--text-primary)]/70 hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/50 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </motion.a>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/Nicolas_Artemio_Dumecv.pdf.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold text-sm shadow-lg shadow-[var(--accent-secondary)]/20 hover:shadow-[var(--accent-secondary)]/40 transition-shadow duration-300"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              {t("footer.download_cv", "Descargar CV")}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[var(--text-primary)]/50 text-sm">
            © {currentYear} <span className="text-[var(--text-primary)]/70">Nicolás Artemio</span> • Fullstack Developer
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-success)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-success)]"></span>
            </span>
            <span className="text-xs font-bold text-[var(--accent-success)] uppercase tracking-widest">
              {t("footer.status")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
