import { useTranslation } from "react-i18next";
import "../styles/LanguageToggle.css";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("sr") ? "sr" : "en";

  const setLang = (lang) => {
    if (lang === current) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div
      className={`langToggle ${current === "en" ? "is-en" : "is-sr"}`}
      role="group"
      aria-label="Language"
    >
      <span className="langToggle_slider" aria-hidden="true" />

      <button
        type="button"
        className={`langToggle_btn ${current === "en" ? "is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
      >
        EN
      </button>

      <button
        type="button"
        className={`langToggle_btn ${current === "sr" ? "is-active" : ""}`}
        onClick={() => setLang("sr")}
        aria-pressed={current === "sr"}
      >
        SR
      </button>
    </div>
  );
}
