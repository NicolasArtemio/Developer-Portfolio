import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

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
}

function Contact({ form, handleSubmit, handleChange, loading }: Props) {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[var(--surface-1)] py-24 px-6 md:px-20 2xl:px-40 overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4">
            {t("contact.title")}
          </h2>
          <div className="h-2 w-20 bg-[#2DD4BF] rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
          {/* FORMULARIO */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5 max-w-lg w-full p-8 md:p-10 bg-[var(--surface-1)] rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-[var(--border-color)] backdrop-blur-xl"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="sr-only">{t("contact.name_placeholder")}</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t("contact.name_placeholder")}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)]"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              disabled={loading}
            />

            <label htmlFor="email" className="sr-only">{t("contact.email_placeholder")}</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("contact.email_placeholder")}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)]"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              disabled={loading}
            />

            <label htmlFor="message" className="sr-only">{t("contact.message_placeholder")}</label>
            <textarea
              name="message"
              id="message"
              placeholder={t("contact.message_placeholder")}
              rows={5}
              className="w-full p-4 border border-[var(--border-color)] rounded-lg bg-[var(--surface-0)] text-[var(--text-primary)] resize-none"
              value={form.message}
              onChange={handleChange}
              required
              autoComplete="off"
              disabled={loading}
            />

            <motion.button
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit"
              disabled={loading}
              className={`group mt-4 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#A855F7] hover:bg-[#9333EA] text-white shadow-lg shadow-purple-500/30"
                }
              `}
            >
              {loading ? "Enviando..." : t("contact.submit_button")}
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
                  className="flex items-center gap-4 text-[var(--text-primary)] hover:text-[#A855F7] transition-colors group"
                >
                  <div className="p-3 bg-[var(--surface-1)] rounded-xl shadow-sm group-hover:shadow-md transition-all">
                    <item.icon className="text-[#2DD4BF]" size={24} />
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

export default Contact;
