import Card from "./ui/Card";

export default function ExperienceCard({
  period,
  role,
  company,
  description,
}) {
  return (
    <Card>
      <div className="experience_card">
        <span className="experience_period">{period}</span>

        <h3 className="experience_role">{role}</h3>
        <p className="experience_company">{company}</p>

        <p className="experience_description">{description}</p>
      </div>
    </Card>
  );
}
