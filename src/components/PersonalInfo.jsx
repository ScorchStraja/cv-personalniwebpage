import Intro from "../sections/Intro";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills"
import Projects from "../sections/Projects";
import Contact from "../sections/Contact"

export default function Content() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Intro />
      <Experience />
      <Skills/>
      <Contact/>
      <Projects />
    </div>
  );
}