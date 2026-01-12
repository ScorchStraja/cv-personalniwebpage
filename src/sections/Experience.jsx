import ExperienceCard from "../components/ExperienceCard";
import "../styles/experience.css"

export default function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="experience_content">
        <ExperienceCard
          period="2025 — 2025 (Maj-Decembar)"
          role="inženjer elektrotehnike i računarstva"
          company="Uprava za utvrđivanje sposobnosti brodova za plovidbu (Ministarstvo Građevinarstva, Saobraćaja i Infrastrukture)"
          description="Worked on frontend and backend development, building well-structured applications with a focus on maintainability, performance, and clean UI architecture."
        />
        <ExperienceCard
          period="2023 — 2025"
          role="Junior Software Developer"
          company="ProSoft"
          description="Contributed to the development of web applications, collaborated with cross-functional teams, and gained hands-on experience with both client-side and server-side technologies."
        />
        <ExperienceCard
          period="2023 — 2023"
          role="intern"
          company="ProSoft"
          description="Contributed to the development of web applications, collaborated with cross-functional teams, and gained hands-on experience with both client-side and server-side technologies."
        />
      </div>
    </section>
  );
}