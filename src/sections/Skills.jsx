import { useTranslation } from "react-i18next";
import TechSkill from "../components/TechSkill";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoFirebase,
  IoInformationCircleOutline
} from "react-icons/io5";
import {
  FaAngular,
  FaReact,
  FaWindows,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import "../styles/skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <div className="skills_header">
        <h2>{t("Skills.naslov")}</h2>
      </div>
      <div className="skills_content">
        <h3>Programming Languages</h3>
        <div className="skills_content_techs">
          <TechSkill
            name={"C"}
            link={"https://www.c-language.org/"}
          ></TechSkill>
          <TechSkill name={"C++"} link={"https://isocpp.org/"}></TechSkill>
          <TechSkill
            name={"C#"}
            link={"https://dotnet.microsoft.com/en-us/languages/csharp"}
          ></TechSkill>
          <TechSkill
            name={"JavaScript"}
            link={"https://www.javascript.com/"}
          ></TechSkill>
        </div>
      </div>
      <div className="skills_content">
        <h3>Frontend</h3>
        <div className="skills_content_techs">
          <TechSkill
            icon={<IoLogoJavascript />}
            name={"JavaScript"}
            link={"https://www.javascript.com/"}
            hoverColor={"#f5e042"}
            hoverTextColor={"#000"}
          ></TechSkill>
          <TechSkill
            icon={<IoLogoHtml5 />}
            name={"HTML"}
            link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            hoverColor={"#e0502f"}
          ></TechSkill>
          <TechSkill
            icon={<IoLogoCss3 />}
            name={"CSS"}
            link={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            hoverColor={"#364fe0"}
          ></TechSkill>
          <TechSkill
            icon={<FaReact />}
            name={"React"}
            link={"https://react.dev/"}
            hoverColor={"#5fc2d9"}
            rotate
          ></TechSkill>
          <TechSkill
            icon={<FaAngular />}
            name={"Angular"}
            link={"https://angular.dev/"}
            hoverColor={"#d91639"}
          ></TechSkill>
          <TechSkill
            icon={<RiTailwindCssFill />}
            name={"Tailwind CSS"}
            link={"https://tailwindcss.com/"}
            hoverColor={"#4cbcf5"}
          ></TechSkill>
          <TechSkill
            icon={<FaWindows />}
            name={"WPF"}
            link={
              "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/"
            }
            hoverColor={"#2d71fa"}
          ></TechSkill>
          <TechSkill
            icon={<FaBootstrap />}
            name={"Bootstrap"}
            link={"https://getbootstrap.com/"}
            hoverColor={
              "linear-gradient(90deg, rgba(138, 0, 246, 1) 0%,rgba(111, 0, 239, 1) 100%)"
            }
          ></TechSkill>
        </div>
      </div>
      <div className="skills_content">
        <h3>Backend</h3>
        <div className="skills_content_techs">
          <TechSkill
            icon={<IoLogoNodejs />}
            name={"Node.js"}
            link={"https://nodejs.org/en"}
            hoverColor={"#427d3c"}
          ></TechSkill>
          <TechSkill
            icon={<TbBrandCSharp />}
            name={"C Sharp"}
            link={"https://dotnet.microsoft.com/en-us/languages/csharp"}
            hoverColor={"#bc74d6"}
          ></TechSkill>
          <TechSkill
            name={"Express"}
            link={"https://expressjs.com/"}
            hoverColor={"#fff"}
            hoverTextColor={"#000"}
          ></TechSkill>
        </div>
      </div>
      <div className="skills_content">
        <h3>Databases & Storage</h3>
        <div className="skills_content_techs">
          <TechSkill
            icon={<IoLogoFirebase />}
            name={"Firebase (Firestore, Auth)"}
            link={"https://firebase.google.com/"}
            hoverColor={
              "linear-gradient(90deg, rgba(252, 197, 50, 1) 0%,rgba(217, 48, 18, 1) 100%)"
            }
          ></TechSkill>
          <TechSkill
            icon={<TbSql />}
            name={"SQL Server"}
            link={"https://www.microsoft.com/en-us/sql-server"}
            hoverColor={"#1b6dbf"}
          ></TechSkill>
          <TechSkill
            icon={<TbSql />}
            name={"SQL"}
            link={"https://en.wikipedia.org/wiki/SQL"}
          ></TechSkill>
        </div>
      </div>
      <div className="skills_content">
        <h3>Tools & Workflow</h3>
        <div className="skills_content_techs">
          <TechSkill
            icon={<FaGitAlt />}
            name={"Git"}
            link={"https://git-scm.com/"}
            hoverColor={"#ed5a40"}
          ></TechSkill>
          <TechSkill
            icon={<FaGithub />}
            name={"GitHub"}
            link={"https://github.com/"}
            hoverColor={"#171515"}
            hoverTextColor={"#fff"}
          ></TechSkill>
          <TechSkill
            icon={<IoLogoFirebase />}
            name={"Firebase tools / Hosting"}
            link={"https://firebase.google.com/"}
            hoverColor={
              "linear-gradient(90deg, rgba(252, 197, 50, 1) 0%,rgba(217, 48, 18, 1) 100%)"
            }
          ></TechSkill>
          <TechSkill
            icon={<FaNpm />}
            name={"npm"}
            link={"https://www.npmjs.com/"}
            hoverColor={"#c94040"}
          ></TechSkill>
          <TechSkill
            icon={<VscVscode />}
            name={"VS Code"}
            link={"https://code.visualstudio.com/"}
            hoverColor={"#438bf7"}
          ></TechSkill>
          <TechSkill
            icon={<DiVisualstudio />}
            name={"Visual Studio"}
            link={"https://visualstudio.microsoft.com"}
            hoverColor={"#5d2b8f"}
          ></TechSkill>
        </div>
      </div>
    </div>
  );
}
