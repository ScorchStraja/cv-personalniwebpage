import "../styles/cvviewdownload.css";
import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";

export default function CvActions() {
  const { t } = useTranslation();

  return (
    <div className="cv_actions">
      <FiFileText/>
      Curriculum Vitae 

      <a
        href="/CV_Strahinja_Karac.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv_btn"
      >
        {t("CV.view")}
      </a>

      <a
        href="/CV_Strahinja_Karac.pdf"
        download
        className="cv_btn"
      >
        {t("CV.download")}
      </a>
    </div>
  );
}
