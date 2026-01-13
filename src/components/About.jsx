import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import CVButtons from "./CVViewDownload";
import profileImg from "../assets/profile_photo.png";
import GlobeCard from "./GlobeCard";
import "../styles/about.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function About() {
  const { t } = useTranslation();
  const subject = encodeURIComponent(t("Email.naslov"));
  const body = encodeURIComponent(t("Email.body"));

  return (
    <div className="about">
      <div className="about_top">
        <div className="about_photoWrap">
          <img className="about_photo" src={profileImg} alt={t("about.ime")} />
        </div>
        <div className="about_header">
          <h1>{t("about.ime")}</h1>
          <h2>{t("about.titula")}</h2>
        </div>

        <p>{t("about.kratkiOpis")}</p>

        <p>
          Email:{" "}
          <a href={`mailto:karacstrah@gmail.com?subject=${subject}&body=${body}`} className="about_mail">
            karacstrah@gmail.com
          </a>
        </p>
      </div>

      <CVButtons />

      <div className="about_bottom">
        <div className="about_socials">
          <LanguageToggle />
          <a href="https://github.com/ScorchStraja">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/strahinja-karac-b347a323b/">
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/strahinjakarac/">
            <FiInstagram />
          </a>
        </div>
      </div>

      <GlobeCard/>
    </div>
  );
}
