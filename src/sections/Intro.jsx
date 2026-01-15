import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <div className="intro">
      <p>{t("intro.paragraph1")}</p>
      <p>{t("intro.paragraph2")}</p>
      <p>{t("intro.paragraph3")}</p>
    </div>
  );
}
