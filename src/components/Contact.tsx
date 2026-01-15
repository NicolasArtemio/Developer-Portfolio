import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  form: FormData;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  loading: boolean;
  verificationLoading: boolean;
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
}

function Contact({ form, handleSubmit, handleChange, loading, verificationLoading, recaptchaRef }: Props) {
  const { t } = useTranslation();

  return (
    <section
      /* CAMBIO: bg-transparent para que use el azul del body en dark mode */
      className="bg-transparent py-24 px-6 md:px-20 2xl:px-40 overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4"
          >
            {t("contact.title")}
          </h2>
          <div className="h-2 w-20 bg-[var(--accent-primary)] rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
          {/* FORMULARIO */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            /* CAMBIO: bg-[var(--surface-1)] y sombras dinámicas */
            className="flex flex-col gap-5 max-w-lg w-full p-8 md:p-10 bg-[var(--surface-1)] rounded-[2.5rem] shadow-2xl dark:shadow-none border border-[var(--border-color)] backdrop-blur-xl"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="sr-only">{t("contact.name_placeholder")}</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t("contact.name_placeholder")}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/50 outline-none transition-all focus-ring"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              disabled={loading || verificationLoading}
            />

            <label htmlFor="email" className="sr-only">{t("contact.email_placeholder")}</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("contact.email_placeholder")}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/50 outline-none transition-all focus-ring"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              disabled={loading || verificationLoading}
            />

            <label htmlFor="message" className="sr-only">{t("contact.message_placeholder")}</label>
            <textarea
              name="message"
              id="message"
              placeholder={t("contact.message_placeholder")}
              rows={5}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)] resize-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 outline-none transition-all focus-ring"
              value={form.message}
              onChange={handleChange}
              required
              autoComplete="off"
              disabled={loading || verificationLoading}
            />

            <div className="flex justify-center my-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                theme="dark" // Optional: matches your portfolio style
              />
            </div>

            <motion.button
              whileHover={{ scale: (loading || verificationLoading) ? 1 : 1.02 }}
              whileTap={{ scale: (loading || verificationLoading) ? 1 : 0.98 }}
              type="submit"
              disabled={loading || verificationLoading}
              className={`group mt-4 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 focus-ring
                ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/90 text-white shadow-lg shadow-[var(--accent-secondary)]/30"
                }
              `}
            >
              {loading ? "Enviando..." : verificationLoading ? "Verificando..." : t("contact.submit_button")}
              {!loading && (
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              )}
            </motion.button>
          </motion.form>

          {/* INFO LATERAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8 lg:pl-10"
          >
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                {t("contact.other_options_title")}
              </p>
              <p className="text-[var(--text-primary)] opacity-80 text-lg leading-relaxed max-w-xs font-medium">
                {t("contact.other_options_text")}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  href: "mailto:nicolasartemiodume@gmail.com",
                  icon: Mail,
                  label: "nicolasartemiodume@gmail.com",
                },
                {
                  href: "https://www.linkedin.com/in/nicolas-artemio-dume-626223371/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.icon === Linkedin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-colors group focus-ring rounded-md p-2"
                >
                  <div className="p-3 bg-[var(--surface-1)] rounded-xl border border-[var(--border-color)] shadow-sm group-hover:shadow-md transition-all">
                    <item.icon className="text-[var(--accent-primary)]" size={24} />
                  </div>
                  <span className="font-semibold text-lg">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact
