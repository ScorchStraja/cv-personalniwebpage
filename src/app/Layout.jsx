import About from "../components/About";
import PersonalInfo from "../components/PersonalInfo";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="page">
      <div className="container">
        <div className="layout">
          <aside className="layout_about">
            <About />
          </aside>

          <main className="layout_main">
            <PersonalInfo />
          </main>
        </div>
      </div>
    </div>
  );
}
