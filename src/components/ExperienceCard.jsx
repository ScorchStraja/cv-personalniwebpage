import Card from "./ui/Card";
import TechSkill from "./TechSkill";
import "../styles/experience.css";

export default function ExperienceCard({
  period,
  role,
  company,
  description,
  bullets = [],
  technologiesHeader,
  technologies,
}) {
  return (
    <Card>
      <div className="experience_card">
        <span className="experience_period">{period}</span>

        <h3 className="experience_role">{role}</h3>
        <p className="experience_company">{company}</p>

        <div className="experience_description">{description}</div>

        {bullets.length > 0 && (
          <ul className="experience_bullets">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <>
            <h4>{technologiesHeader || "Technologies:"}</h4>
            <div className="experience_technologies">
              {technologies.map((tech, index) => (
                <TechSkill
                  key={index}
                  name={tech.name}
                  link={tech.link}
                  hoverColor={tech.hoverColor}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
