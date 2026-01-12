import "../styles/techskill.css";

export default function TechSkill({ icon, name, link, hoverColor, hoverTextColor, rotate}) {
  return (
    <a
      className="tech_skill"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--tech-hover": hoverColor,
        "--tech-hover-text": hoverTextColor,
      }}
    >
      {icon && <div className={`tech_skill_icon ${rotate ? "rotate_icon" : ""}`}>{icon}</div>}
      <div className="tech_skill_name">{name}</div>
    </a>
  );
}
