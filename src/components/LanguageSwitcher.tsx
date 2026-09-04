import { useTranslation } from "react-i18next";
import { Globe } from "@phosphor-icons/react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      role="group"
      aria-label={t("translation.lang")}
      className="lang-switcher"
    >
      <Globe
        size={16}
        className="lang-switcher__icon"
        aria-hidden="true"
        focusable="false"
      />
      <span className="lang-switcher__label">{t("translation.lang")}:</span>
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        aria-pressed={i18n.language === "es"}
        lang="es"
        className={`lang-switcher__btn${
          i18n.language === "es" ? " lang-switcher__btn--active" : ""
        }`}
      >
        ES
      </button>
      <span className="lang-switcher__sep" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-pressed={i18n.language === "en"}
        lang="en"
        className={`lang-switcher__btn${
          i18n.language === "en" ? " lang-switcher__btn--active" : ""
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
