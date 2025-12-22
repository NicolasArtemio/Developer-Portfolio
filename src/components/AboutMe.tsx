import { useTranslation } from "react-i18next";


const AboutMe = () => {
  const { t } = useTranslation();

  return (
    /* Contenedor principal que centra todo el bloque en la columna */
    <div className="flex flex-col items-center w-full">
      
      <div className="max-w-md w-full">
        
        {/* FOTO: Centrada respecto al contenedor max-w-md */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* El resplandor decorativo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A855F7] to-[#2DD4BF] rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <img 
              src="/perfil.png"
              alt="Nicolás" 
              className="relative h-72 w-72 md:h-80 md:w-80 object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
            />
          </div>
        </div>

        {/* TEXTO: Alineado a la izquierda */}
        <div className="text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-[#1F1D2B] tracking-tight">
              {t("about.title")}
            </h2>
            {/* Línea decorativa turquesa */}
            <div className="h-2 w-16 bg-[#2DD4BF] rounded-full"></div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            {t("about.description")}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;