import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo/Nombre */}
        <div className="text-[var(--text-primary)] font-black text-xl tracking-tighter">
          Nico<span className="text-[var(--accent-primary)]">Dev</span>
        </div>

        {/* Copyright */}
        <div className="text-[var(--text-primary)]/60 text-sm font-medium">
          © {currentYear} <span className="text-[var(--text-primary)]">Nicolás</span> —
          <span className="ml-1">Fullstack Developer</span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
          </span>
          <span className="text-xs font-bold text-[var(--text-primary)]/70 uppercase tracking-widest">
            {t("footer.status")}
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
