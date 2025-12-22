import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Send } from "lucide-react"; // Usando lucide para iconos consistentes

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  form: FormData;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

function Contact({ form, handleSubmit, handleChange }: Props) {
  // Estilos de input modernos: fondo gris muy claro, bordes suaves
  const inputStyles =
    "w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-[#1F1D2B] placeholder-gray-400 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all duration-300 font-medium";

  const { t } = useTranslation();

  return (
    <section
      className="bg-[#F3F4F6] py-24 px-6 md:px-20 2xl:px-40"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título con estilo de marca */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F1D2B] mb-4">
            {t("contact.title")}
          </h2>
          <div className="h-2 w-20 bg-[#2DD4BF] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
          {/* Formulario Estilo Card Blanca */}
          <form
            className="flex flex-col gap-5 max-w-lg w-full p-8 md:p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact.name_placeholder")}
              className={inputStyles}
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.email_placeholder")}
              className={inputStyles}
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder={t("contact.message_placeholder")}
              rows={5}
              className={`${inputStyles} resize-none`}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="group mt-4 bg-[#A855F7] text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-500/30 hover:bg-[#9333EA] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t("contact.submit_button")}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          {/* Información de contacto lateral */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-10">
            <div>
              <p className="text-2xl font-bold text-[#1F1D2B] mb-4">
                {t("contact.other_options_title")}
              </p>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
                {t("contact.other_options_text")}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:tu.email@ejemplo.com"
                className="flex items-center gap-4 text-gray-600 hover:text-[#A855F7] transition-colors group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Mail className="text-[#2DD4BF]" size={24} />
                </div>
                <span className="font-semibold text-lg">tu.email@ejemplo.com</span>
              </a>

              <a
                href="[URL_LINKEDIN]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-[#A855F7] transition-colors group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Linkedin className="text-[#2DD4BF]" size={24} />
                </div>
                <span className="font-semibold text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;