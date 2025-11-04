import { useTranslation } from "react-i18next";

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
  const inputStyles =
    "p-3 bg-gray-800 border border-green-500 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition duration-200";

  const { t } = useTranslation();

  return (
    <section
      className="bg-gray-900 text-white pt-4 pb-16 px-6 md:px-20 2xl:px-40"
      id="contacto"
    >
      {/* Título de la sección */}
      <h2 className="text-3xl font-bold border-b-2 border-green-500 inline-block mb-10 pb-1">
        {t("contact.title")}
      </h2>

      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
        <form
          className="flex flex-col gap-4 max-w-lg w-full p-6 bg-gray-800 rounded-xl shadow-lg border border-green-700"
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

          {/* Campo Email */}
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
            className="mt-2 bg-green-500 text-gray-900 font-bold py-3 rounded hover:bg-green-400 transition duration-300"
          >
            {t("contact.submit_button")}
          </button>
        </form>

        <div className="space-y-4 lg:max-w-xs lg:pt-10">
          <p className="text-lg font-semibold text-green-400">
            {t("contact.other_options_title")}
          </p>
          <p className="text-gray-300">{t("contact.other_options_text")}</p>

          <p className="text-sm text-gray-400">
            Email:{" "}
            <a
              href="mailto:tu.email@ejemplo.com"
              className="text-white hover:text-green-500"
            >
              tu.email@ejemplo.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            LinkedIn:{" "}
            <a
              href="[URL_LINKEDIN]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              [URL_LINKEDIN]
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
