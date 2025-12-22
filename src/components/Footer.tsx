import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Lado izquierdo: Logo/Nombre */}
        <div className="text-[#1F1D2B] font-black text-xl tracking-tighter">
          Nico<span className="text-[#2DD4BF]">Dev</span>
        </div>

        {/* Centro: Copyright */}
        <div className="text-gray-400 text-sm font-medium">
          © {currentYear} <span className="text-[#1F1D2B]">Nicolás</span> — 
          <span className="ml-1">Fullstack Developer</span>
        </div>

        {/* Lado derecho: Frase o Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]"></span>
          </span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            {t("footer.status")}
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;