import "../styles/cvviewdownload.css";
import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";

export default function CvActions() {
  const { t, i18n } = useTranslation();

  const isSr = i18n.language?.toLowerCase().startsWith("sr");

  const cvHref = isSr
    ? "/CV_StrahinjaKarac_CV_SR.pdf"
    : "/CV_StrahinjaKarac_CV_ENG.pdf";

  const cvFileName = isSr
    ? "CV_StrahinjaKarac_CV_SR.pdf"
    : "CV_StrahinjaKarac_CV_ENG.pdf";

  return (
    <div className="cv_actions">
      <FiFileText/>
      Curriculum Vitae 

      <a
        href={cvHref}
        target="_blank"
        rel="noopener noreferrer"
        className="cv_btn"
      >
        {t("CV.view")}
      </a>

      <a
        href={cvHref}
        download
        className="cv_btn"
      >
        {t("CV.download")}
      </a>
    </div>
  );
}
