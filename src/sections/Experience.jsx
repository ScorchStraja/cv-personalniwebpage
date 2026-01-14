import ExperienceCard from "../components/ExperienceCard";
import { useTranslation } from "react-i18next";
import "../styles/experience.css";

export default function Experience() {
  const { t } = useTranslation();
  const items = t("Experience.items", { returnObjects: true });
  return (
    <section className="experience">
      <h1>{t("Experience.naslov")}</h1>

      <div className="experience_content">
        {items.map((item, idx) => (
          <ExperienceCard
            key={idx}
            period={item.period}
            role={item.role}
            company={item.company}
            description={item.description}
            bullets={item.bullets}
            technologies={item.technologies}
          />
        ))}
      </div>
    </section>
  );
}
