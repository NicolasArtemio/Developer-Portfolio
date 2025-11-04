import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();
  const isActive = (lng: string) =>
    i18n.language === lng
      ? "bg-green-400 text-gray-900 font-bold"
      : "bg-gray-700 text-white hover:bg-gray-600";
  return (
    <div>
      <span className="mr-2 text-sm text-gray-400">
        {t("translation.lang")}:
      </span>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-3 py-1 rounded ${isActive("es")}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${isActive("en")}`}
      >
        EN
      </button>

      <small className="ml-2 text-green-500">
        ({i18n.language.toUpperCase()})
      </small>
    </div>
  );
};

export default LanguageSwitcher;
